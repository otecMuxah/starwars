import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'people',
        pathMatch: 'full',
      },
      {
        path: 'people',
        loadChildren: async () => (await import('./people/feature-people-page/feature-people-page.module')).FeaturePeoplePageModule,
      },
      {
        path: 'people/:id',
        loadChildren: async () => (await import('./person-details/feature-person-page/feature-person-page.module')).FeaturePersonPageModule,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
