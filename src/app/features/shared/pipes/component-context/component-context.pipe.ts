import { Pipe, PipeTransform, Injector } from "@angular/core";
import { InjectionToken } from "@angular/core";

export const CONTEXT = new InjectionToken<unknown>('Context for dynamic components');

@Pipe({
  name: 'compContext'
})
export class ComponentContextPipe implements PipeTransform {
  constructor(private readonly injector: Injector) {}

  transform(passedValue: unknown): Injector {
    return Injector.create({
        providers: [
            {  provide: CONTEXT, useValue: passedValue }
        ],
        parent: this.injector
    })
  }

}