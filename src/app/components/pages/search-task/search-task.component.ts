import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from '../../../../environments/environment.development';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-search-task',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './search-task.component.html',
  styleUrl: './search-task.component.css'
})
export class SearchTaskComponent {

  tasks: any[] = [];


  http = inject(HttpClient);

  ngOnInit() {

    this.http.get(environment.apiTasks + '/tasks').
      subscribe((response) => {
        this.tasks = response as any[];
      });

  }

  onDelete(task: any) {
    if (confirm(`Do you really want to delete the task: ${task.title}?`)) {
      this.http.delete(environment.apiTasks + "/tasks/" + task.id).
        subscribe((response: any) => {
          this.tasks = this.tasks.filter((t) => t.id !== task.id);
          alert(`task ${task.titulo} deleted successfully!`);
          this.ngOnInit();
        }
        )

    }
  }


}
