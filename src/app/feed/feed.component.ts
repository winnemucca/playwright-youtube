import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Video } from '../data/models/video.interface';
import { DUMMY_VIDEOS } from '../data/models/VIDEOS';
import { YoutubeService } from '../data/youtube.service';
import { Journals } from '../data/models/journals.models';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  videos: Video[] = [];
  journals: Journals[] = [];
  private unsubscribe$: Subject<any> = new Subject();

  constructor(private youTubeService: YoutubeService) { }

  ngOnInit(): void {        
    this.retrieveVideos()
  }

  retrieveVideos() {
    this.youTubeService.getDummyVideos()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((items: any) => {
        this.videos = items
      });

    if (this.videos.length == 0) this.videos = DUMMY_VIDEOS;
  }

  retrieveJournals() {
    this.youTubeService.getJournals()
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe(() => {
      console.log('hit');
    })
  }
}
