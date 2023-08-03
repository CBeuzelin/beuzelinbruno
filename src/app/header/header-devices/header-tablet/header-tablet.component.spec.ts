import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderTabletComponent } from './header-tablet.component';

describe('HeaderTabletComponent', () => {
  let component: HeaderTabletComponent;
  let fixture: ComponentFixture<HeaderTabletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderTabletComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderTabletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
