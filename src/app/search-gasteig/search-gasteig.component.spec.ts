import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchGasteigComponent } from './search-gasteig.component';

describe('SearchGasteigComponent', () => {
  let component: SearchGasteigComponent;
  let fixture: ComponentFixture<SearchGasteigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchGasteigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchGasteigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
