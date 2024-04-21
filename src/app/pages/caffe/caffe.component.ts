import { CommonModule } from '@angular/common';
import {
  AfterViewChecked,
  ChangeDetectionStrategy,
  Component,
  afterNextRender,
} from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { dataCaffe } from '../../core/data/data';
import { OverlayComponent } from '../../overlay/overlay/overlay.component';
import { OverlayService } from '../../overlay/overlay.service';
import { TranslocoService } from '@ngneat/transloco';
import { take } from 'rxjs';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-caffe',
  standalone: true,
  imports: [CommonModule, SharedModule, OverlayComponent],
  templateUrl: `./caffe.component.html`,
  styleUrl: './caffe.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CaffeComponent implements AfterViewChecked {
  public dataCaffe = dataCaffe;
  public scaleImage = '';

  constructor(
    public overlayService: OverlayService,
    private translocoService: TranslocoService,
    private meta: Meta
  ) {
    this.translocoService
      .selectTranslate(`routes.description.caffe`)
      .pipe(take(1))
      .subscribe((value) =>
        this.meta.updateTag({ name: 'description', content: value })
      );
    afterNextRender(() => {
      const video = document.getElementById('video_caffe') as HTMLVideoElement;
      if (video) {
        video.muted = true;
      }
    });
  }

  ngAfterViewChecked() {}

  public toggleScaleImage(id: string) {
    this.scaleImage === id ? (this.scaleImage = '') : (this.scaleImage = id);
  }
}
