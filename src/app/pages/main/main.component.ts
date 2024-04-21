import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  NgZone,
  OnDestroy,
  OnInit,
  afterNextRender,
} from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { BehaviorSubject, take } from 'rxjs';
import { animate, style, transition, trigger } from '@angular/animations';
import { Meta } from '@angular/platform-browser';
import { TranslocoService } from '@ngneat/transloco';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: `./main.component.html`,
  styleUrl: './main.component.scss',
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
export class MainComponent implements OnInit, OnDestroy {
  public photos: string[] = [
    'photo-1.png',
    'photo-2.png',
    'photo-3.png',
    'photo-4.png',
    'photo-5.png',
    'photo-6.png',
    'photo-7.png',
    'photo-10.png',
    'photo-11.png',
    'photo-12.png',
    'photo-13.png',
    'photo-14.png',
    'photo-15.png',
    'photo-16.png',
    'photo-17.png',
  ];
  public photoIndex = 0;
  private interval: any;
  public photoIndex$ = new BehaviorSubject<number>(0);

  constructor(
    private translocoService: TranslocoService,
    private meta: Meta,
    private zone: NgZone,
    private router: Router
  ) {
    this.translocoService
      .selectTranslate(`routes.description.welcome`)
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
        //   this.photoIndex$.subscribe((value) => console.log(value));
      }, 7000);
      const video = document.getElementById('video') as HTMLVideoElement;
      if (video) {
        video.muted = true;
        /****** возможно понадобится
            video.play();
           * ****** */
      }
    });
  }

  ngOnInit() {}

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  public onCardClick(page: string) {
    this.zone.run(() => {
      this.router.navigate([`/${page}`]);
    });
  }
}
