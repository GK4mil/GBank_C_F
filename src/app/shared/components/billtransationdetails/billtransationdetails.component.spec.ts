import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BilltransationdetailsComponent } from './billtransationdetails.component';

describe('BilltransationdetailsComponent', () => {
  let component: BilltransationdetailsComponent;
  let fixture: ComponentFixture<BilltransationdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BilltransationdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BilltransationdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
