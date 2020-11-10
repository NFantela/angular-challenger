import { Challenge } from './challenge';

export interface Chapter {
    chapterName:string,
    challengeDescription:string,
    chapterUrl:string,
    challenges: ReadonlyArray<Pick<Challenge, 'challengeTitle'> & {challengeLocation:string}>
}