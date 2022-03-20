import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiPeopleTableComponent } from './ui-people-table.component';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { UrlToIdModule } from '../domain/pipes/url-to-id/url-to-id.module';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [UiPeopleTableComponent],
  exports: [UiPeopleTableComponent],
  imports: [CommonModule, RouterModule, MatTableModule, UrlToIdModule, MatPaginatorModule],
})
export class UiPeopleTableModule {}
