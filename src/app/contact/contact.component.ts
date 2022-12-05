import { Component } from '@angular/core';
import {
  faSquareFacebook,
  faSquareInstagram,
  faSquareTwitter,
  faSquareYoutube
} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope, faLocationDot, faPhoneVolume} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],

})
export class ContactComponent {
  faTwitter = faSquareTwitter
  faFacebook = faSquareFacebook
  faYoutube = faSquareYoutube
  faInstargram = faSquareInstagram
  faLocation = faLocationDot
  faEnvelop = faEnvelope
  faPhone = faPhoneVolume;
}
