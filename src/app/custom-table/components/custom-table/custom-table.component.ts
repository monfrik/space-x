import {
  Component,
  ContentChildren,
  Input,
  QueryList,
  AfterContentInit
} from '@angular/core';
import { CustomColumnDirective } from '../../directives/custom-column/custom-column.directive';
import { Pagination } from '../../classes/pagination';
import { ConfigManager } from '../../classes/config-manager';

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.scss']
})
export class CustomTableComponent implements AfterContentInit {

  @Input()
  private config;

  @ContentChildren(CustomColumnDirective)
  public columnTemplates: QueryList<CustomColumnDirective>;

  public tableData: any[] = [];
  public configManager: ConfigManager;

  public constructor() {
    this.configManager = new ConfigManager();
    this.configManager.data$
      .subscribe(res => this.tableData = res);
  }
  
  public ngAfterContentInit() {
    if (this.config.pagination) {
      this.configManager.paginationInit()
    }
    this.configManager.config = this.config;
    this.configManager.fetch()
  }

}
