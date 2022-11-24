import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsurancedetailComponent } from './insurancedetail.component';

describe('InsurancedetailComponent', () => {
  let component: InsurancedetailComponent;
  let fixture: ComponentFixture<InsurancedetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsurancedetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsurancedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
