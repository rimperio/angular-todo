import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import taskActions from 'src/app/store/task.actions';
import { Tasks, task } from 'src/app/store/task.models';
import { selectTaskById } from 'src/app/store/task.selectors';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.scss'],
})
export class ToDoItemComponent implements OnInit {
  @Input() task_id!: number;
  task$!: Observable<task | undefined>;

  constructor(private store: Store<{ todo: Tasks }>) {}
  
  ngOnInit(): void {
    this.task$ = this.store.select(selectTaskById(this.task_id));
  }
  
  removeTask() {
    this.store.dispatch(taskActions.remove({ id: this.task_id }));
  }

  checkTask() {
    this.store.dispatch(taskActions.check({ id: this.task_id }));
  }
}