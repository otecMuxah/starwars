import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UrlToIdPipe } from './url-to-id.pipe';

@NgModule({
  declarations: [UrlToIdPipe],
  exports: [UrlToIdPipe],
  imports: [CommonModule],
})
export class UrlToIdModule {}
