import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetsToTheStuckComponent } from './planets-to-the-stuck.component';

describe('PlanetsToTheStuckComponent', () => {
  let component: PlanetsToTheStuckComponent;
  let fixture: ComponentFixture<PlanetsToTheStuckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanetsToTheStuckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetsToTheStuckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
