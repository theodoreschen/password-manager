import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordEntryComponent } from './password-entry.component';

describe('PasswordEntryComponent', () => {
  let component: PasswordEntryComponent;
  let fixture: ComponentFixture<PasswordEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
