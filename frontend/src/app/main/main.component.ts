import { Component, OnInit } from '@angular/core';
import { YahooService } from "app/yahoo.service";
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
 
})
export class MainComponent implements OnInit {



  constructor(private _weatherService: YahooService) { }

  ngOnInit() {
  }

  


}


