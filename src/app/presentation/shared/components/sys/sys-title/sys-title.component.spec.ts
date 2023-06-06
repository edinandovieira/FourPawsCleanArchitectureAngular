import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SysTitleComponent } from './sys-title.component';

describe('SysTitleComponent', () => {
  let component: SysTitleComponent;
  let fixture: ComponentFixture<SysTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SysTitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SysTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
