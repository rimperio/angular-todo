import { createAction, props } from '@ngrx/store';
import { Tasks } from './task.models';


export const init = createAction('[Task] Init');
export const set = createAction('[Task] Set', props<Tasks>());
export const add = createAction('[Task] Add', props<{ task: string }>());
export const remove = createAction('[Task] Remove', props<{ id: number }>());
export const clear = createAction('[Task] Clear');
export const check = createAction('[Task] Check', props<{ id: number }>());

const taskActions = {
    init: init,
    set: set,
    add: add,
    remove: remove,
    clear: clear,
    check: check
};

export default taskActions;

