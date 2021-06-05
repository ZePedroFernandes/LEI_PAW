import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotesAddComponent } from './notes-add/notes-add.component';
import { NotesListComponent } from './notes-list/notes-list.component';
import { NotesFullComponent } from './notes-full/notes-full.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { NotesDialogComponent } from './notes-dialog/notes-dialog.component';
import { NotesDetailsComponent } from './notes-details/notes-details.component';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    NotesAddComponent,
    NotesListComponent,
    NotesFullComponent,
    NotesDialogComponent,
    NotesDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatDialogModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule
  ],
  entryComponents:[
    NotesDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
