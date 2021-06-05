import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Note } from '../Models/Note';
import { NotesDialogComponent } from '../notes-dialog/notes-dialog.component';
import { NotesServiceService } from '../services/notes-service.service';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {

  notes: Note[] = [];
  selectedNote: Note | null;

  constructor(private noteService: NotesServiceService, public dialog: MatDialog) {
    this.selectedNote = null;
  }

  ngOnInit(): void {
    this.noteService.notes.subscribe(
      (notes) => {
        this.notes = notes;
        console.log(JSON.stringify(notes));
      },
      (err) => {
        console.log(err);
      }
    )
  }

  openDialog(index: number): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      note: this.notes[index]
    };
    const dialogRef = this.dialog.open(NotesDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
      (result) => {
        console.log(`Dialog result: ${result}`);
      }
    )
  }

  selectNote(note: Note) {
    this.selectedNote = note;
    console.log('Selected Note', this.selectedNote);
  }

  removeNote(index: number): void {
    this.noteService.deleteNote(index)
  }
}
