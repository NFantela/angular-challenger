import { Component } from '@angular/core';

@Component({
    selector: 'section-home',
    styleUrls: ['section-home.component.scss'],
    template: `
        <div>
            Hello this is section home component - I will receive data from route DATA
        </div>
    `
})
export class SectionHomeComponent {
    constructor() {}
}