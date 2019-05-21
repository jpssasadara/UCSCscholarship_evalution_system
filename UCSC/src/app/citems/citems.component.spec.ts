import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitemsComponent } from './citems.component';

describe('CitemsComponent', () => {
  let component: CitemsComponent;
  let fixture: ComponentFixture<CitemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
