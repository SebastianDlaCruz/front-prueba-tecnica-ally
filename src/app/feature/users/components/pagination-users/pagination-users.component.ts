import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination-users',
  imports: [],
  templateUrl: './pagination-users.component.html',
  styleUrl: './pagination-users.component.css'
})
export class PaginationUsersComponent {

  @Input() currentPage = 0;
  @Input() totalItems = 0;
  @Input() totalPages = 0;


  @Output() onNext = new EventEmitter<void>();
  @Output() onPrev = new EventEmitter<void>();
  @Output() onFirst = new EventEmitter<void>();
  @Output() onLast = new EventEmitter<void>();

}
