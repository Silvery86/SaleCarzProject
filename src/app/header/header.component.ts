import {Component, OnInit} from '@angular/core';
import {faEnvelope, faLocationDot} from "@fortawesome/free-solid-svg-icons";
import {
  faSquareFacebook,
  faSquareInstagram,
  faSquareTwitter,
  faSquareYoutube
} from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  faLocation = faLocationDot
  faEnvelop = faEnvelope
  faTwitter = faSquareTwitter
  faFacebook = faSquareFacebook
  faYoutube = faSquareYoutube
  faInstargram = faSquareInstagram

  mailText: string = "";
  links : any[]= ["link1.com", "link2.com", "link3.com"];
  constructor() { }

  ngOnInit(): void {
  }
  mailMe(){
    this.mailText = "mailto:Salecarz@ltd.com.vn?subject=files&body="+this.links.join(" ,");
    window.location.href = this.mailText;
  }
}
