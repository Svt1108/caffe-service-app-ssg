import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Path404Service {
  public isPath404$ = new BehaviorSubject<boolean>(false);

  public setPath404(isPath404: boolean) {
    this.isPath404$.next(isPath404);
  }
}
