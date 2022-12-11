import {Component, OnInit} from '@angular/core';
import {
  fa1,
  fa2,
  fa3,
  faCar, faCircleUp, faFileShield, faFileSignature,
  faHandHoldingDollar,
  faPhone,
  faPiggyBank,
  faTruckFast
} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})

export class HomepageComponent implements OnInit {
  faSaveMoney = faPiggyBank
  faSaveMoney1 = faHandHoldingDollar
  faSaveMoney2 = faCar
  faNumber = fa1
  faNumber1 = fa2
  faNumber2 = fa3
  faFast = faTruckFast
  faContract = faFileSignature
  faSurcurity = faFileShield
  faUp = faCircleUp
  faPhone = faPhone


  constructor() { }

  ngOnInit(): void {
  }
  toTop(){
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }
}
