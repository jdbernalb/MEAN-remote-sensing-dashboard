import { Component, OnInit, Input, Inject } from '@angular/core';
import {FirebaseListObservable} from "angularfire2/Database";
import { FirebService } from "app/fireb.service";
import {MdDialog} from '@angular/material';
import { ImageComponent } from '../image/image.component';
import {MD_DIALOG_DATA} from '@angular/material';
@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.scss']
})
export class SecurityComponent implements OnInit {
public messages: FirebaseListObservable<any>;
  constructor(public AF: FirebService, public dialog: MdDialog) { 
    this.messages = this.AF.items;
  }

icon(a){
  if (a==1)
    return "https";
  else if (a==2)
    return "wifi tethering";
  else if (a==3)
    return "camera";
  else if (a==4)
    return "call";
}

  ngOnInit() {

  }

  openDialog(a) {
    let dialog = this.dialog.open(ImageComponent);
    dialog.componentInstance.url = a;

  }
  console(a){
    console.log(a);
  }

}

