import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import taskActions from 'src/app/store/task.actions';
import { Tasks } from 'src/app/store/task.models';

@Component({
  selector: 'app-add-to-do',
  templateUrl: './add-to-do.component.html',
  styleUrls: ['./add-to-do.component.scss'],
})
export class AddToDoComponent {
  store$: Observable<Tasks>;
  taskForm: FormGroup;
  constructor(private store: Store<{ todo: Tasks }>) {
    this.store$ = this.store.select('todo');
    this.taskForm = new FormGroup({
      task: new FormControl(null, Validators.required),
    });
  }

  submit() {
    this.store.dispatch(taskActions.add({ task: this.taskForm.value.task }));
    this.taskForm.reset();
  }
}