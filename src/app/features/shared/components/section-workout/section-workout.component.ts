import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'section-workout',
    styleUrls: ['section-workout.component.scss'],
    template: `
        <div>
            Hello this is section workout component i need router to fetch corresponding data from file
        </div>
    `
})
export class SectionWorkoutComponent implements OnInit {
    
    constructor(@Inject(ActivatedRoute) private readonly _activatedRoute:ActivatedRoute){}

    ngOnInit(){
       // this._activatedRoute.params.subscribe(console.log)
    }
}