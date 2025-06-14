import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationUsersComponent } from './pagination-users.component';

describe('PaginationUsersComponent', () => {
  let component: PaginationUsersComponent;
  let fixture: ComponentFixture<PaginationUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginationUsersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginationUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
