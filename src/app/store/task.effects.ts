import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap, withLatestFrom, switchMap, of } from 'rxjs';
import { Store } from '@ngrx/store';
import taskActions from './task.actions';
import { Tasks } from './task.models';


@Injectable()
export class taskEffects {
  loadTasks = createEffect(() =>
    this.actions$.pipe(
      ofType(taskActions.init),
      switchMap(() => {
        const data = localStorage.getItem('todo');
        return data
          ? of(taskActions.set(JSON.parse(data)))
          : of(taskActions.set({ counter: 0, tasks: [] }));
      })
    )
  );

  saveTasks = createEffect(
    () =>
      this.actions$.pipe(
        ofType(taskActions.add, taskActions.remove, taskActions.check, taskActions.clear),
        withLatestFrom(this.store.select('todo')),
        tap(([_, data]) => localStorage.setItem('todo', JSON.stringify(data)))
      ),
    { dispatch: false }
  );
  constructor(
    private actions$: Actions,
    private store: Store<{ todo: Tasks }>
  ) {}
}