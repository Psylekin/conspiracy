import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuzzleToTheMaxwerkComponent } from './puzzle-to-the-maxwerk.component';

describe('PuzzleToTheMaxwerkComponent', () => {
  let component: PuzzleToTheMaxwerkComponent;
  let fixture: ComponentFixture<PuzzleToTheMaxwerkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuzzleToTheMaxwerkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PuzzleToTheMaxwerkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
