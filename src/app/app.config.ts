import { ApplicationConfig, isDevMode } from '@angular/core';
import { TitleStrategy, provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { TranslocoHttpLoader } from './transloco-loader';
import { provideTransloco } from '@ngneat/transloco';
import { TemplatePageTitleStrategy } from './core/services/title-strategy.service';
import { Languages } from './shared/shared.model';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    { provide: TitleStrategy, useClass: TemplatePageTitleStrategy },
    provideClientHydration(),
    provideHttpClient(withFetch()),
    provideAnimations(),
    provideTransloco({
      config: {
        availableLangs: [Languages.ru, Languages.en, Languages.it],
        defaultLang: Languages.ru,
        reRenderOnLangChange: true,
        prodMode: !isDevMode(),
      },
      loader: TranslocoHttpLoader,
    }),
  ],
};
