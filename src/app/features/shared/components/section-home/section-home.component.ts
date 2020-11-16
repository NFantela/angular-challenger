import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { Observable } from 'rxjs';
import { SectionHomeData } from '../../models/section.home.data';

@Component({
    selector: 'section-home',
    styleUrls: ['section-home.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
    <mat-card class="section-home">
        <article *ngIf="routeData$ | async as sectionData">
            <header>
            <mat-card-header>
                <h1>{{sectionData.sectionTitle}}</h1>
            </mat-card-header>
            </header>

            <mat-card-content>
                 <p>{{sectionData.sectionDescription}}</p>
            </mat-card-content>

            <mat-card-actions>
                <footer>
                <a mat-raised-button color="primary"  routerLink="/workout/1">Start with the challenges</a>
                </footer>
            </mat-card-actions>

        </article>
    </mat-card>
    `
})
export class SectionHomeComponent implements OnInit {
    
    constructor(@Inject(ActivatedRoute) private readonly _activatedRoute:ActivatedRoute){}

    routeData$!: Observable<SectionHomeData>;

    ngOnInit(){
       this.routeData$ = this._activatedRoute.data as Observable<SectionHomeData>;
    }
}