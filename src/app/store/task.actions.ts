import { createAction, props } from '@ngrx/store';
<<<<<<< HEAD
import { Data } from './task.models';


export const init = createAction('[Task] Init');
export const set = createAction('[Task] Set', props<Data>());
export const add = createAction('[Task] Add', props<{ task: string }>());
export const remove = createAction('[Task] Remove', props<{ id: number }>());
export const clear = createAction('[Task] Clear');
export const check = createAction('[Task] Check', props<{ id: number }>());
=======
import { Tasks } from './task.models';


const init = createAction('[Task] Init');
const set = createAction('[Task] Set', props<Tasks>());
const add = createAction('[Task] Add', props<{ task: string }>());
const remove = createAction('[Task] Remove', props<{ id: number }>());
const clear = createAction('[Task] Clear');
const check = createAction('[Task] Check', props<{ id: number }>());

const taskActions = {
    init: init,
    set: set,
    add: add,
    remove: remove,
    clear: clear,
    check: check
};

export default taskActions;

>>>>>>> refactor
