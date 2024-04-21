import { Injectable } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { Title } from '@angular/platform-browser';
import { TitleStrategy, RouterStateSnapshot } from '@angular/router';
import { take } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TemplatePageTitleStrategy extends TitleStrategy {
  constructor(
    private translocoService: TranslocoService,
    private readonly title: Title
  ) {
    super();
  }

  override updateTitle(routerState: RouterStateSnapshot) {
    const title = this.buildTitle(routerState);

    if (title !== undefined) {
      this.translocoService
        .selectTranslate(`routes.title.${title}`)
        .pipe(take(1))
        .subscribe((value) => this.title.setTitle(value));
    }
  }
}
