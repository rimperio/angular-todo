import { createReducer, on } from '@ngrx/store';
import { add, check, clear, remove, set } from './task.actions';
import { Data } from './task.models';


const initialState: Data = { counter: 0, tasks: [] };
export const taskReducer = createReducer(
  initialState,
  on(add, (state, action) => {
    return {
      counter: state.counter + 1,
      tasks: [
        ...state.tasks,
        {
          id: state.counter + 1,
          task: action.task,
          checked: false,
        },
      ],
    };
  }),
  on(remove, (state, action) => {
    const filtered = state.tasks.filter((task) => task.id !== action.id);
    return filtered.length
      ? { counter: state.counter, tasks: filtered }
      : {
          counter: 0,
          tasks: [],
        };
  }),
  on(check, (state, action) => {
    const updated = state.tasks.map((task) =>
      task.id === action.id ? { ...task, checked: !task.checked } : task
    );
    return { counter: state.counter, tasks: updated };
  }),
  on(set, (_, action) => {
    return { counter: action.counter, tasks: action.tasks };
  }),
  on(clear, (state, _) => {
    const active = state.tasks.filter((task) => !task.checked);
    return active.length > 0
      ? { counter: state.counter, tasks: active }
      : { counter: 0, tasks: [] };
  })
);