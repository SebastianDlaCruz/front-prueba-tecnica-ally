import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthHttpService } from '@core/http';
import { PaginationMeta, ResponsePagination, User } from '@core/models';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { featherArrowLeftCircle } from '@ng-icons/feather-icons';
import { PaginationUsersComponent } from './components/pagination-users/pagination-users.component';
import { TableUsersComponent } from './components/table-users/table-users.component';
import { UsersPaginationService } from './services/users-pagination/users-pagination.service';


@Component({
  selector: 'app-users',
  imports: [TableUsersComponent, RouterLink, NgIcon, PaginationUsersComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
  providers: [provideIcons({ featherArrowLeftCircle })]
})
export class UsersComponent implements OnInit {

  private readonly authHttpService = inject(AuthHttpService);
  private readonly usersPagination = inject(UsersPaginationService);

  dataPagination: PaginationMeta = {
    currentPage: 0,
    first: '',
    itemsPerPage: 0,
    last: '',
    next: null,
    prev: null,
    totalItems: 0,
    totalPages: 0
  }

  arrowIcon = featherArrowLeftCircle;

  users: User[] = [];

  ngOnInit(): void {
    this.authHttpService.getUser().subscribe({
      next: (value) => {

        this.addDatePagination(value)
      }
    })
  }


  addDatePagination(data: ResponsePagination) {
    this.dataPagination = { ...data.pagination };
    this.users = data.data;

  }

  onNext() {
    if (this.dataPagination.next) {
      this.usersPagination.config(this.dataPagination.next).subscribe({
        next: (value) => {
          this.addDatePagination(value)
        }
      })
    }
  }

  onPrev() {
    if (this.dataPagination.prev) {
      this.usersPagination.config(this.dataPagination.prev).subscribe({
        next: (value) => {
          this.addDatePagination(value)
        }
      })
    }
  }

  onLast() {
    this.usersPagination.config(this.dataPagination.last).subscribe({
      next: (value) => {
        this.addDatePagination(value)
      }
    })
  }


  onFirst() {
    this.usersPagination.config(this.dataPagination.first).subscribe({
      next: (value) => {
        this.addDatePagination(value)
      }
    })
  }

}
