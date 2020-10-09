import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebitTransComponent } from './debit-trans.component';

describe('DebitTransComponent', () => {
  let component: DebitTransComponent;
  let fixture: ComponentFixture<DebitTransComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebitTransComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebitTransComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
