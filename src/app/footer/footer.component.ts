import {Component, Input, OnInit} from '@angular/core';
import {
  faSquareFacebook,
  faSquareInstagram,
  faSquareTwitter,
  faSquareYoutube
} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope, faLocationDot, faPaperPlane, faPhoneVolume} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']

})


export class FooterComponent implements OnInit {
  faTwitter = faSquareTwitter
  faFacebook = faSquareFacebook
  faYoutube = faSquareYoutube
  faInstargram = faSquareInstagram
  faLocation = faLocationDot
  faEnvelop = faEnvelope
  faPhone = faPhoneVolume;
  faNewsletter = faPaperPlane;
  @Input()
  email: boolean | string | undefined

  mailText: string = "";
  links : any[]= ["link1.com", "link2.com", "link3.com"];
  constructor() { }

  ngOnInit(): void {
  }
  mailMe(){
    this.mailText = "mailto:Salecarz@ltd.com.vn?subject=files&body="+this.links.join(" ,");
    window.location.href = this.mailText;
  }
  onClickSubmit(data: { emailid: string; }) {
    if(data.emailid.length == 0){
      alert("Please enter your email!");
    }else {
       alert("Thank for subcribe!" + data.emailid);
    }

  }

}
