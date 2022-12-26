import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { VideoGridComponent } from './video-grid.component';
@NgModule({
    declarations: [
        VideoGridComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
    ],
    exports: [
        VideoGridComponent
    ]
})
export class VideoGridModule { }
