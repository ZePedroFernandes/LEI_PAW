import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Note } from '../Models/Note';

@Component({
  selector: 'app-notes-dialog',
  templateUrl: './notes-dialog.component.html',
  styleUrls: ['./notes-dialog.component.css']
})
export class NotesDialogComponent implements OnInit {

  note: Note;

  constructor(private dialogRef: MatDialogRef<NotesDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    this.note = data.note;
    console.log(this.note);
  }

  ngOnInit(): void {
  }

  save(): void {
    this.dialogRef.close('closed');
  }

  close(): void {
    this.dialogRef.close()
  }
}

export interface DialogData {
  note: Note
}
