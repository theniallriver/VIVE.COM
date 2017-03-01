import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import  'rxjs/Rx';

@Injectable()

export class MainService {

    constructor(private _http: Http) { }
    
    getUserInfo() {
        return this._http.get('/getUserInfo')
    }
   

  }