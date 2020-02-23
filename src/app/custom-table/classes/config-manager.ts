import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { Pagination } from './pagination';

export class ConfigManager {
  public config;
  public pagination;
  public data$: Subject<object[]> = new BehaviorSubject([]);

  public paginationInit() {
    this.pagination = new Pagination();
    this.pagination.page$
      .subscribe(() => this.fetch());
  }
  
  public fetch() {
    let params = {};
    if (this.config.pagination) {
      const limit = this.config.pagination.limit;
      this.pagination.limit = limit;
      const offset = (this.pagination.page - 1) * limit;
      params = { limit, offset };
    }
    this.config.fetch({ params })
      .subscribe(res => {
        this.data$.next(res.data);
        if (this.pagination) {
          this.pagination.total = res.paging.records;
        }
      });
  }
}