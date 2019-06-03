import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminForumComponent } from './admin-forum.component';

describe('AdminForumComponent', () => {
  let component: AdminForumComponent;
  let fixture: ComponentFixture<AdminForumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminForumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminForumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
