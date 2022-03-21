import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Person } from '../../shared/models/person';

@Component({
  selector: 'app-ui-people-table',
  templateUrl: './ui-people-table.component.html',
  styleUrls: ['./ui-people-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiPeopleTableComponent {
  @Input() people: Person[] = [];
  @Input() totalPeople: number = 0;
  @Input() currentPage: number = 0;
  @Output() pageChanges = new EventEmitter<number | undefined>();
  displayedColumns: string[] = ['id', 'name', 'birth_year', 'height', 'films', 'favorite'];
}
