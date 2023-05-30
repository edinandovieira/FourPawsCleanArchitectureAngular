import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootersiteComponent } from './footersite.component';

describe('FootersiteComponent', () => {
  let component: FootersiteComponent;
  let fixture: ComponentFixture<FootersiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootersiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FootersiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
