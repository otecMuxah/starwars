import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Person } from '../../shared/models/person';

@Component({
  selector: 'app-ui-people-favorites',
  templateUrl: './ui-people-favorites.component.html',
  styleUrls: ['./ui-people-favorites.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiPeopleFavoritesComponent {
  @Input() favoritePeople: Person[] = [];
  displayedColumns: string[] = ['name'];
}
