import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToDoListComponent } from "./todolist/todolist.component";

@Component({
  selector: 'app-root',
  imports: [ToDoListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
