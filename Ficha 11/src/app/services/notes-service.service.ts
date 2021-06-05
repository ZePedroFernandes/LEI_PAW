import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Note } from '../Models/Note';

@Injectable({
  providedIn: 'root'
})
export class NotesServiceService {

  private _notes: Note[];
  notes: BehaviorSubject<Note[]>;

  constructor() {
    console.log(localStorage.getItem('notes'));

    this._notes = JSON.parse(localStorage.getItem('notes') || '[]');
    this.notes = new BehaviorSubject<Note[]>(this._notes);
  }

  addNote(note: Note) {
    this._notes.push(note);
    localStorage.setItem('notes', JSON.stringify(this._notes));
    this.notes.next(this._notes);
  }

  deleteNote(index: number) {
    this._notes.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(this._notes));
    if (this._notes.length === 0)
      localStorage.clear();
    this.notes.next(this._notes);
  }
}
