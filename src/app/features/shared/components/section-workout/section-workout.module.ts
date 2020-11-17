import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SectionWorkoutComponent } from './section-workout.component';
// material
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

// pipes
import { ComponentContextPipeModule } from '../../pipes/component-context/component-context-pipe.module';


@NgModule({
    imports: [CommonModule, MatButtonModule, MatCardModule, ComponentContextPipeModule],
    declarations: [SectionWorkoutComponent],
    exports:[SectionWorkoutComponent],
    providers: []
})
export class SectionWorkoutModule {}