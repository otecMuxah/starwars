import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturePeoplePageComponent } from './feature-people-page.component';

describe('FeaturePeoplePageComponent', () => {
  let component: FeaturePeoplePageComponent;
  let fixture: ComponentFixture<FeaturePeoplePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturePeoplePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturePeoplePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
