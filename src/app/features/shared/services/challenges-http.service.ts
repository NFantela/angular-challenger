import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Chapter } from '../models/chapter';
import { Workout } from '../models/challenge';


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

    /** Get section and file name and return challenge obj */
    getSingleWorkout(sectionName:string, fileName:string):Observable<Workout | null>{
        if(fileName){
            return this._http.get<Workout>(`${this.chaptersPath}/${sectionName}/${fileName}.json`).pipe(
                catchError((error: string) => of(null))
            );  
        }
        return of(null);
    }

    getSingleChallengeAsMarkdownText(sectionName:string, fileName:string):Observable<string | null>{
        if(fileName){
            return this._http.get(`${this.chaptersPath}/${sectionName}/${fileName}.md`, {responseType: 'text'}).pipe(
                catchError((error: string) => of(null))
            );  
        }
        return of(null);
    }
}