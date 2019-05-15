import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IfsApplicationComponent } from './ifs-application.component';

describe('IfsApplicationComponent', () => {
  let component: IfsApplicationComponent;
  let fixture: ComponentFixture<IfsApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IfsApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IfsApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
