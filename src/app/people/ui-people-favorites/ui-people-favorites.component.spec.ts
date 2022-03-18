import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiPeopleFavoritesComponent } from './ui-people-favorites.component';

describe('UiPeopleFavoritesComponent', () => {
  let component: UiPeopleFavoritesComponent;
  let fixture: ComponentFixture<UiPeopleFavoritesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiPeopleFavoritesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiPeopleFavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
