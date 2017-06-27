import { Component, OnInit, Input } from '@angular/core';
import {MdDialogRef} from '@angular/material';
@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {
@Input()
url: String

  constructor(public dialogRef:MdDialogRef<ImageComponent>) { }

  ngOnInit() {
  }

}
