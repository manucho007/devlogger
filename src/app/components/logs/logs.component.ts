import { Component, OnInit } from '@angular/core';
import { Log } from 'src/app/models/Log';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css'],
})
export class LogsComponent implements OnInit {
  loaded: boolean;
  logs: Log[];
  selectedLog: Log;
  constructor() {}

  ngOnInit(): void {}

  onSelect(log: Log) {}
  onDelete(log: Log) {}
}
