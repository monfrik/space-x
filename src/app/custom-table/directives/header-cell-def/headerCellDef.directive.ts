import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[headerCellDef]'
})
export class HeaderCellDefDirective {

  constructor(public templateRef: TemplateRef<any>) { }

}
