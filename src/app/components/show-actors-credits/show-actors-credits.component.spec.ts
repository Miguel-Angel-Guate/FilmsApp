import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowActorsCreditsComponent } from './show-actors-credits.component';

describe('ShowActorsCreditsComponent', () => {
  let component: ShowActorsCreditsComponent;
  let fixture: ComponentFixture<ShowActorsCreditsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowActorsCreditsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowActorsCreditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
