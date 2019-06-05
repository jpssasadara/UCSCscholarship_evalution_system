import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IfsComponent } from './ifs.component';

describe('IfsComponent', () => {
  let component: IfsComponent;
  let fixture: ComponentFixture<IfsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IfsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IfsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
