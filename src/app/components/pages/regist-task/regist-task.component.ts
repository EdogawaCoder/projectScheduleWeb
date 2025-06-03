import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-regist-task',
  imports: [
    CommonModule,
  ],
  templateUrl: './regist-task.component.html',
  styleUrl: './regist-task.component.css'
})
export class RegistTaskComponent {

  categorias:  any[] = [];

  http = inject(HttpClient);

  ngOnInit(){
    
    this.http.get('http://localhost:8081/api/v1/categories')
      .subscribe((response) => {
          console.table(response);
          this.categorias = response as any[];
      });
  }
}
