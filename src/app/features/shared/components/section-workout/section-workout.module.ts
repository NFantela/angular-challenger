import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SectionWorkoutComponent } from './section-workout.component';

@NgModule({
    imports: [CommonModule],
    declarations: [SectionWorkoutComponent],
    exports:[SectionWorkoutComponent],
    providers: []
})
export class SectionWorkoutModule {}