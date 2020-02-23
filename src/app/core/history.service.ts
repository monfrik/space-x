import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { History } from './History';
import { handleError } from './handle-error';

const HISTORY_URL = 'https://api.spacexdata.com/v3/history';

@Injectable({
  providedIn: 'root'
})

export class HistoryService {

  constructor(private readonly _http: HttpClient) { }

  public getHistories(): Observable<History[]> {
    return this._http.get<History[]>(HISTORY_URL);
  }

}
