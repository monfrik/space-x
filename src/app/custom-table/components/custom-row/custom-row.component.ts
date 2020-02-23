import { Component, Input } from '@angular/core';

@Component({
  selector: '[custom-row]',
  templateUrl: './custom-row.component.html',
  styleUrls: ['./custom-row.component.scss']
})
export class CustomRowComponent {

  @Input()
  public rowData;

  @Input()
  public context;

  public getValueCell(item) {
    return {[item.columnKey]: this.rowData[item.columnKey]};
  }

}
