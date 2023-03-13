import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoelesComponent } from './poeles.component';

describe('PoelesComponent', () => {
  let component: PoelesComponent;
  let fixture: ComponentFixture<PoelesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoelesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoelesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
