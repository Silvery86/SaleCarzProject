import {Component, OnInit} from '@angular/core';
import {
  fa1,
  fa2,
  fa3,
  faCar, faFileShield, faFileSignature,
  faHandHoldingDollar,
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


  constructor() { }

  ngOnInit(): void {
  }

}
