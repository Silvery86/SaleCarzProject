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
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {BannerComponent} from './banner/banner.component';
import {NgImageSliderModule} from "ng-image-slider";


const appRoute: Routes = [
  {path:'',component:HomepageComponent},
  {path:'aboutus',component:AboutusComponent},
]



// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    FooterComponent,
    NavigatorComponent,
    AboutusComponent,
    BannerComponent,

  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoute),
    FontAwesomeModule, FontAwesomeModule,
    FormsModule, MdbCollapseModule, MdbDropdownModule,
    NgbModule, NgImageSliderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
