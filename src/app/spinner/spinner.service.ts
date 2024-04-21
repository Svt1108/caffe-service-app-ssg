import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SpinnerService {
  public loading: boolean = false;

  public setLoading(value: boolean) {
    this.loading = value;
  }

  public getLoading(): boolean {
    return this.loading;
  }
}
