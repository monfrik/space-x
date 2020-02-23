import { Component, OnInit } from '@angular/core';
import { HistoryService } from '../core/history.service';
import { History } from '../core/History';
import { MatTableDataSource } from '@angular/material';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})

export class HistoryComponent implements OnInit {
  public histories: History[];
  public displayedColumns: string[] = [
    'id',
    'title',
    'event_date_utc',
    'event_date_unix',
    'flight_number',
    'details'
  ];
  public config = {
    fetch: (query) => {
      return this._http.get<History[]>('https://api.spacexdata.com/v3/history', query).pipe(
        map((response) => {
          return {
            data: response,
            paging: { records: 20 }
            // paging: { records: response.length }
          };
        })
      );
    },
    pagination: {
      limit: 5,
    }
  };

  constructor(
    private readonly _historyService: HistoryService,
    private readonly _http: HttpClient
  ) { }

  public ngOnInit(): void {
    this._historyService
      .getHistories()
      .subscribe(res => {
        this.histories = res;
      });
  }

}
