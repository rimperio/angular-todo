import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, combineLatest, map, of, switchMap } from 'rxjs';
<<<<<<< HEAD
import { clear } from 'src/app/store/task.actions';
import { Data, taskData } from 'src/app/store/task.models';
=======
import taskActions from 'src/app/store/task.actions';
import { Tasks, task } from 'src/app/store/task.models';
>>>>>>> refactor
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
<<<<<<< HEAD
    array: taskData[];
    active: number;
    completed: number;
  }>;
  constructor(private route: Router, private store: Store<{ data: Data }>) {
=======
    list: task[];
    active: number;
    completed: number;
  }>;
  constructor(private route: Router, private store: Store<{ todo: Tasks }>) {
>>>>>>> refactor
    this.combineStreams(this.filter());
  }

  clearCompleted() {
<<<<<<< HEAD
    this.store.dispatch(clear());
  }
=======
    this.store.dispatch(taskActions.clear());
  }

>>>>>>> refactor
  private filter() {
    switch (this.route.routerState.snapshot.url) {
      case '/active':
        return selectActiveTasks;
      case '/completed':
        return selectCheckedTasks;
      case '/all':
<<<<<<< HEAD
        return selectTasks;
=======
>>>>>>> refactor
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
<<<<<<< HEAD
      map(([array, active, completed]) => ({ array, active, completed }))
=======
      map(([list, active, completed]) => ({ list, active, completed }))
>>>>>>> refactor
    );
  }

  private tasksStatus(selector: any) {
    return this.store
      .select(selector)
      .pipe(switchMap((data) => of(data.length)));
  }
}