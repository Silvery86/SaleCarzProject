import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsurancevehiclesComponent } from './insurancevehicles.component';

describe('InsurancevehiclesComponent', () => {
  let component: InsurancevehiclesComponent;
  let fixture: ComponentFixture<InsurancevehiclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsurancevehiclesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsurancevehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
