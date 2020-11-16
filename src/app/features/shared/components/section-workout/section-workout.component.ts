import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnInit, Type } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, Observable, of } from 'rxjs';
import {  switchMap } from 'rxjs/operators';
import {  Workout } from '../../models/challenge';
import { SectionWorkoutData } from '../../models/section.home.data';
import { ChallengesService } from '../../services/challenges-http.service';
import { PureMemoization } from '../../decorator/pure-memoization.decorator';

@Component({
    selector: 'section-workout',
    styleUrls: ['section-workout.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: 'section-workout.component.html',
})
export class SectionWorkoutComponent implements OnInit {
    
    constructor(
        @Inject(ActivatedRoute) private readonly _activatedRoute:ActivatedRoute,
        @Inject(ChallengesService) private readonly _challengesService:ChallengesService,
        @Inject(ChangeDetectorRef) private readonly _cdRef: ChangeDetectorRef){}
    
    currentWorkout$:Observable<Workout | null> = of(null);

    public componentChallengeType:Type<any> | undefined;

    public openedChallenges:number[] = [];

    ngOnInit(){
        const routeData$ = this._activatedRoute.data as Observable<SectionWorkoutData>;
        const routeParams$ = this._activatedRoute.params;

        this.currentWorkout$ = combineLatest([routeData$, routeParams$]).pipe(
            switchMap(([{sectionName}, params]) => {
               return this._challengesService.getSingleWorkout(sectionName, params.workoutId)
            })
        )
    }

    openThisChallenge(i:number){
        if(!this.componentChallengeType){
            this.loadComponent();
        }
        this.openedChallenges = [...new Set([...this.openedChallenges, i])];
    }

    @PureMemoization
    public isShown(index:number, arrToLook:number[] =  []):boolean{
       return arrToLook.includes(index);
    }
    
    /** Lazy load desired component */
    async loadComponent(){
        const { SingleChallengeComponent } = await import('../challenge-component/challenge.component');
        this.componentChallengeType = SingleChallengeComponent;
        this._cdRef.markForCheck();
    }


}