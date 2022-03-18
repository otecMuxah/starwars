import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui-people-table',
  templateUrl: './ui-people-table.component.html',
  styleUrls: ['./ui-people-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiPeopleTableComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
