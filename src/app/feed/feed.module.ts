import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './feed.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        FeedComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
    ],
    exports: [
        FeedComponent
    ]
})
export class FeedModule { }
