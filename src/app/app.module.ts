import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ToDoComponent } from './to-do/to-do.component';
import { ToDoListComponent } from './to-do/to-do-list/to-do-list.component';
import { AddToDoComponent } from './to-do/add-to-do/add-to-do.component';
import { ToDoItemComponent } from './to-do/to-do-item/to-do-item.component';
import { taskReducer } from './store/task.reducer';
import { taskEffects } from './store/task.effects';

@NgModule({
  declarations: [
    AppComponent,
    ToDoComponent,
    ToDoListComponent,
    AddToDoComponent,
    ToDoItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ data: taskReducer }),
    EffectsModule.forRoot([taskEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
