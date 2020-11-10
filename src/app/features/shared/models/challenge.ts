
export interface Challenge {
    challengeTitle:string;
    challengeDescription:string;
    stackblitzLink?:string;
    gistLink?:string;
}

export interface Workout {
    workoutTitle:string;
    workoutDescription:string;
    challenges?: Challenge[];
}