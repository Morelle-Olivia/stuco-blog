import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnParticipateComponent } from './btn-participate.component';

describe('BtnParticipateComponent', () => {
  let component: BtnParticipateComponent;
  let fixture: ComponentFixture<BtnParticipateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnParticipateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnParticipateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
