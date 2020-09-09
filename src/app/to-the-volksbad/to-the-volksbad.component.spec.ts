import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToTheVolksbadComponent } from './to-the-volksbad.component';

describe('ToTheVolksbadComponent', () => {
  let component: ToTheVolksbadComponent;
  let fixture: ComponentFixture<ToTheVolksbadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToTheVolksbadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToTheVolksbadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
