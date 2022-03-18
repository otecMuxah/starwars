import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui-people-favorites',
  templateUrl: './ui-people-favorites.component.html',
  styleUrls: ['./ui-people-favorites.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiPeopleFavoritesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
