import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottleToTheMaximilianeumComponent } from './bottle-to-the-maximilianeum.component';

describe('BottleToTheMaximilianeumComponent', () => {
  let component: BottleToTheMaximilianeumComponent;
  let fixture: ComponentFixture<BottleToTheMaximilianeumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottleToTheMaximilianeumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BottleToTheMaximilianeumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
