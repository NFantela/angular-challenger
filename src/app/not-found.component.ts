import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'not-found',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <div>
            No results sorry
        </div>
    `
})
export class NotFoundComponent {
    constructor() {}
}