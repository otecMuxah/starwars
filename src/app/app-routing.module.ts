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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
