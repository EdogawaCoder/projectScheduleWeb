import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-regist-task',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './regist-task.component.html',
  styleUrl: './regist-task.component.css'
})
export class RegistTaskComponent {

  categorias:  any[] = [];
  message : string = '';

  //
  http = inject(HttpClient);
  fb = inject(FormBuilder);

  form = this.fb.group({
    title: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(100)]),
    date: new FormControl('', [Validators.required] ),
    hour : new FormControl('', [Validators.required]),
    done : new FormControl('', [Validators.required]),
    idCategory : new FormControl('', [Validators.required])
    
  })

  ngOnInit(){
    
    this.http.get(environment.apiTasks +'/categories')
      .subscribe((response) => {
          console.table(response);
          this.categorias = response as any[];
      });
  }

  onSubmit(){
    this.http.post(environment.apiTasks + '/tasks', this.form.value)
    .subscribe((response: any) => {
      this.message = ` Task ${response.title}, succeffuly registered.`;
      
      this.form.reset();

    })
  }
}
