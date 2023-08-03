import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderHandsetComponent } from './header-handset.component';

describe('HeaderHandsetComponent', () => {
  let component: HeaderHandsetComponent;
  let fixture: ComponentFixture<HeaderHandsetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderHandsetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderHandsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
