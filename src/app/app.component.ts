import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import {  Observable, of } from 'rxjs';
import { Chapter } from './features/shared/models/chapter';
import { ChallengesService } from './features/shared/services/challenges-http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(@Inject(ChallengesService) private readonly _challengesService :ChallengesService){}

  allChapters$:Observable<Chapter | Object> = of([]);

  ngOnInit(){
    this.allChapters$ = this._challengesService.getAllChapters();
  }

}
