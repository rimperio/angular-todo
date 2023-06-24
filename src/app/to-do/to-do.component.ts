import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Data } from '../store/task.models';
import { Observable } from 'rxjs';
import { init } from '../store/task.actions';
import { Router } from '@angular/router';
import { selectCounter } from '../store/task.selectors';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss'],
})
export class ToDoComponent implements OnInit {
  counter$: Observable<Number>;
  constructor(private route: Router, private store: Store<{ data: Data }>) {
    this.counter$ = this.store.select(selectCounter);
  }
  ngOnInit(): void {
    this.store.dispatch(init());
    if (this.route.routerState.snapshot.url === '/')
      this.route.navigate(['all']);
  }
}