import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Log } from '../models/Log';

@Injectable({
  providedIn: 'root',
})
export class LogService {
  logs: Log[];
  private logSource = new BehaviorSubject<Log>({
    id: null,
    text: null,
    date: null,
  });
  selectedLog = this.logSource.asObservable();
  constructor() {
    this.logs = [
      {
        id: '1',
        text: 'Generated Components',
        date: new Date(),
      },
      {
        id: '2',
        text: 'Added Bootstrap',
        date: new Date(),
      },
      {
        id: '3',
        text: 'Created Service',
        date: new Date(),
      },
    ];
  }

  getLogs(): Observable<Log[]> {
    return of(this.logs);
  }

  setFormLog(log: Log) {
    this.logSource.next(log);
  }
}
