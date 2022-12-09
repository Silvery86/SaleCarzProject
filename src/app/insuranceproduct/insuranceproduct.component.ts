import {AfterViewInit, ChangeDetectorRef, Component, Input, OnChanges, OnInit} from '@angular/core';
import {debounceTime, distinctUntilChanged, Observable, of, Subject, switchMap} from "rxjs";
import {IDatas, Insurance, IProducts} from "../interface/insurance.interface";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";



@Component({
  selector: 'app-insuranceproduct',
  templateUrl: './insuranceproduct.component.html',
  styleUrls: ['./insuranceproduct.component.css']
})
export class InsuranceproductComponent implements OnInit, OnChanges, AfterViewInit{
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

  searchTerms = new Subject<string>();

  search(term: string) {
    this.searchTerms.next(term);
  } ngOnInit() {
    this.id = this.route.params.subscribe( params => {
      this.productId = +params['productId']
    })

    const url = 'http://139.180.186.20:3333/g3-insurance-company-vehicle';
    this.http.get<Insurance[]>(url).subscribe(data => {
      this.insurancedata = data
      let x: Insurance[] = [];
      x = this.insurancedata
      this.data = x
    })
  }


  ngOnChanges() {}

  ngAfterViewInit() {
    this.cdRef.detectChanges();
  }

  newRulesCB(val: any) {
    this.currentPage = val.currentPage;
    this.btnNosArr = val.btnNosArr;
    this.rulesPerPage = val.rulesPerPage;
    this.selectArr = val.newPageRangeArr;
    this.insurancedata = val.valuesArr;
  }
}





