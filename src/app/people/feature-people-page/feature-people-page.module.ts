import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturePeoplePageComponent } from './feature-people-page.component';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UiPeopleTableModule } from '../ui-people-table/ui-people-table.module';
import { UiPeopleFavoritesModule } from '../ui-people-favorites/ui-people-favorites.module';

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
    UiPeopleTableModule,
    UiPeopleFavoritesModule,
  ],
})
export class FeaturePeoplePageModule {}
