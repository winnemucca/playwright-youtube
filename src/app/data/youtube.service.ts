import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, throwError } from 'rxjs';
import { Video } from './models/video.interface';
import { DUMMY_VIDEOS } from './models/VIDEOS';
import { Journals, JournalsResponse } from './models/journals.models';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  private API_URL = 'https://www.googleapis.com/youtube/v3/search';


  private API_KEY: string = 'AIzaSyDGF4oSwQ8fBUX7ikPRcWJwyPn29tcui7o';

  constructor(public http: HttpClient) { }

    getDummyVideos(): Observable<any> {
      return of(DUMMY_VIDEOS).pipe(
      )
    }

    getVideos(query?: string): Observable<any> {
      query = query ? query : "cats"
      const url = `${this.API_URL}?q=${query}&key=${this.API_KEY}&part=snippet&type=video&maxResults=24`;
      return this.http
        .get(url)
        .pipe();
    }

    getJournals(): Observable<Journals | any> {
      const url = `https://api.crossref.org/journals`
      return this.http.get<JournalsResponse>(url)
        .pipe(
          map((data) => {
            debugger;
            return data.message.items.map(item => 

            )
          }),
          catchError(err => {
            // handle error with testing. add snackbar
            return throwError(new Error(err))
          })
        );
    }
}
