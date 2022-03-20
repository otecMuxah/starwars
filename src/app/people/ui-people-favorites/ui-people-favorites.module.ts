import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiPeopleFavoritesComponent } from './ui-people-favorites.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [UiPeopleFavoritesComponent],
  exports: [UiPeopleFavoritesComponent],
  imports: [CommonModule, MatTableModule],
})
export class UiPeopleFavoritesModule {}
