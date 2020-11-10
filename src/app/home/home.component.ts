import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'home',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <article>
            <h1>Hello this is home component</h1>
            <p>Some description of home page what we do etc...</p>
            <footer>
                <a mat-raised-button color="primary"  routerLink="/components">Start with the challenges</a>
            </footer>
        </article>
    `
})
export class HomeComponent {
    constructor() {}
}