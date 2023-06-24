import { createReducer, on } from '@ngrx/store';
<<<<<<< HEAD
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
=======
import taskActions from './task.actions';
import { Tasks, task } from './task.models';
import { produce } from 'immer';


const initialState: Tasks = { counter: 0, tasks: [] };

const addTask = (state: Tasks, action: { task: string }) => {
  return produce(state, draft => {
    draft.counter = state.counter + 1;
    draft.tasks.push({
      id: state.counter + 1,
      task: action.task,
      checked: false
    });
  });
};

const removeTask = (state: Tasks, action: { id: number }) => {
  return produce(state, draft => {
    draft.tasks = state.tasks.filter(task => task.id !== action.id);
    draft.counter = draft.tasks.length;
  });
};

const checkTask = (state: Tasks, action: { id: number }) => {
  return produce(state, draft => {
    draft.tasks.forEach(task => {
      if (task.id === action.id){
        task.checked = !task.checked;
      }
    });
  })
};

const setTask = (_: any, action: Tasks) => {
  return { counter: action.counter, tasks: action.tasks };
};

const clearTask = (state: Tasks, _: any) => {
  return produce(state, draft => {
    draft.tasks = state.tasks.filter(task => !task.checked);
    draft.counter = draft.tasks.length;
  });
};

export const taskReducer = createReducer(
  initialState,
  on(taskActions.add, addTask),
  on(taskActions.remove, removeTask),
  on(taskActions.check, checkTask),
  on(taskActions.set, setTask),
  on(taskActions.clear, clearTask)
);


>>>>>>> refactor
