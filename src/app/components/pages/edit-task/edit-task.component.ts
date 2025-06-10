import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../../environments/environment.development';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-task',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule


  ],
  templateUrl: './edit-task.component.html',
  styleUrl: './edit-task.component.css'
})
export class EditTaskComponent {

  id: string = '';
  categorias: any[] = [];
  message: string = '';

  http = inject(HttpClient);
  activated = inject(ActivatedRoute);
  fb = inject(FormBuilder);
  
  form = this.fb.group({
    title: new FormBuilder().control('', [Validators.required, Validators.minLength(8), Validators.maxLength(100)]),
    date: new FormBuilder().control('', [Validators.required]),
    hour: new FormBuilder().control('', [Validators.required]),
    done: new FormBuilder().control('', [Validators.required]),
    idCategory: new FormBuilder().control('', [Validators.required])
  });


  ngOnInit() {
    this.id = this.activated.snapshot.params['id'];
    

    this.http.get(environment.apiTasks +'/tasks/' + this.id)
      .subscribe((response: any) => {
        this.form.patchValue({
          title: response.title,
          date: response.date,
          hour: response.hour,
          done: response.done,
          idCategory: response.idCategory
        });
    
    
      });

      this.http.get(environment.apiTasks + '/categories')
      .subscribe((response) => {
        
        this.categorias = response as any[];
      });
    }

    onSubmit() {
      this.http.put(environment.apiTasks + '/tasks/' + this.id, this.form.value)
        .subscribe((response: any) => {
          this.message = `Task ${response.title}, successfully updated.`;
          
        }, (error) => {
          console.error('Error updating task:', error);
          this.message = 'Failed to update task. Please try again.';
        });
}

}

  