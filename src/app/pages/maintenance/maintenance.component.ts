import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  NgZone,
  OnDestroy,
  afterNextRender,
} from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { TranslocoService } from '@ngneat/transloco';
import { Meta } from '@angular/platform-browser';
import { BehaviorSubject, take } from 'rxjs';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-maintenance',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: `./maintenance.component.html`,
  styleUrl: './maintenance.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('sliderTrigger', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('6900ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('6900ms', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class MaintenanceComponent implements OnDestroy {
  public photos: string[] = [
    'photo-1.png',
    'photo-2.png',
    'photo-3.png',
    'photo-4.png',
    'photo-5.png',
    'photo-6.png',
    'photo-7.png',
    'photo-8.png',
    'photo-9.png',
  ];
  public photoIndex = 0;
  private interval: any;
  public photoIndex$ = new BehaviorSubject<number>(0);
  constructor(
    private translocoService: TranslocoService,
    private meta: Meta,
    private zone: NgZone
  ) {
    this.translocoService
      .selectTranslate(`routes.description.maintenance`)
      .pipe(take(1))
      .subscribe((value) =>
        this.meta.updateTag({ name: 'description', content: value })
      );
    afterNextRender(() => {
      this.interval = setInterval(() => {
        this.photoIndex = Math.floor(Math.random() * this.photos.length);
        this.zone.run(() => {
          this.photoIndex$.next(this.photoIndex);
        });
      }, 7000);
    });
  }
  ngOnDestroy() {
    clearInterval(this.interval);
  }
}
