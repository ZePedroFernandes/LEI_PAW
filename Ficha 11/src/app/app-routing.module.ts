import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotesFullComponent } from './notes-full/notes-full.component';

const routes: Routes = [
  {
    path: '',
    component: NotesFullComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
