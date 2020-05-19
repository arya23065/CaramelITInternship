import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessDividerComponent } from './success-divider.component';

describe('SuccessDividerComponent', () => {
  let component: SuccessDividerComponent;
  let fixture: ComponentFixture<SuccessDividerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessDividerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessDividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
