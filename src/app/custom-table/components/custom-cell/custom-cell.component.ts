import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '[custom-cell]',
  templateUrl: './custom-cell.component.html',
  styleUrls: ['./custom-cell.component.scss']
})
export class CustomCellComponent {

  @Input()
  public templateCell;

  @Input()
  public valueCell;

}
