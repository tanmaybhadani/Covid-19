import { Component, Input, OnChanges, Output, SimpleChanges, EventEmitter } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CentersService } from 'src/app/services/centers.service';
import { Center } from 'src/models/center.model';

@Component({
  selector: 'app-centerlist',
  templateUrl: './centerlist.component.html',
  styleUrls: ['./centerlist.component.css']
})
export class CenterlistComponent implements OnChanges {

  selectedFilter: string = "";
  selectedFilters: string[] = [];
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();
  ELEMENT_DATA: Center[] = [];
  @Input() displayedColumns: string[] = [];
  @Input() filterList: string[] = [];
  @Input() dataSource = new MatTableDataSource<Center>(this.ELEMENT_DATA);

  constructor(private centersService: CentersService) { }

  setFilters(value: string){
    this.notify.emit(value)
  }
  // setFilters(value: string){
  //   const index = this.selectedFilters.indexOf(value);
  //   index > -1 ? this.selectedFilters.splice(index,1) : this.selectedFilters.push(value);
  //   this.notify.emit(this.selectedFilters);
  // }
  ngOnChanges(changes: SimpleChanges): void {
    // if(this.dataSource != undefined)
    //   this.displayedColumns =  ['center_id', 'name', 'address', 'state_name', 'district_name', 'block_name', 'pincode', 'lat', 'long', 'from', 'to', 'fee_type'];
  }
}