import { NgModule } from '@angular/core';
import { UiPrimengModule } from './ui-primeng/ui-primeng.module';
import { TranslocoModule } from '@ngneat/transloco';

@NgModule({
  imports: [UiPrimengModule, TranslocoModule],
  exports: [UiPrimengModule, TranslocoModule],
})
export class SharedModule {}
