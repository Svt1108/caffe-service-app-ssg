import { CommonModule } from '@angular/common';
import {
  AfterViewChecked,
  ChangeDetectionStrategy,
  Component,
  afterNextRender,
} from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { dataMachine } from '../../core/data/data';
import { OverlayService } from '../../overlay/overlay.service';
import { OverlayComponent } from '../../overlay/overlay/overlay.component';
import { TranslocoService } from '@ngneat/transloco';
import { Meta } from '@angular/platform-browser';
import { take } from 'rxjs';

@Component({
  selector: 'app-machine',
  standalone: true,
  imports: [CommonModule, SharedModule, OverlayComponent],
  templateUrl: `./machine.component.html`,
  styleUrl: './machine.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MachineComponent implements AfterViewChecked {
  public dataMachine = dataMachine;
  public scaleImage = '';

  constructor(
    public overlayService: OverlayService,
    private translocoService: TranslocoService,
    private meta: Meta
  ) {
    this.translocoService
      .selectTranslate(`routes.description.machine`)
      .pipe(take(1))
      .subscribe((value) =>
        this.meta.updateTag({ name: 'description', content: value })
      );
    afterNextRender(() => {
      const video = document.getElementById(
        'video_machine'
      ) as HTMLVideoElement;
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
