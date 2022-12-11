import {Component, NgModule} from '@angular/core';
import {faLocationDot, faPhone} from '@fortawesome/free-solid-svg-icons';
import {Insurance} from "../interface/insurance.interface";
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {OwlOptions} from "ngx-owl-carousel-o";




@Component({
  selector: 'app-insurancedetail',
  templateUrl: './insurancedetail.component.html',
  styleUrls: ['./insurancedetail.component.css'],
})

export class InsurancedetailComponent {
  faPhone = faPhone
  faLocation = faLocationDot
  panelOpenState = false;
  isShowing: boolean = true;
  isShowing1: boolean = true;
  isShowing2: boolean = true;
  isShowing3: boolean = true;
   id: any;
   productId: number = 0;
   companyId: number = 0;
   product: Insurance[] = [];
   relative: Insurance[] = [];
   company: Insurance[] = [];

  qna(){
    this.isShowing = !this.isShowing;
  }
  qna1(){
    this.isShowing1 = !this.isShowing1;
  }
  qna2(){
    this.isShowing2 = !this.isShowing2;
  }
  qna3(){
    this.isShowing3 = !this.isShowing3;
  }
  constructor(private route:ActivatedRoute,
              private http: HttpClient) {}
  ngOnInit() {
    this.id = this.route.params.subscribe(params =>{
      this.productId = +params['productId'];

      const productUrl = 'http://139.180.186.20:3333/g3-insurance-by-productid?productId=' + this.productId;
      this.http.get<Insurance[]>(productUrl).subscribe(data =>{
        this.product = data;

        this.companyId = this.product[0].companyId
        const Url = 'http://139.180.186.20:3333/g3-insurance-by-company?companyId=' + this.companyId;
        this.http.get<Insurance[]>(Url).subscribe(data1 =>{
          this.company = data1;
          console.log(this.company)
        })
        })
      })


  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 200,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      200: {
        items: 2
      },
      400: {
        items: 3
      },
      600: {
        items: 4
      }
    },
    nav: true
  }

}
