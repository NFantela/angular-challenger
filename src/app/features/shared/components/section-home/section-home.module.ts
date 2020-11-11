import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SectionHomeComponent } from './section-home.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@NgModule({
    imports: [CommonModule, MatButtonModule, MatCardModule],
    declarations: [SectionHomeComponent],
    exports:[SectionHomeComponent],
    providers: []
})
export class SectionHomeModule {}