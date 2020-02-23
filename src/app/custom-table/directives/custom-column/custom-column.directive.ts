import {
  Directive,
  ContentChild,
  QueryList,
  Input,
} from '@angular/core';
import { CellDefDirective } from '../../directives/cell-def/cellDef.directive';
import { HeaderCellDefDirective } from '../../directives/header-cell-def/headerCellDef.directive';

@Directive({
  selector: 'app-custom-column'
})
export class CustomColumnDirective {

  @Input()
  public columnName;

  @ContentChild(CellDefDirective, {static: false})
  public cellTemplate: QueryList<CellDefDirective>;

  @ContentChild(HeaderCellDefDirective, {static: false})
  public headerCellTemplate: QueryList<HeaderCellDefDirective>;

}
