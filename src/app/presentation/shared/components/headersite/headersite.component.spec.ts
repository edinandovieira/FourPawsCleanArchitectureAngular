import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadersiteComponent } from './headersite.component';

describe('HeadersiteComponent', () => {
  let component: HeadersiteComponent;
  let fixture: ComponentFixture<HeadersiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadersiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadersiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
