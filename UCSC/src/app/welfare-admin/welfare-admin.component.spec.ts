import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelfareAdminComponent } from './welfare-admin.component';

describe('WelfareAdminComponent', () => {
  let component: WelfareAdminComponent;
  let fixture: ComponentFixture<WelfareAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelfareAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelfareAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
