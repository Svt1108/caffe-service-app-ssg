import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OverlayService {
  public overlayInput!: { flag: string; id: string } | null;

  public setOverlayValue(value: { flag: string; id: string }) {
    this.overlayInput = value;
  }

  public getOverlayValue() {
    return this.overlayInput;
  }
}
