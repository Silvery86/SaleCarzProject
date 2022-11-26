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
import {FormsModule} from "@angular/forms";
import {MdbCollapseModule} from 'mdb-angular-ui-kit/collapse';
import {MdbDropdownModule} from "mdb-angular-ui-kit/dropdown";
import {NgbModule, NgbPaginationModule} from "@ng-bootstrap/ng-bootstrap";
import {BannerComponent} from './banner/banner.component';
import {NgImageSliderModule} from "ng-image-slider";
import {MdbCarouselModule} from "mdb-angular-ui-kit/carousel";
import { InsuranceproductComponent } from './insuranceproduct/insuranceproduct.component';
import { InsurancedetailComponent } from './insurancedetail/insurancedetail.component';
import { ContactComponent } from './contact/contact.component';
import { GetquoteComponent } from './getquote/getquote.component';
import {PaginationModule} from "@snoringarvind/pagination";



const appRoute: Routes = [
  {path:'',component:HomepageComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'contact',component:ContactComponent},
  {path:'getquote',component:GetquoteComponent},
  {path:'products',component:InsuranceproductComponent},
  {path:'detail',component:InsurancedetailComponent}
]




@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    FooterComponent,
    NavigatorComponent,
    AboutusComponent,
    BannerComponent,
    InsuranceproductComponent,
    InsurancedetailComponent,
    ContactComponent,
    GetquoteComponent,


  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoute),
    FontAwesomeModule, FontAwesomeModule,
    FormsModule, MdbCollapseModule, MdbDropdownModule,
    NgbModule, NgImageSliderModule, MdbCarouselModule,
    PaginationModule, NgbPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
