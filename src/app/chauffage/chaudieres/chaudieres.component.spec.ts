import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaudieresComponent } from './chaudieres.component';

describe('ChaudieresComponent', () => {
  let component: ChaudieresComponent;
  let fixture: ComponentFixture<ChaudieresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChaudieresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChaudieresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
