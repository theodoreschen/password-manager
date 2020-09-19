import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPasswordEntryComponent } from './add-password-entry.component';

describe('AddPasswordEntryComponent', () => {
  let component: AddPasswordEntryComponent;
  let fixture: ComponentFixture<AddPasswordEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPasswordEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPasswordEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
