import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, combineLatest, map, of, switchMap } from 'rxjs';
import taskActions from 'src/app/store/task.actions';
import { Tasks, task } from 'src/app/store/task.models';
import {
  selectActiveTasks,
  selectCheckedTasks,
  selectTasks,
} from 'src/app/store/task.selectors';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss'],
})
export class ToDoListComponent {
  tasks$!: Observable<{
    list: task[];
    active: number;
    completed: number;
  }>;
  constructor(private route: Router, private store: Store<{ todo: Tasks }>) {
    this.combineStreams(this.filter());
  }

  clearCompleted() {
    this.store.dispatch(taskActions.clear());
  }

  private filter() {
    switch (this.route.routerState.snapshot.url) {
      case '/active':
        return selectActiveTasks;
      case '/completed':
        return selectCheckedTasks;
      case '/all':
      default:
        return selectTasks;
    }
  }

  private combineStreams(selector: any) {
    this.tasks$ = combineLatest([
      this.store.select(selector).pipe(map((tasks) => [...tasks].reverse())),
      this.tasksStatus(selectActiveTasks),
      this.tasksStatus(selectCheckedTasks),
    ]).pipe(
      map(([list, active, completed]) => ({ list, active, completed }))
    );
  }

  private tasksStatus(selector: any) {
    return this.store
      .select(selector)
      .pipe(switchMap((data) => of(data.length)));
  }
}