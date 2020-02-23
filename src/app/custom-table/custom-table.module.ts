import { NgModule } from '@angular/core';
import { CustomTableComponent } from './components/custom-table/custom-table.component';
import { CustomColumnDirective } from './directives/custom-column/custom-column.directive';
import { CustomRowComponent } from './components/custom-row/custom-row.component';
import { CustomCellComponent } from './components/custom-cell/custom-cell.component';
import { CustomPaginationComponent } from './components/custom-pagination/custom-pagination.component';
import { CellDefDirective } from './directives/cell-def/cellDef.directive';
import { HeaderCellDefDirective } from './directives/header-cell-def/headerCellDef.directive';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [
    CustomTableComponent,
    CustomRowComponent,
    CustomCellComponent,
    CustomColumnDirective,
    CellDefDirective,
    HeaderCellDefDirective,
    CustomPaginationComponent,
  ],
  exports: [
    CustomTableComponent,
    CustomColumnDirective,
    CellDefDirective,
    HeaderCellDefDirective
  ],
})
export class CustomTableModule { }
