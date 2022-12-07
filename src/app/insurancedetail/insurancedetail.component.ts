import {Component} from '@angular/core';
import {faLocationDot, faPhone} from '@fortawesome/free-solid-svg-icons';



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
}
