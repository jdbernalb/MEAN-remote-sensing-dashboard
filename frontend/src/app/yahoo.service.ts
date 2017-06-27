import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/Rx";
@Injectable()
export class YahooService {

  constructor(private _http: Http) { }

	getWeather(_city: string): Observable <any> {

        return this._http.get('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22' + _city + '%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys')

						.map(response => response.json())

						.catch(error => {

							alert (error);

							return Observable.throw(error.json())

						})

      }
}
