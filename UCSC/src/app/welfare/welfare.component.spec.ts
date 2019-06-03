import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelfareComponent } from './welfare.component';

describe('WelfareComponent', () => {
  let component: WelfareComponent;
  let fixture: ComponentFixture<WelfareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelfareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelfareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
