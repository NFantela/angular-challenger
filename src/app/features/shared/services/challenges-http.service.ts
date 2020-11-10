import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Chapter } from '../models/chapter';


@Injectable({providedIn:'root'})
export class ChallengesService {

    private readonly componentsPath = 'assets/challenges/components-directives';
    private readonly chaptersPath = 'assets/challenges';

    constructor(@Inject(HttpClient) private readonly _http: HttpClient) {}


    getAllChapters():Observable<Chapter[]>{
        return this._http.get<Chapter[]>(`${this.chaptersPath}/all-chapters.json`).pipe(
            catchError((error: string) => of([]))
        );          
    }
}