import { Component,  OnInit} from '@angular/core';
import { MainService } from '../services/mainSvc.injectable'

@Component({
    selector: 'vive-nav',
    templateUrl:'app/navbar/nav.component.html',
    styleUrls:['app/navbar/nav.component.css'],
    providers:[MainService]
})
export class NavComponent {
    showMenu: boolean = false;
    userInfo:any;
    proPic: any;
    userName: any;
    loggedIn: any;


    constructor(private _mainService: MainService) {
}
    showUserMenu(){
        this.showMenu = !this.showMenu;
    }
   ngOnInit(){

        this.loggedIn= this._mainService.getUserInfo()
        .map(function(res){
          
                this.userInfo=JSON.parse(res._body);
                
                if (this.userInfo.first_name){
                      console.log('loggedin?'+this.loggedIn)
                    return true;
                  
                }
                else{
                    console.log('loggedin?'+this.loggedIn)
                    return false;
                  
                }
        });

        this.proPic = this._mainService.getUserInfo()
            .map(function(res){
                this.userInfo=JSON.parse(res._body);
                this.userName = this.userInfo.first_name + this.userInfo.last_name  
                return this.userInfo.picture_url;
        });
    } 
}
