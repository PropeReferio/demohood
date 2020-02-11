import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersAccountComponent } from './customers-account.component';

describe('CustomersAccountComponent', () => {
  let component: CustomersAccountComponent;
  let fixture: ComponentFixture<CustomersAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomersAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
