import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetquoteComponent } from './getquote.component';

describe('GetquoteComponent', () => {
  let component: GetquoteComponent;
  let fixture: ComponentFixture<GetquoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetquoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetquoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
