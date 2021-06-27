import { StatesService } from './../../services/states.service';
import { filter, map, startWith } from 'rxjs/operators';
import { Component, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { State } from 'src/models/State.model';

@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.css']
})
export class StatesComponent implements OnInit {

  @Output() isStateChanged: boolean = false;
  myControl = new FormControl();
  states: State[] = [];
  filteredOptions!: State[];
  selectedState: State | undefined;

  constructor(private statesService : StatesService) { }

  ngOnInit(): void {
    this.getStates();
    this.myControl.valueChanges
    .subscribe(    
      value  => { this.filteredOptions = this._filter(value)} 
    )}

  private _filter(value: string): State[] {
    const filterValue = value.toString().toLowerCase();
    return this.states.filter(state => state.state_name.toLowerCase().includes(filterValue));
  }

  public selectOption(option: any ){
    this.selectedState = option
    this.isStateChanged = true
  }
  public displayFn(subject: { state_name: any, state_id: any; }){
    this.selectedState = subject;
    return subject ? subject.state_name : undefined;
  }

  public getStates(){
    this.statesService.getStates()
    .subscribe(
      (data : any) =>{
        console.log(data)
        this.states = data.states,
        this.filteredOptions = data.states,
        (error: any) => console.error('Error',error);
      }
    )
  }
}
