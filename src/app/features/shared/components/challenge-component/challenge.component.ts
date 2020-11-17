import { ChangeDetectionStrategy, Component, Inject, SecurityContext } from '@angular/core';
import { NgDompurifySanitizer } from 'src/app/global-shared/ng-dom-purify/ng-dompurify.service';
import { Challenge } from '../../models/challenge';
import { CONTEXT } from '../../pipes/component-context/component-context.pipe';

@Component({
    selector: 'single-challenge',
    styleUrls: ['single-challenge.component.scss'],
    templateUrl: './challenge.component.html',
    changeDetection:ChangeDetectionStrategy.OnPush
})
export class SingleChallengeComponent {
    
    constructor(
        @Inject(CONTEXT) private readonly _contextChallenge: Challenge,
        @Inject(NgDompurifySanitizer) private readonly dompurifySanitizer: NgDompurifySanitizer
      ) {}


      purify(value: string | undefined): string {
          if(typeof value === 'string' && value.length){
            return  this.dompurifySanitizer.sanitize(SecurityContext.URL, value);
          }
          return '';
      }

      get singleChallenge(){
          return this._contextChallenge;
      }
} 