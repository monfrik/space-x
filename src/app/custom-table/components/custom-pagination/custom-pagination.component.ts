import { Component, Input, Output, EventEmitter, AfterContentInit } from '@angular/core';
import { Pagination } from '../../classes/pagination';

@Component({
  selector: 'app-custom-pagination',
  templateUrl: './custom-pagination.component.html',
  styleUrls: ['./custom-pagination.component.scss']
})

export class CustomPaginationComponent implements AfterContentInit {

  @Input()
  public pagination: Pagination;

  @Output()
  public updatePage = new EventEmitter();

  public currentPage = 1;

  public ngAfterContentInit() {
    this.pagination.page$
      .subscribe(res => this.changePage(res));
  }

  public changePage(page) {
    this.currentPage = page;
    this.updatePage.emit(page);
  }

  public selectPage(page) {
    this.pagination.changePage(page);
  }

  public prevPage() {
    this.pagination.prevPage();
  }

  public nextPage() {
    this.pagination.nextPage();
  }

}
