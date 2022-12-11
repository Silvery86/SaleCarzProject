import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {faPhone} from '@fortawesome/free-solid-svg-icons';
import {Companies, Insurance, Vehicle} from "../interface/insurance.interface";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.css']
})
export class NavigatorComponent implements OnInit {
  faPhone = faPhone;
  private id1: any;
  private id2: any;
  vehicleId: number = 0;
  companyId: number = 0;
  company: Companies[] = [];
  vehicle: Vehicle[] = [];

  constructor(private cdRef: ChangeDetectorRef,
              private http: HttpClient,
              private route: ActivatedRoute) {

  }

    ngOnInit() {
    this.id1 = this.route.params.subscribe( params => {
      this.vehicleId = +params['vehicleId']
    })
      const url1 = 'http://139.180.186.20:3333/g3-get-vehicles';
      this.http.get<Vehicle[]>(url1).subscribe(data => {
        this.vehicle = data
      })

      this.id2 = this.route.params.subscribe( params => {
        this.companyId = +params['companyId']
      })
    const url2 = 'http://139.180.186.20:3333/g3-get-companies';
    this.http.get<Insurance[]>(url2).subscribe(data => {
      this.company = data
    })
  }

}
