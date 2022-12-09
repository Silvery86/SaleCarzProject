import { ChangeDetectorRef, Component, Input,  OnInit} from '@angular/core';
import { Observable} from "rxjs";
import { Insurance} from "../interface/insurance.interface";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-insurancecompanies',
  templateUrl: './insurancecompanies.component.html',
  styleUrls: ['./insurancecompanies.component.css']
})
export class InsurancecompaniesComponent implements OnInit{
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
  companyId: number = 0;
  company: Insurance[] = [];
  productId: number = 0;
  private id1: any;




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
      this.companyId = +params['companyId'];
      console.log(this.companyId)
      const productUrl = 'http://localhost:3333/g3-insurance-by-company?companyId=' + this.companyId;
      this.http.get<Insurance[]>(productUrl).subscribe(data =>{
        this.company = data;
      })
    })
  }
}
