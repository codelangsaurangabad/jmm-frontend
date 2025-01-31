import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Auth2Component } from './auth2.component';

describe('AuthComponent', () => {
  let component: Auth2Component;
  let fixture: ComponentFixture<Auth2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [Auth2Component],
}).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Auth2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
