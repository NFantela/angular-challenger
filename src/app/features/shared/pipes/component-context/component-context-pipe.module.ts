import { NgModule } from '@angular/core';
import { ComponentContextPipe } from './component-context.pipe';

@NgModule({
    imports: [],
    declarations: [ComponentContextPipe],
    exports:[ComponentContextPipe],
    providers: []
})
export class ComponentContextPipeModule {}