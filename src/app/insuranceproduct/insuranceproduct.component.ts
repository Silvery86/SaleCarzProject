import {AfterViewInit, ChangeDetectorRef, Component, OnChanges, OnInit} from '@angular/core';
import {debounceTime, distinctUntilChanged, Observable, of, Subject, switchMap} from "rxjs";



@Component({
  selector: 'app-insuranceproduct',
  templateUrl: './insuranceproduct.component.html',
  styleUrls: ['./insuranceproduct.component.css']
})
export class InsuranceproductComponent implements OnInit, OnChanges, AfterViewInit{
  public INS =[
    {name:'Automatic material insurance',com:'BaoViet',des:'',img:'../../assets/carinsurance.png', logo:'../../assets/companylogo/pvi-logo.png' ,price:500.000},
    {name:'VEHICLE INSURANCE',com:'BaoViet',des:'',img:'../../assets/carinsurance.png', logo:'../../assets/companylogo/pvi-logo.png' ,price:500.000},
    {name:'2-WAY CAR INSURANCE',com:'BaoViet',des:'',img:'../../assets/motobikeinsurance.jpeg', logo:'../../assets/companylogo/pvi-logo.png' ,price:500.000},
    {name:'Compulsory auto insurance ',com:'Bao Viet',des:'',img:'../../assets/carinsurance.png', logo:'../../assets/companylogo/pvi-logo.png' ,price:100.56},
    {name:'Compulsory motorcycle insurance',com:'PVI',des:'',img:'../../assets/carinsurance.png', logo:'../../assets/companylogo/pvi-logo.png' ,price:500.000},
    {name:'Compulsory insurance',com:'PVI',des:'',img:'../../assets/motobikeinsurance.jpeg', logo:'../../assets/companylogo/pvi-logo.png' ,price:650.9},
    {name:'Voluntary car insurance',com:'PVI',des:'',img:'../../assets/carinsurance.png', logo:'../../assets/companylogo/pvi-logo.png' ,price:199.9},
    {name:'2 way insurance car',com:'PVI',des:'',img:'../../assets/carinsurance.png', logo:'../../assets/companylogo/pvi-logo.png' ,price:560.9},
    {name:'Voluntary motorcycle insurance',com:'PVI',des:'',img:'../../assets/carinsurance.png', logo:'../../assets/companylogo/pvi-logo.png' ,price:568.9},
    {name:'Compulsory motorcycle',com:'PTI',des:'',img:'../../assets/carinsurance.png', logo:'../../assets/companylogo/pvi-logo.png' ,price:325.5},
    {name:'Auto body insurance ..',com:'PTI',des:'',img:'../../assets/carinsurance.png', logo:'../../assets/companylogo/pvi-logo.png' ,price:1500.2},
    {name:'Material insurance',com:'PTI',des:'',img:'../../assets/carinsurance.png', logo:'../../assets/companylogo/pvi-logo.png' ,price:1500.2},
    {name:'CAR 2-WAY INSURANCE',com:'PTI',des:'',img:'../../assets/carinsurance.png', logo:'../../assets/companylogo/pvi-logo.png' ,price:1500.2},
    {name:'Voluntary motorcycle insurance',com:'PTI',des:'',img:'../../assets/carinsurance.png', logo:'../../assets/companylogo/pvi-logo.png' ,price:1500.2},
    {name:'Compulsory motorcycle',com:'PTI',des:'',img:'../../assets/carinsurance.png', logo:'../../assets/companylogo/pvi-logo.png' ,price:1500.2},
    {name:'Material insurance',com:'PTI',des:'',img:'../../assets/carinsurance.png', logo:'../../assets/companylogo/pvi-logo.png' ,price:1500.2},
    {name:'civil liability insurance',com:'PJICO',des:'',img:'../../assets/carinsurance.png', logo:'../../assets/companylogo/pvi-logo.png' ,price:1500.2},
    {name:'Material insurance',com:'PJICO',des:'',img:'../../assets/carinsurance.png', logo:'../../assets/companylogo/pvi-logo.png' ,price:1500.2},
    {name:'2-way auto insurance',com:'PJICO',des:'',img:'../../assets/carinsurance.png', logo:'../../assets/companylogo/pvi-logo.png' ,price:1500.2},
    {name:'Voluntary motorcycle insurance',com:'PJICO',des:'',img:'../../assets/carinsurance.png', logo:'../../assets/companylogo/pvi-logo.png' ,price:1500.2},
  ]

  title = 'pagination';
  data: any[] = [];
  slicedNames: any[] = [];
  showSelect: boolean = false;
  selectArr: number[] = [];
  btnNosArr: number[] = [];
  rulesPerPage!: number;
  currentPage: number = 1;
  searchObservable!: Observable<any>;
  constructor(private cdRef: ChangeDetectorRef) {}
  searchTerms = new Subject<string>();


  search(term: string) {
    this.searchTerms.next(term);
  }

  ngOnInit() {

    let x: any[] = [];


    for (let i:any = 0; i < this.INS.length; i++) {
       x[i] = this.INS[i]

    }

    for (let i:any = 0; i < this.INS.length; i++) {
      this.data[i] = x[i]

      console.log(this.data[i].img)
    }

      this.searchObservable = this.searchTerms.pipe(
      debounceTime(300),

      distinctUntilChanged(),
      switchMap((term: string) => {
        let fr: any = [];
        this.data.filter((v: any, i: any) => {
          if (v.toLocaleLowerCase().includes(term.toLocaleLowerCase())) {
            fr.push(v);
          }
        });
        return of(fr);
      })
    );
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

    this.slicedNames = val.valuesArr;
  }

}





