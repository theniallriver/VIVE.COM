import { Component } from  '@angular/core';


@Component({
    selector: 'main-app',
    template:`<vive-nav></vive-nav>
                <router-outlet></router-outlet>
                <vive-footer></vive-footer>`,
    styleUrls:['app/app.component.css', 'app/fonts.css']
})

export class AppComponent {
    
}