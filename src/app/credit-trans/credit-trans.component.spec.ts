import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditTransComponent } from './credit-trans.component';

describe('CreditTransComponent', () => {
  let component: CreditTransComponent;
  let fixture: ComponentFixture<CreditTransComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditTransComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditTransComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
