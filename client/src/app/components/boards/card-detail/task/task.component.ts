import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatCheckboxChange } from '@angular/material';
import { ITask } from 'src/app/components/boards/card-detail/task/interfaces';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {

  @Input() task: ITask;

  @Output() onDelete: EventEmitter<ITask> = new EventEmitter<ITask>();

  constructor() {
  }

  ngOnInit() {
  }

  checked($event: MatCheckboxChange) {
    console.log('task checked', $event.checked);
  }

  delete() {
    this.onDelete.emit(this.task);
  }

  save() {
    this.task.isEdit = false;
  }
}
