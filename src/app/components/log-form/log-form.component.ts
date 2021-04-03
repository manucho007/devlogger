import { Component, OnInit } from '@angular/core';
import { Log } from 'src/app/models/Log';
import { LogService } from 'src/app/services/log.service';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css'],
})
export class LogFormComponent implements OnInit {
  text: string;
  id: string;
  date: Date;
  isNew: boolean = true;
  constructor(private logService: LogService) {}

  ngOnInit(): void {
    // Subscribe to the selectedLog Observable
    this.logService.selectedLog.subscribe((log) => {
      if (log.id !== null) {
        this.isNew = false;
        this.id = log.id;
        this.text = log.text;
        this.date = log.date;
      }
    });
  }

  onSubmit() {
    // Check if new log
    if (this.isNew) {
      // Create a new log
      const newLog: Log = {
        id: this.generateId(),
        text: this.text,
        date: new Date(),
      };
      this.logService.addLog(newLog);
    } else {
      // Create log to be updated
      const updLog: Log = {
        id: this.id,
        text: this.text,
        date: new Date(),
      };
      this.logService.updateLog(updLog);
    }
    // Clear state
    this.clearState();
  }

  generateId() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
      /[xy]/g,
      function (c) {
        var r = (Math.random() * 16) | 0,
          v = c == 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }
    );
  }

  clearState() {
    this.isNew = true;
    this.id = '';
    this.text = '';
    this.date = new Date(0);
    this.logService.clearState();
  }
}
