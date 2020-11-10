import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SectionHomeComponent } from './section-home.component';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
    imports: [CommonModule, MatButtonModule],
    declarations: [SectionHomeComponent],
    exports:[SectionHomeComponent],
    providers: []
})
export class SectionHomeModule {}