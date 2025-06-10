import { Routes } from '@angular/router';
import { RegistTaskComponent } from './components/pages/regist-task/regist-task.component';
import { SearchTaskComponent } from './components/pages/search-task/search-task.component';
import { EditTaskComponent } from './components/pages/edit-task/edit-task.component';

export const routes: Routes = [
    {
        path: 'pages/regist-task', //route
        component: RegistTaskComponent
    },

    {
        path: 'pages/search-task',
        component: SearchTaskComponent
    },
    {
        path: 'pages/edit-task/:id',
        component: EditTaskComponent
    }
];
