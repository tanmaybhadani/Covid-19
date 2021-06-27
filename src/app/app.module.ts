import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CenterComponent } from './Components/center/center.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table'
import { HttpClientModule } from '@angular/common/http'
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatTabsModule} from '@angular/material/tabs';
import { CenterlistComponent } from './Components/centerlist/centerlist.component';
import { StatesComponent } from './Components/states/states.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { DistrictsComponent } from './Components/districts/districts.component';
import {MatChipsModule} from '@angular/material/chips';
import { MatSelectModule } from '@angular/material/select';




@NgModule({
  declarations: [
    AppComponent,
    CenterComponent,
    CenterlistComponent,
    StatesComponent,
    DistrictsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule,
    HttpClientModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatTabsModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatChipsModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
