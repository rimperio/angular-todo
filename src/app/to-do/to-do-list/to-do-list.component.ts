import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, combineLatest, map, of, switchMap } from 'rxjs';
import { clear } from 'src/app/store/task.actions';
import { Data, taskData } from 'src/app/store/task.models';
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
    array: taskData[];
    active: number;
    completed: number;
  }>;
  constructor(private route: Router, private store: Store<{ data: Data }>) {
    this.combineStreams(this.filter());
  }

  clearCompleted() {
    this.store.dispatch(clear());
  }
  private filter() {
    switch (this.route.routerState.snapshot.url) {
      case '/active':
        return selectActiveTasks;
      case '/completed':
        return selectCheckedTasks;
      case '/all':
        return selectTasks;
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
      map(([array, active, completed]) => ({ array, active, completed }))
    );
  }

  private tasksStatus(selector: any) {
    return this.store
      .select(selector)
      .pipe(switchMap((data) => of(data.length)));
  }
}