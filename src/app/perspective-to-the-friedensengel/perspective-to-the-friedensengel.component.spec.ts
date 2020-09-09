import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerspectiveToTheFriedensengelComponent } from './perspective-to-the-friedensengel.component';

describe('PerspectiveToTheFriedensengelComponent', () => {
  let component: PerspectiveToTheFriedensengelComponent;
  let fixture: ComponentFixture<PerspectiveToTheFriedensengelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerspectiveToTheFriedensengelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerspectiveToTheFriedensengelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
