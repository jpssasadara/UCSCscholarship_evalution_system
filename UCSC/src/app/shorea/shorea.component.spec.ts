import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoreaComponent } from './shorea.component';

describe('ShoreaComponent', () => {
  let component: ShoreaComponent;
  let fixture: ComponentFixture<ShoreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
