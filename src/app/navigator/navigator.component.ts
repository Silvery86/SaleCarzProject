import {Component, OnInit} from '@angular/core';
import {faPhone} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.css']
})
export class NavigatorComponent implements OnInit {
  faPhone = faPhone;



  constructor() { }

  ngOnInit(): void {
  }

}
