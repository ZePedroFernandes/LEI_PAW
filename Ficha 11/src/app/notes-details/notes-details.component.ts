import { Component, Input, OnInit } from '@angular/core';
import { Note } from '../Models/Note';

@Component({
  selector: 'app-notes-details',
  templateUrl: './notes-details.component.html',
  styleUrls: ['./notes-details.component.css']
})
export class NotesDetailsComponent implements OnInit {

  @Input()
  note: Note | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
