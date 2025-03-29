import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  imports: [ReactiveFormsModule],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class ToDoListComponent {

  item = new FormControl("");
  list: string[] = []

  pushToList() {

    this.list.push(this.item.value as string);

    this.item.setValue("")
    return;

  }
}