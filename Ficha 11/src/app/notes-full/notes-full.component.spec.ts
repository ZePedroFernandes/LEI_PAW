import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesFullComponent } from './notes-full.component';

describe('NotesFullComponent', () => {
  let component: NotesFullComponent;
  let fixture: ComponentFixture<NotesFullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotesFullComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
