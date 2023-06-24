import { createAction, props } from '@ngrx/store';
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

