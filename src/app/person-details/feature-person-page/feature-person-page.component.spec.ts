import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturePersonPageComponent } from './feature-person-page.component';

describe('FeaturePersonPageComponent', () => {
  let component: FeaturePersonPageComponent;
  let fixture: ComponentFixture<FeaturePersonPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturePersonPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturePersonPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
