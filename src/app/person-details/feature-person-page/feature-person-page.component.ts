import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonFacadeService } from '../domain/person-facade.service';

@Component({
  selector: 'app-feature-person-page',
  templateUrl: './feature-person-page.component.html',
  styleUrls: ['./feature-person-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeaturePersonPageComponent implements OnInit {
  personId = '';
  constructor(private route: ActivatedRoute, public personFacade: PersonFacadeService) {}

  ngOnInit(): void {
    this.personId = this.route.snapshot.paramMap.get('id') || '';
    if (this.personId) {
      this.personFacade.getPerson(this.personId);
    }
  }
}
