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
  constructor(private route: ActivatedRoute, public personFacade: PersonFacadeService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.personFacade.getPerson(id);
    }
  }
}
