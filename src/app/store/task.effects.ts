import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap, withLatestFrom, switchMap, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { add, check, clear, init, remove, set } from './task.actions';
import { Data } from './task.models';


@Injectable()
export class taskEffects {
  loadTasks = createEffect(() =>
    this.actions$.pipe(
      ofType(init),
      switchMap(() => {
        const data = localStorage.getItem('data');
        return data
          ? of(set(JSON.parse(data)))
          : of(set({ counter: 0, tasks: [] }));
      })
    )
  );

  saveTasks = createEffect(
    () =>
      this.actions$.pipe(
        ofType(add, remove, check, clear),
        withLatestFrom(this.store.select('data')),
        tap(([_, data]) => localStorage.setItem('data', JSON.stringify(data)))
      ),
    { dispatch: false }
  );
  constructor(
    private actions$: Actions,
    private store: Store<{ data: Data }>
  ) {}
}