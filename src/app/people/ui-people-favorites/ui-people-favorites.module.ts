import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiPeopleFavoritesComponent } from './ui-people-favorites.component';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { UrlToIdModule } from '../domain/pipes/url-to-id/url-to-id.module';

@NgModule({
  declarations: [UiPeopleFavoritesComponent],
  exports: [UiPeopleFavoritesComponent],
  imports: [CommonModule, MatTableModule, RouterModule, UrlToIdModule],
})
export class UiPeopleFavoritesModule {}
