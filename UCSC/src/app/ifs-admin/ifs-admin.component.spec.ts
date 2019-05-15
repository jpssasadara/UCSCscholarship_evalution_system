import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IfsAdminComponent } from './ifs-admin.component';

describe('IfsAdminComponent', () => {
  let component: IfsAdminComponent;
  let fixture: ComponentFixture<IfsAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IfsAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IfsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
