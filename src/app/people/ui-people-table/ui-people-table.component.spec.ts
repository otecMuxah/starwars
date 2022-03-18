import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiPeopleTableComponent } from './ui-people-table.component';

describe('UiPeopleTableComponent', () => {
  let component: UiPeopleTableComponent;
  let fixture: ComponentFixture<UiPeopleTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiPeopleTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiPeopleTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
