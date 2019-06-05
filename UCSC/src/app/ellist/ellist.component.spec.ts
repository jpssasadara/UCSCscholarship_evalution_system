import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EllistComponent } from './ellist.component';

describe('EllistComponent', () => {
  let component: EllistComponent;
  let fixture: ComponentFixture<EllistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EllistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EllistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
