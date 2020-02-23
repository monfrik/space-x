import { Directive, TemplateRef, Input } from '@angular/core';

@Directive({
  selector: '[cellDef]'
})
export class CellDefDirective {

  @Input()
  public columnKey: string;

  constructor(public templateRef: TemplateRef<any>) { }

}
