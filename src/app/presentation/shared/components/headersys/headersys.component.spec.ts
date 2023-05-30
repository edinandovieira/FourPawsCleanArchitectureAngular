import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadersysComponent } from './headersys.component';

describe('HeadersysComponent', () => {
  let component: HeadersysComponent;
  let fixture: ComponentFixture<HeadersysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadersysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadersysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
