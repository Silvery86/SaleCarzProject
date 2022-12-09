import { ChangeDetectorRef, Component, Input,  OnInit} from '@angular/core';
import { Observable} from "rxjs";
import { Insurance} from "../interface/insurance.interface";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";



@Component({
  selector: 'app-insuranceproduct',
  templateUrl: './insuranceproduct.component.html',
  styleUrls: ['./insuranceproduct.component.css']
})
export class InsuranceproductComponent implements OnInit{
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
  productId: number = 0;






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

  }
}





