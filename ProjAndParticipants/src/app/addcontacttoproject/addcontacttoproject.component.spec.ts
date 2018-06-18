import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcontacttoprojectComponent } from './addcontacttoproject.component';

describe('AddcontacttoprojectComponent', () => {
  let component: AddcontacttoprojectComponent;
  let fixture: ComponentFixture<AddcontacttoprojectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcontacttoprojectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcontacttoprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
