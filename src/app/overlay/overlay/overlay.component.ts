import { CommonModule } from '@angular/common';
import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { OverlayService } from '../overlay.service';
import { OverlayCaffeComponent } from '../overlay-caffe/overlay-caffe.component';
import { OverlayMachineComponent } from '../overlay-machine/overlay-machine.component';

@Component({
  selector: 'app-overlay',
  standalone: true,
  imports: [CommonModule, OverlayCaffeComponent],
  template: `<ng-container
    *ngComponentOutlet="currentComponent"
  ></ng-container>`,
  styleUrl: './overlay.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OverlayComponent implements AfterContentInit {
  public currentComponent!:
    | typeof OverlayCaffeComponent
    | typeof OverlayMachineComponent;
  constructor(public overlayService: OverlayService) {}
  ngAfterContentInit() {
    const flag = this.overlayService.overlayInput?.flag;
    if (flag) {
      if (flag === 'caffe') {
        this.currentComponent = OverlayCaffeComponent;
      }
      if (flag === 'machine') {
        this.currentComponent = OverlayMachineComponent;
      }
    }
  }
}
