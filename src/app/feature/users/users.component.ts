import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { featherArrowLeftCircle } from '@ng-icons/feather-icons';
import { FilterUsersComponent } from "./components/filter-users/filter-users.component";
import { PaginationUsersComponent } from './components/pagination-users/pagination-users.component';
import { TableUsersComponent } from './components/table-users/table-users.component';


@Component({
  selector: 'app-users',
  imports: [TableUsersComponent, FilterUsersComponent, RouterLink, NgIcon, PaginationUsersComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
  providers: [provideIcons({ featherArrowLeftCircle })]
})
export class UsersComponent {
  arrowIcon = featherArrowLeftCircle;
}
