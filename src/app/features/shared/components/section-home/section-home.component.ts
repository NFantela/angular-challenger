import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { Observable } from 'rxjs';
import { SectionHomeData } from '../../models/section.home.data';

@Component({
    selector: 'section-home',
    styleUrls: ['section-home.component.scss'],
    template: `
        <article *ngIf="routeData$ | async as sectionData">
            <header>
                <h1>{{sectionData.sectionTitle}}</h1>
            </header>

            <p>{{sectionData.sectionDescription}}</p>

            <footer>
                <a mat-raised-button color="primary"  routerLink="/workout/1">Start with the challenges</a>
            </footer>
        </article>
    `
})
export class SectionHomeComponent implements OnInit {
    
    constructor(@Inject(ActivatedRoute) private readonly _activatedRoute:ActivatedRoute){}

    routeData$!: Observable<SectionHomeData>;

    ngOnInit(){
       this.routeData$ = this._activatedRoute.data as Observable<SectionHomeData>;
    }
}