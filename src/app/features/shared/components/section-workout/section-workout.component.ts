import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Challenge } from '../../models/challenge';
import { SectionWorkoutData } from '../../models/section.home.data';
import { ChallengesService } from '../../services/challenges-http.service';

@Component({
    selector: 'section-workout',
    styleUrls: ['section-workout.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <div>
            Hello this is section workout component i need router to fetch corresponding data from file
           <pre>{{ currentChallenge$ | async | json }}</pre> 
        </div>
    `
})
export class SectionWorkoutComponent implements OnInit {
    
    constructor(
        @Inject(ActivatedRoute) private readonly _activatedRoute:ActivatedRoute,
        @Inject(ChallengesService) private readonly _challengesService:ChallengesService){}
    
    currentChallenge$:Observable<Challenge | null> = of(null);

    ngOnInit(){
        const routeData$ = this._activatedRoute.data as Observable<SectionWorkoutData>;
        const routeParams$ = this._activatedRoute.params;

        this.currentChallenge$ = combineLatest([routeData$, routeParams$]).pipe(
            switchMap(([{sectionName}, params]) => {
               return this._challengesService.getSingleChallenge(sectionName, params.workoutId)
            })
        )
    }
}