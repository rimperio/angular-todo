import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToDoComponent } from './add-to-do.component';

describe('AddToDoComponent', () => {
  let component: AddToDoComponent;
  let fixture: ComponentFixture<AddToDoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddToDoComponent]
    });
    fixture = TestBed.createComponent(AddToDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
