import { Component, OnInit, afterNextRender } from '@angular/core';
import { ChildrenOutletContexts, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { PrimeNGConfig } from 'primeng/api';
import { slideInAnimation } from './animations';
import { Languages } from './shared/shared.model';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    CoreModule,
    SharedModule,
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    SpinnerComponent,
  ],
  animations: [slideInAnimation],
})
export class AppComponent implements OnInit {
  activatedRoute: any;
  meta: any;
  constructor(
    private translocoService: TranslocoService,
    private primengConfig: PrimeNGConfig,
    private contexts: ChildrenOutletContexts // private route: ActivatedRoute,
  ) {
    afterNextRender(() => {
      document.documentElement.setAttribute(
        'lang',
        localStorage.getItem('lang') || Languages.ru
      );
      this.translocoService.setActiveLang(
        localStorage.getItem('lang') || Languages.ru
      );
    });
  }

  ngOnInit() {
    this.primengConfig.ripple = true;
    this.primengConfig.zIndex = {
      modal: 1100, // dialog, sidebar
      overlay: 1000, // dropdown, overlaypanel
      menu: 1000, // overlay menus
      tooltip: 1100, // tooltip
    };
  }

  public getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.[
      'animation'
    ];
  }
}
