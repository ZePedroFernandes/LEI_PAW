import { Component, OnInit } from '@angular/core';
import { Note } from '../Models/Note';
import { NotesServiceService } from '../services/notes-service.service';

@Component({
  selector: 'app-notes-add',
  templateUrl: './notes-add.component.html',
  styleUrls: ['./notes-add.component.css']
})
export class NotesAddComponent implements OnInit {

  note: Note;

  constructor(private service: NotesServiceService) {
    this.note = new Note("", "");
  }

  ngOnInit(): void {
  }

  onSubmit(e: Event) {
    e.preventDefault();
    this.service.addNote(this.note);
    this.note = new Note("","");
  }

}
