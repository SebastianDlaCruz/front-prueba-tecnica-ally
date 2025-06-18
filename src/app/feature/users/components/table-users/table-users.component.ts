import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { User } from '@core/models';

@Component({
  selector: 'app-table-users',
  imports: [DatePipe],
  templateUrl: './table-users.component.html',
  styleUrl: './table-users.component.css'
})
export class TableUsersComponent {

  @Input() users: User[] = [];
}
