//Modules
import { NgModule }                  from '@angular/core';
import { BrowserModule }             from '@angular/platform-browser';
import { FormsModule }               from '@angular/forms';
import { RouterModule }              from '@angular/router';
import { 
  HashLocationStrategy, 
  LocationStrategy }                 from '@angular/common';
import { HttpModule }                from '@angular/http';
//Components
import { AppComponent }              from './app.component';
import { NavComponent }              from './navbar/nav.component';
import { FooterComponent }           from './footer/footer.component';
import { HomeComponent }             from './home/home.component';
import { ProductComponent }          from './product/product.component';
import { ProductNavComponent }       from './product/product-nav/product-nav.component';
import { HomeCarouselComponent }     from './carousel/carousel.component';
import { HomeCarousel2Component }    from './carousel2/carousel2.component';
import { ProductCarouselComponent }  from './product/product-carousel/product-carousel.component';
import { ProductCarouselComponent2 } from './product/product-carousel2/product-carousel2.component';
import { ProductCarouselComponent3 } from './product/product-carousel3/product-carousel3.component';
import { AccountComponent }          from './account/account.component';
import { AccessoriesComponent }      from './accessories/accessories.component';
import { CartComponent }             from './cart/cart.component';
import { ExperiencesComponent}       from './experiences/experiences.component';
import { PCSComponent }              from './pcs/pcs.component';
import { PCCarouselComponent }       from './pcs/pc-carousel/pc-carousel.component';
import { PCCarousel2Component }      from './pcs/pc-carousel2/pc-carousel2.component';
import { InstallationComponent }     from './installation/installation.component';
import { EnterpriseComponent }       from './enterprise/enterprise.component';
import { OrdersComponent }           from './orders/orders.component';
import { DevelopersComponent }       from './developers/developers.component';
import { DevNavComponent }           from './developers-nav/dev-nav.component';
import { CertificationComponent }    from './certification/certification.component';
import { VivexComponent}             from './vive-x/vivex.component'
import { DevTrackerComponent }       from './dev-tracker/dev-tracker.component';
import { StudiosComponent }          from './studios/studios.component';
import { AudioStrapComponent }       from './audio-strap/audio.component';
import { SetupComponent }            from './setup/setup.component';
import { TrackerComponent }          from './tracker/tracker.component';
import { ArcadeComponent }           from './arcade/arcade.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path: 'pcs',           component: PCSComponent},
      {path: 'cart',          component: CartComponent},
      {path: 'home',          component: HomeComponent},
      {path: 'vivex',         component: VivexComponent},
      {path: 'orders',        component: OrdersComponent},
      {path: 'product',       component: ProductComponent},
      {path: 'studios',       component: StudiosComponent},
      {path: 'account',       component: AccountComponent},
      {path: 'developers',    component: DevelopersComponent},
      {path: 'enterprise',    component: EnterpriseComponent},
      {path: 'accessories',   component: AccessoriesComponent},
      {path: 'experiences',   component: ExperiencesComponent},
      {path: 'installation',  component: InstallationComponent},
      {path: 'certification', component: CertificationComponent},
      {path: 'dev-tracker',   component: DevTrackerComponent},
      {path: 'audio',         component: AudioStrapComponent},
      {path: 'setup',         component: SetupComponent},
      {path: 'tracker',       component: TrackerComponent},
      {path: 'arcade',        component: ArcadeComponent},
      {path: '', redirectTo:'home', pathMatch:'full'},
    ],
      {useHash: true} )],
    declarations: [
      AppComponent,
      NavComponent,
      PCSComponent,
      HomeComponent,
      CartComponent,
      VivexComponent,
      SetupComponent,
      DevNavComponent,
      ArcadeComponent,
      TrackerComponent,
      FooterComponent,
      StudiosComponent,
      OrdersComponent,
      ProductComponent,
      AccountComponent,
      AudioStrapComponent,
      DevelopersComponent,
      EnterpriseComponent,
      PCCarouselComponent,
      ProductNavComponent,
      DevTrackerComponent,
      PCCarousel2Component,
      AccessoriesComponent,
      ExperiencesComponent,
      InstallationComponent,
      HomeCarouselComponent,
      HomeCarousel2Component,
      CertificationComponent,
      ProductCarouselComponent,
      ProductCarouselComponent2,
      ProductCarouselComponent3,
    
 ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }