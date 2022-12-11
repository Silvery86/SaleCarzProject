import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  toTop(){
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }
}
