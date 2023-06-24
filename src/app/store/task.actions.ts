import { createAction, props } from '@ngrx/store';
import { Data } from './task.models';


export const init = createAction('[Task] Init');
export const set = createAction('[Task] Set', props<Data>());
export const add = createAction('[Task] Add', props<{ task: string }>());
export const remove = createAction('[Task] Remove', props<{ id: number }>());
export const clear = createAction('[Task] Clear');
export const check = createAction('[Task] Check', props<{ id: number }>());
