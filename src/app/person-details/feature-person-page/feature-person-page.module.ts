import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturePersonPageComponent } from './feature-person-page.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

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
    MatIconModule,
    MatCardModule,
    MatListModule,
  ],
})
export class FeaturePersonPageModule {}
