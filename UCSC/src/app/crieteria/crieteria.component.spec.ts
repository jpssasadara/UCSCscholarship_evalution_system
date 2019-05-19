import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrieteriaComponent } from './crieteria.component';

describe('CrieteriaComponent', () => {
  let component: CrieteriaComponent;
  let fixture: ComponentFixture<CrieteriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrieteriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrieteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
