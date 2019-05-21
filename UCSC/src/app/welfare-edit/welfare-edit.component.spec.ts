import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelfareEditComponent } from './welfare-edit.component';

describe('WelfareEditComponent', () => {
  let component: WelfareEditComponent;
  let fixture: ComponentFixture<WelfareEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelfareEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelfareEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
