import { Component, OnInit } from '@angular/core';
import { NgDateRangePickerOptions   } from 'ng-daterangepicker';
import { MongolabService } from "app/mongolab.service";
@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})

export class DateComponent {
	last: any;
  DB: any;
  Temp: number;
  Hum: number;
  HumT: number;
  Pres: number;
  avgTemp: number;
  avgHum: number;
  avgHumT: number;
  avgPres: number;
  minTemp: number;
  minHum: number;
  minHumT: number;
  minPres: number;
  maxTemp: number;
  maxHum: number;
  maxHumT: number;
  maxPres: number;
  options: NgDateRangePickerOptions;
constructor(private mongolab: MongolabService) { 
}


  ngOnInit() {
    		let y = this.mongolab.getLast();
      y.subscribe(res=>{
        this.last=res.json()[0].Sensores;
        this.Temp = this.last.Temp;
        this.Hum = this.last.Hum;
        this.HumT = this.last.HumT;
        this.Pres = this.last.Pres;
      });
          		let z = this.mongolab.Dashboard();
      z.subscribe(res=>{
        this.DB=res.json()[0];
        this.avgTemp = Math.round(this.DB.avgTemp*100)/100;
        this.minTemp = Math.round(this.DB.minTemp*100)/100;
        this.maxTemp = Math.round(this.DB.maxTemp*100)/100;
        this.avgHum = Math.round(this.DB.avgHum*100)/100;
        this.minHum = Math.round(this.DB.minHum*100)/100;
        this.maxHum = Math.round(this.DB.maxHum*100)/100;
        this.avgHumT = Math.round(this.DB.avgHumT*100)/100;
        this.minHumT = Math.round(this.DB.minHumT*100)/100;
        this.maxHumT = Math.round(this.DB.maxHumT*100)/100;
        this.avgPres = Math.round(this.DB.avgPres*100)/100;
        this.minPres = Math.round(this.DB.minPres*100)/100;
        this.maxPres = Math.round(this.DB.maxPres*100)/100;
      });


    this.options = {
	  theme: 'teal',
	  range: 'tm',
	  dayNames: ['L', 'M', 'I', 'J', 'V', 'S', 'D'],
	  presetNames: ['Este Mes', 'Mes Pasado', 'Esta Semana', 'Semana Pasada', 'Este Año', 'Año Pasado', 'Inicio', 'Fin'],
	  dateFormat: 'yMd',
	  outputFormat: 'DD/MM/YYYY',
	  startOfWeek: 1,
	};
  }
}