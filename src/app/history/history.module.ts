import { NgModule } from '@angular/core';
import { HistoryComponent } from './history.component';
import { SharedModule } from '../shared/shared.module';
import { CustomTableModule } from '../custom-table/custom-table.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    SharedModule,
    HttpClientModule,
    CustomTableModule
  ],
  declarations: [
    HistoryComponent,
  ],
  exports: [
    HistoryComponent
  ]
})
export class HistoryModule { }
