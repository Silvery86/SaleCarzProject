import {AfterViewInit, ChangeDetectorRef, Component, OnChanges, OnInit} from '@angular/core';
import {debounceTime, distinctUntilChanged, Observable, of, Subject, switchMap} from "rxjs";
import {validateAndFlattenComponentImports} from "@angular/compiler-cli/src/ngtsc/annotations/component/src/util";


@Component({
  selector: 'app-insuranceproduct',
  templateUrl: './insuranceproduct.component.html',
  styleUrls: ['./insuranceproduct.component.css']
})
export class InsuranceproductComponent implements OnInit, OnChanges, AfterViewInit{
  public INS =[
    {name:'Car Insurance',com:'PVI',des:'ABCXYZ',img:'../../assets/carinsurance.png',price:10},
    {name:'Car Insurance',com:'MIC',des:'ABCXYZ',img:'../../assets/carinsurance.png',price:9},
    {name:'Mobike Insurance',com:'PVI',des:'ABCXYZ',img:'../../assets/carinsurance.png',price:8},
    {name:'Motobike Insurance',com:'PVI',des:'ABCXYZ',img:'../../assets/carinsurance.png',price:13},
    {name:'Car Insurance',com:'PVI',des:'ABCXYZ',img:'../../assets/carinsurance.png',price:12},
    {name:'Motobike Insurance',com:'PVI',des:'ABCXYZ',img:'../../assets/carinsurance.png',price:11},
    {name:'Motobike Insurance',com:'PVI',des:'ABCXYZ',img:'../../assets/carinsurance.png',price:14},
    {name:'Motobike Insurance',com:'PVI',des:'ABCXYZ',img:'../../assets/carinsurance.png',price:15},
    {name:'Motobike Insurance',com:'PVI',des:'ABCXYZ',img:'../../assets/carinsurance.png',price:16},
    {name:'Motobike Insurance',com:'PVI',des:'ABCXYZ',img:'../../assets/carinsurance.png',price:17},
    {name:'Motobike Insurance',com:'PVI',des:'ABCXYZ',img:'../../assets/carinsurance.png',price:18},
    {name:'Motobike Insurance',com:'PVI',des:'ABCXYZ',img:'../../assets/carinsurance.png',price:19},
    {name:'Motobike Insurance',com:'PVI',des:'ABCXYZ',img:'../../assets/carinsurance.png',price:20},
    {name:'Motobike Insurance',com:'PVI',des:'ABCXYZ',img:'../../assets/carinsurance.png',price:21},
    {name:'Motobike Insurance',com:'PVI',des:'ABCXYZ',img:'../../assets/carinsurance.png',price:22},
    {name:'Motobike Insurance',com:'PVI',des:'ABCXYZ',img:'../../assets/carinsurance.png',price:22},
    {name:'Motobike Insurance',com:'PVI',des:'ABCXYZ',img:'../../assets/carinsurance.png',price:22},
    {name:'Motobike Insurance',com:'PVI',des:'ABCXYZ',img:'../../assets/carinsurance.png',price:22},
    {name:'Motobike Insurance',com:'PVI',des:'ABCXYZ',img:'../../assets/carinsurance.png',price:22},
    {name:'Motobike Insurance',com:'PVI',des:'ABCXYZ',img:'../../assets/carinsurance.png',price:22},
    {name:'Motobike Insurance',com:'PVI',des:'ABCXYZ',img:'../../assets/carinsurance.png',price:22},
    {name:'Motobike Insurance',com:'PVI',des:'ABCXYZ',img:'../../assets/carinsurance.png',price:22},
    {name:'Motobike Insurance',com:'PVI',des:'ABCXYZ',img:'../../assets/carinsurance.png',price:22},
    {name:'Motobike Insurance',com:'PVI',des:'ABCXYZ',img:'../../assets/carinsurance.png',price:22},
    {name:'Motobike Insurance',com:'PVI',des:'ABCXYZ',img:'../../assets/carinsurance.png',price:22},
    {name:'Motobike Insurance',com:'PVI',des:'ABCXYZ',img:'../../assets/carinsurance.png',price:22},
    {name:'Motobike Insurance',com:'PVI',des:'ABCXYZ',img:'../../assets/carinsurance.png',price:22},
    {name:'Motobike Insurance',com:'PVI',des:'ABCXYZ',img:'../../assets/carinsurance.png',price:22},
    {name:'Motobike Insurance',com:'PVI',des:'ABCXYZ',img:'../../assets/carinsurance.png',price:22},
    {name:'Motobike Insurance',com:'PVI',des:'ABCXYZ',img:'../../assets/carinsurance.png',price:22},
    {name:'Motobike Insurance',com:'PVI',des:'ABCXYZ',img:'../../assets/carinsurance.png',price:22},
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





