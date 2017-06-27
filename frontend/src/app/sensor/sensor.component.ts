import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sensor',
  templateUrl: './sensor.component.html',
  styleUrls: ['./sensor.component.scss']
})
export class SensorComponent implements OnInit {
@Input()
label: String
@Input()
type: String
@Input()
last: number
@Input()
Promedio: number
@Input()
Max: number
@Input()
Min: number


  constructor() { }

  ngOnInit() {
  }

}
