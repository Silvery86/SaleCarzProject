import {AfterViewInit, ChangeDetectorRef, Component, OnChanges, OnInit} from '@angular/core';
import {debounceTime, distinctUntilChanged, Observable, of, Subject, switchMap} from "rxjs";



@Component({
  selector: 'app-insuranceproduct',
  templateUrl: './insuranceproduct.component.html',
  styleUrls: ['./insuranceproduct.component.css']
})
export class InsuranceproductComponent implements OnInit, OnChanges, AfterViewInit{
  public INS =[
    {name:'Car Insurance',com:'PVI',des:'Insurance description',img:'../../assets/carinsurance.png', logo:'../../assets/companylogo/pvi-logo.png' ,price:1500.2},
    {name:'Car Insurance',com:'MIC',des:'Insurance description',img:'../../assets/carinsurance.png', logo:'../../assets/companylogo/pvi-logo.png' ,price:100.2},
    {name:'Motobike Insurance',com:'PVI',des:'Insurance description',img:'../../assets/motobikeinsurance.jpeg', logo:'../../assets/companylogo/pvi-logo.png' ,price:1200.5},
    {name:'Car Insurance',com:'Bao Viet',des:'Insurance description',img:'../../assets/carinsurance.png', logo:'../../assets/companylogo/pvi-logo.png' ,price:1000.56},
    {name:'Car Insurance',com:'PVI',des:'Insurance description',img:'../../assets/carinsurance.png', logo:'../../assets/companylogo/pvi-logo.png' ,price:500},
    {name:'Motobike Insurance',com:'PVI',des:'Insurance description',img:'../../assets/motobikeinsurance.jpeg', logo:'../../assets/companylogo/pvi-logo.png' ,price:1500.2},
    {name:'Car Insurance',com:'PVI',des:'Insurance description',img:'../../assets/carinsurance.png', logo:'../../assets/companylogo/pvi-logo.png' ,price:150},
    {name:'Car Insurance',com:'PVI',des:'Insurance description',img:'../../assets/carinsurance.png', logo:'../../assets/companylogo/pvi-logo.png' ,price:1500},
    {name:'Car Insurance',com:'PVI',des:'Insurance description',img:'../../assets/carinsurance.png', logo:'../../assets/companylogo/pvi-logo.png' ,price:1500},
    {name:'Car Insurance',com:'PVI',des:'Insurance description',img:'../../assets/carinsurance.png', logo:'../../assets/companylogo/pvi-logo.png' ,price:1500.2},
    {name:'Car Insurance',com:'PVI',des:'Insurance description',img:'../../assets/carinsurance.png', logo:'../../assets/companylogo/pvi-logo.png' ,price:1500.2},
    {name:'Car Insurance',com:'PVI',des:'Insurance description',img:'../../assets/carinsurance.png', logo:'../../assets/companylogo/pvi-logo.png' ,price:1500.2},

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





