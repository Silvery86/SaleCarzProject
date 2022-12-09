import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsurancecompaniesComponent } from './insurancecompanies.component';

describe('InsurancecompaniesComponent', () => {
  let component: InsurancecompaniesComponent;
  let fixture: ComponentFixture<InsurancecompaniesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsurancecompaniesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsurancecompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
