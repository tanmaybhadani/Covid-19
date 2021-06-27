import { CentersService } from './../../services/centers.service';
import { Component, Input, OnInit } from '@angular/core';
import { Center } from 'src/models/center.model';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';



@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.css'],
  providers: [CentersService, MatTableModule]
})
export class CenterComponent implements OnInit {

  @Input('name') pincode: string = "";
  displayedColumns: string[] = [];
  filterList: string[] = [];
  selectedFilters: string[] = [];
  ELEMENT_DATA: Center[] = [];
  dataSource = new MatTableDataSource<Center>(this.ELEMENT_DATA);

  constructor(private centersService: CentersService) { }

  onSubmit() {
    this.getCenters(this.pincode)
    this.displayedColumns = ['name', 'address', 'state_name', 'district_name', 'block_name', 'from', 'to', 'fee_type'];
    this.filterList = ["Age 18+", "Age 45+", "Covaxin", "Covishield", "Sputnik V", "Free", "Paid"];
  };

  ngOnInit(): void { }

  setFilters(value: string){
    const index = this.selectedFilters.indexOf(value);
    index > -1 ? this.selectedFilters.splice(index,1) : this.selectedFilters.push(value);
    console.log("filters : ", this.selectedFilters)
    console.log("filter : ", value)
    console.log("ds",this.dataSource);
    this.dataSource = new MatTableDataSource<Center>(this.ELEMENT_DATA);
    this.dataSource.filter = value.trim().toLowerCase();    
  }
  // public setFilters(data: string[]){
  //   this.selectedFilters = data;
  //   console.log("filters : ", this.selectedFilters)
  //   this.dataSource.filter = data;
  // }
  public getCenters(_pincode: string) {
    this.centersService.getCenters(this.pincode)
      .subscribe(
        (data: any) => {
          console.log(data)
          this.ELEMENT_DATA = data.centers
          this.dataSource = data.centers,
            (error: any) => console.error('Error', error);
        });
  }

}
