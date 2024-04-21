import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { OverlayService } from '../overlay.service';
import { dataCaffe } from '../../core/data/data';
import { DataCaffe } from '../../core/data/data.model';

@Component({
  selector: 'app-overlay-caffe',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './overlay-caffe.component.html',
  styleUrl: './overlay-caffe.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OverlayCaffeComponent {
  data?: DataCaffe;
  constructor(public overlayService: OverlayService) {
    this.data = dataCaffe.find(
      (elem) => elem.id === this.overlayService.overlayInput?.id
    );
  }
}
