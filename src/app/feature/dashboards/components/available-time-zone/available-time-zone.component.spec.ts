import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableTimeZoneComponent } from './available-time-zone.component';

describe('AvailableTimeZoneComponent', () => {
  let component: AvailableTimeZoneComponent;
  let fixture: ComponentFixture<AvailableTimeZoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvailableTimeZoneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvailableTimeZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
