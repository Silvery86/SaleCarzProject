import {Component} from '@angular/core';
import {faLocationDot, faPhone} from '@fortawesome/free-solid-svg-icons';
import {Insurance} from "../interface/insurance.interface";
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";



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
   product: Insurance[] = [];
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

      const productUrl = 'http://localhost:3333/g3-insurance-by-productid?productId=' + this.productId;
      this.http.get<Insurance[]>(productUrl).subscribe(data =>{
        this.product = data;
      })
    })
  }
}
