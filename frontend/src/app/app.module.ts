import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MongolabService } from "./mongolab.service";
import { FirebService } from "./fireb.service";
import { YahooService } from "./yahoo.service";
import { AppComponent } from './app.component';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import {MaterialModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DateComponent } from './date/date.component';
import { ChartsComponent } from './charts/charts.component';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { NgDateRangePickerModule } from 'ng-daterangepicker';
import { SensorComponent } from './sensor/sensor.component';
import { AngularFireModule } from 'angularfire2';
import {FirebaseApp} from 'angularfire2/app';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { SecurityComponent } from './security/security.component';
import { ImageComponent } from './image/image.component';


const appRoutes: Routes = [
  { path: 'nodes/:dates', component: ChartsComponent },
  { path: 'main', component: MainComponent },
  { path: 'security', component: SecurityComponent },
  { path: 'dates', component: DateComponent },
];

export const firebaseConfig = {
  apiKey: 'AIzaSyAgp8vMgVDOVZEreQDox9IVbEo0rV8YCIc',
  authDomain: 'ladronladron-7f291.firebaseapp.com',
  databaseURL: 'https://ladronladron-7f291.firebaseio.com',
  storageBucket: 'ladronladron-7f291.appspot.com',
  messagingSenderId: '734501759986'
};
export const firebaseConfig2 = {
    apiKey: "AIzaSyD9DWrx5PFCqj-2sR728PCUQkCvxo47Ovs",
    authDomain: "prueba-7c78f.firebaseapp.com",
    databaseURL: "https://prueba-7c78f.firebaseio.com",
    projectId: "prueba-7c78f",
    storageBucket: "prueba-7c78f.appspot.com",
    messagingSenderId: "685155594722"
};
@NgModule({
  declarations: [
    AppComponent,
    DateComponent,
    ChartsComponent,
    MainComponent,
    SensorComponent,
    SecurityComponent,
    ImageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ChartsModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgDateRangePickerModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot(appRoutes),
  ], 
  providers: [MongolabService,FirebService, YahooService],
  bootstrap: [AppComponent],
  entryComponents: [ImageComponent],
})
export class AppModule { }
