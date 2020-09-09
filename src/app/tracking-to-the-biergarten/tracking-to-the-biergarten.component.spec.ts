import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackingToTheBiergartenComponent } from './tracking-to-the-biergarten.component';

describe('TrackingToTheBiergartenComponent', () => {
  let component: TrackingToTheBiergartenComponent;
  let fixture: ComponentFixture<TrackingToTheBiergartenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackingToTheBiergartenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackingToTheBiergartenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
