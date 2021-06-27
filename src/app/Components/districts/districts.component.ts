import { State } from 'src/models/State.model';
import { DistrictsService } from './../../services/districts.service';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { District } from 'src/models/District.model';
import { MatTableDataSource } from '@angular/material/table';
import { Center } from 'src/models/center.model';

@Component({
  selector: 'app-districts',
  templateUrl: './districts.component.html',
  styleUrls: ['./districts.component.css']
})
export class DistrictsComponent implements OnChanges{

  myControl = new FormControl();
  districts: District[] = [];
  filteredOptions!: District[];
  @Input() state: State | undefined ;
  @Input() isStateChanged = false;
  filterList: string[] = [];
  selectedFilters: string[] = [];


  ELEMENT_DATA: Center[] = [];
  dataSource = new MatTableDataSource<Center>(this.ELEMENT_DATA);
  districtId!: string;
  displayedColumns: string[] = [];

  constructor(private districtsService : DistrictsService) { }

  // ngOnChanges(): void {

  // }
  ngOnChanges(changes : SimpleChanges): void {
    console.log("change: ", changes);
    const state = changes['state'].currentValue;
    if(state != undefined){
      this.myControl.setValue('')
      this.getDistricts(state.state_id);
      this.myControl.valueChanges
      .subscribe(
        value => { this.filteredOptions = this._filter(value)}
      )
    }
}

  private _filter(value: string): District[] {
    const filterValue = value.toString().toLowerCase();
    return this.districts.filter(district => district.district_name.toLowerCase().includes(filterValue));
  }

  public displayFn(subject: { district_name: any; }){
    console.log("myControl :",this.myControl)
    return subject ? subject.district_name : undefined;
  }

  setFilters(value: string){
    const index = this.selectedFilters.indexOf(value);
    index > -1 ? this.selectedFilters.splice(index,1) : this.selectedFilters.push(value);
    console.log("filters : ", this.selectedFilters)
    console.log("filter : ", value)
    console.log("ds",this.dataSource);
    this.dataSource = new MatTableDataSource<Center>(this.ELEMENT_DATA);
    this.dataSource.filter = value.trim().toLowerCase();    
  }

  public getDistricts(stateId : string){
    this.districtsService.getDistricts(stateId)
    .subscribe(
      data => {
        console.log(data)
        console.log(this.state)
        this.districts = data.districts;
        this.filteredOptions = data.districts;
      }
    )
  }

  public getCenters(district : District){
    this.districtId = district.district_id.toString();
    this.districtsService.getCenters(district.district_id.toString())
    .subscribe(
      data => {
        console.log(data)
        this.ELEMENT_DATA = data.centers
        this.dataSource = data.centers,
        (error: any) => console.error('Error',error);
      }
    )
    this.filterList = ["Age 18+","Age 45+","Covaxin","Covishield","Sputnik V","Free","Paid"];
    this.displayedColumns =  ['name', 'address', 'block_name', 'pincode', 'from', 'to', 'fee_type'];

  }


  
}
