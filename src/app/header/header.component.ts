import { CommonModule, ViewportScroller } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  afterNextRender,
} from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MenuItem } from 'primeng/api';
import { TranslocoService } from '@ngneat/transloco';
import { Languages } from '../shared/shared.model';
import { Path404Service } from '../core/services/path404.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] | undefined;
  /**** currentClasses: Record<string, boolean> = {};  ****/
  isVisible = false;

  constructor(
    private translocoService: TranslocoService,
    public viewportscroller: ViewportScroller,
    public path404service: Path404Service
  ) {
    afterNextRender(() => {
      this.items = [
        {
          label: 'Русский',
          command: () => {
            this.translocoService.setActiveLang(Languages.ru);
            localStorage.setItem('lang', Languages.ru);
            document.documentElement.setAttribute('lang', Languages.ru);
          },
        },
        {
          label: 'English',
          command: () => {
            this.translocoService.setActiveLang(Languages.en);
            localStorage.setItem('lang', Languages.en);
            document.documentElement.setAttribute('lang', Languages.en);
          },
        },
        {
          label: 'Italiano',
          command: () => {
            this.translocoService.setActiveLang(Languages.it);
            localStorage.setItem('lang', Languages.it);
            document.documentElement.setAttribute('lang', Languages.it);
          },
        },
      ];
    });
  }

  ngOnInit() {}

  public changeMenuVisibility() {
    this.isVisible = !this.isVisible;
  }
}
