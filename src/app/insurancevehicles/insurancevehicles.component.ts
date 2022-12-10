import { ChangeDetectorRef, Component, Input,  OnInit} from '@angular/core';
import { Observable} from "rxjs";
import { Insurance} from "../interface/insurance.interface";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-insurancevehicles',
  templateUrl: './insurancevehicles.component.html',
  styleUrls: ['./insurancevehicles.component.css']
})
export class InsurancevehiclesComponent {
  @Input() insurance: any;


  insurancedata: Insurance[] = [];
  title = 'pagination';
  data: any[] = [];
  slicedNames: any[] = [];
  showSelect: boolean = false;
  selectArr: number[] = [];
  btnNosArr: number[] = [];
  rulesPerPage!: number;
  currentPage: number = 1;
  searchObservable!: Observable<any>;



  private id: any;
  vehicleId: number = 0;
  vehicle: Insurance[] = [];
  productId: number = 0;
  private id1: any;
  p: number = 1;





  constructor(private cdRef: ChangeDetectorRef,
              private http: HttpClient,
              private route: ActivatedRoute) {

  }



  ngOnInit() {
    this.id = this.route.params.subscribe( params => {
      this.productId = +params['productId']
    })

    const url = 'http://139.180.186.20:3333/g3-insurance-company-vehicle';
    this.http.get<Insurance[]>(url).subscribe(data => {
      this.insurancedata = data
    })
    this.id1 = this.route.params.subscribe(params =>{
      this.vehicleId = +params['vehicleId'];
      console.log(this.vehicleId)
      const productUrl = 'http://localhost:3333/g3-insurance-by-vehicle?vehicleId=' + this.vehicleId;
      this.http.get<Insurance[]>(productUrl).subscribe(data =>{
        this.vehicle = data;
      })
    })
  }
}
