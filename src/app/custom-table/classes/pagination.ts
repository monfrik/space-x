import { Subject, BehaviorSubject } from 'rxjs';

export class Pagination {
  public page = 1;
  public total = 1;
  public limit: number;
  public page$: Subject<number> = new Subject();

  public get totalPage() {
    return Math.ceil(this.total / this.limit);
  }

  public get firstPage(): number {
    if (this.page === 1) {
      return 1;
    }
    if (this.page === this.totalPage) {
      return this.page - 2;
    }
    return this.page - 1;
  }

  public get secondPage(): number {
    if (this.page === 1) {
      return 2;
    }
    if (this.page === this.totalPage) {
      return this.page - 1;
    }
    return this.page;
  }

  public get thirdPage(): number {
    if (this.page === 1) {
      return 3;
    }
    if (this.page === this.totalPage) {
      return this.totalPage;
    }
    return this.page + 1;
  }

  public get startPageDisabled(): boolean {
    return this.page === 1;
  }

  public get lastPageDisabled(): boolean {
    return this.page === this.totalPage;
  }

  public getPageData(array: object[]): object[] {
    return array.slice((this.page - 1) * this.limit, this.page * this.limit);
  }

  public changePage(page): void {
    this.page = page;
    this.page$.next(page);
  }

  public prevPage(): void {
    if (this.page !== 1) {
      this.changePage(this.page - 1);
    }
  }

  public nextPage(): void {
    if (this.page !== this.totalPage) {
      this.changePage(this.page + 1);
    }
  }

}
