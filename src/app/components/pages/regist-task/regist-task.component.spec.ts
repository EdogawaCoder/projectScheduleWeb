import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistTaskComponent } from './regist-task.component';

describe('RegistTaskComponent', () => {
  let component: RegistTaskComponent;
  let fixture: ComponentFixture<RegistTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistTaskComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
