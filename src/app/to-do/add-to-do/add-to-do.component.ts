import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
<<<<<<< HEAD
import { add } from 'src/app/store/task.actions';
import { Data } from 'src/app/store/task.models';
=======
import taskActions from 'src/app/store/task.actions';
import { Tasks } from 'src/app/store/task.models';
>>>>>>> refactor

@Component({
  selector: 'app-add-to-do',
  templateUrl: './add-to-do.component.html',
  styleUrls: ['./add-to-do.component.scss'],
})
export class AddToDoComponent {
<<<<<<< HEAD
  store$: Observable<Data>;
  taskForm: FormGroup;
  constructor(private store: Store<{ data: Data }>) {
    this.store$ = this.store.select('data');
=======
  store$: Observable<Tasks>;
  taskForm: FormGroup;
  constructor(private store: Store<{ todo: Tasks }>) {
    this.store$ = this.store.select('todo');
>>>>>>> refactor
    this.taskForm = new FormGroup({
      task: new FormControl(null, Validators.required),
    });
  }

  submit() {
<<<<<<< HEAD
    this.store.dispatch(add({ task: this.taskForm.value.task }));
=======
    this.store.dispatch(taskActions.add({ task: this.taskForm.value.task }));
>>>>>>> refactor
    this.taskForm.reset();
  }
}