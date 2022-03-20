import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturePersonPageComponent } from './feature-person-page.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [FeaturePersonPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: FeaturePersonPageComponent,
      },
    ]),
  ],
})
export class FeaturePersonPageModule {}
