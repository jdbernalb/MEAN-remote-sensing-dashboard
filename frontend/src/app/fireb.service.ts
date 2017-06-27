import { Injectable, Inject  } from '@angular/core';
import {AngularFireDatabase,FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';
@Injectable()
export class FirebService {
items: FirebaseListObservable<any[]>;
images: String
  constructor( db: AngularFireDatabase,  ) { 
  this.items = db.list('/Eventos', {
      query: {
        limitToLast: 50
      }
    });


  }


}
