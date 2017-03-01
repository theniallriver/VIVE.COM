import { NgModule }                  from '@angular/core';
import { BrowserModule }             from '@angular/platform-browser';
import { FormsModule }               from '@angular/forms';
import { RouterModule }              from '@angular/router';
import { 
  HashLocationStrategy, 
  LocationStrategy }                 from '@angular/common';
import { HttpModule }                from '@angular/http';

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
import { CartComponent }             from './cart/cart.component'
import { ExperiencesComponent}       from './experiences/experiences.component';
import { PCSComponent }              from './pcs/pcs.component'
import { PCCarouselComponent }        from './pcs/pc-carousel/pc-carousel.component'
import { PCCarousel2Component }        from './pcs/pc-carousel2/pc-carousel2.component'
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent,},
      {path: 'product', component: ProductComponent},
      {path: 'account', component: AccountComponent},
      {path:'cart', component: CartComponent},
      {path:'accessories', component:AccessoriesComponent},
      {path: 'experiences', component:ExperiencesComponent},
      {path: 'pcs', component: PCSComponent}
      {path: '', redirectTo:'home', pathMatch:'full'},
    ],
      {useHash: true} )],
  declarations: [
    AppComponent,
    NavComponent,
    PCSComponent,
    HomeComponent,
    CartComponent,
    FooterComponent,
    ProductComponent,
    AccountComponent,
    PCCarouselComponent,
    ProductNavComponent,
    PCCarousel2Component,
    AccessoriesComponent,
    ExperiencesComponent,
    HomeCarouselComponent,
    HomeCarousel2Component,
    ProductCarouselComponent,
    ProductCarouselComponent2,
    ProductCarouselComponent3,
    
 ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }