import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToDoComponent } from './to-do/to-do.component';
import { ToDoListComponent } from './to-do/to-do-list/to-do-list.component';

const routes: Routes = [
  {
    path: '',
    component: ToDoComponent,
    children: [
      { path: 'all', component: ToDoListComponent },
      { path: 'active', component: ToDoListComponent },
      { path: 'completed', component: ToDoListComponent },
    ]
  },
  {
    path: '**',
    redirectTo: '',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
