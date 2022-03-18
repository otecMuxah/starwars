import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { PeopleFacadeService } from '../domain/people-facade.service';
import { Observable } from 'rxjs';
import { Person } from '../domain/models/person';

@Component({
  selector: 'app-feature-people-page',
  templateUrl: './feature-people-page.component.html',
  styleUrls: ['./feature-people-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeaturePeoplePageComponent implements OnInit {
  constructor(public peopleFacade: PeopleFacadeService) {}

  ngOnInit(): void {
    this.peopleFacade.getPeople();
  }
}
