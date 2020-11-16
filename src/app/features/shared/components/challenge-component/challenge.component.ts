import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { Challenge } from '../../models/challenge';
import { CONTEXT } from '../../pipes/component-context.pipe';

@Component({
    selector: 'single-challenge',
    styleUrls: ['single-challenge.component.scss'],
    templateUrl: './challenge.component.html',
    changeDetection:ChangeDetectionStrategy.OnPush
})
export class SingleChallengeComponent {
    
    constructor(
        @Inject(CONTEXT) private readonly _contextChallenge: Challenge
      ) {}

      get singleChallenge(){
          return this._contextChallenge;
      }
} 