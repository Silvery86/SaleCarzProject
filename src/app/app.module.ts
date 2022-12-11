import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {RouterModule, Routes} from "@angular/router";
import {HomepageComponent} from './homepage/homepage.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {NavigatorComponent} from './navigator/navigator.component';
import {AboutusComponent} from './aboutus/aboutus.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MdbCollapseModule} from 'mdb-angular-ui-kit/collapse';
import {MdbDropdownModule} from "mdb-angular-ui-kit/dropdown";
import {NgbModule, NgbPaginationModule} from "@ng-bootstrap/ng-bootstrap";
import {BannerComponent} from './banner/banner.component';
import {NgImageSliderModule} from "ng-image-slider";
import {MdbCarouselModule} from "mdb-angular-ui-kit/carousel";
import { InsuranceproductComponent } from './insuranceproduct/insuranceproduct.component';
import { InsurancedetailComponent } from './insurancedetail/insurancedetail.component';
import { ContactComponent } from './contact/contact.component';

import {PaginationModule} from "@snoringarvind/pagination";
import {HttpClientModule} from "@angular/common/http";
import {InsurancecompaniesComponent} from "./insurancecompanies/insurancecompanies.component";
import { InsurancevehiclesComponent } from './insurancevehicles/insurancevehicles.component';
import {NgxPaginationModule} from "ngx-pagination";
import {NewsComponent} from "./news/news.component";
import { QnaComponent } from './qna/qna.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CarouselModule} from "ngx-owl-carousel-o";



const appRoute: Routes = [
  {path:'',component:HomepageComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'contact',component:ContactComponent},
  {path:'products',component:InsuranceproductComponent},
  {path:'qna',component:QnaComponent},
  {path:'news',component:NewsComponent},
  {path:'companies/:companyId',component:InsurancecompaniesComponent},
  {path:'vehicles/:vehicleId',component:InsurancevehiclesComponent},
  {path:'detail/:productId',component:InsurancedetailComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent, FooterComponent,
    FooterComponent,
    NavigatorComponent,
    AboutusComponent,
    BannerComponent,
    InsuranceproductComponent,
    InsurancedetailComponent,
    ContactComponent,
    InsurancecompaniesComponent,
    InsurancevehiclesComponent,
    QnaComponent,
    ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoute),
    FontAwesomeModule, FontAwesomeModule,
    FormsModule, MdbCollapseModule, MdbDropdownModule,
    NgbModule, NgImageSliderModule, MdbCarouselModule,
    PaginationModule, NgbPaginationModule,HttpClientModule,
    ReactiveFormsModule, NgxPaginationModule, BrowserAnimationsModule,
    CarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
