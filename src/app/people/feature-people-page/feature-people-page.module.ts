import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturePeoplePageComponent } from './feature-people-page.component';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [FeaturePeoplePageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: FeaturePeoplePageComponent,
      },
    ]),
  ],
})
export class FeaturePeoplePageModule {}
