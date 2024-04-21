import {
  animate,
  group,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const slideInAnimation = trigger('routeAnimations', [
  transition('* <=> *', [
    style({ position: 'relative' }),
    query(
      ':enter, :leave',
      [
        style({
          position: 'relative',
          top: 0,
          left: 0,
          width: '100%',
        }),
      ],
      { optional: true }
    ),

    query(':enter', [style({ opacity: 0 })], { optional: true }),
    query(':leave', [style({ position: 'fixed' })], { optional: true }),
    /****** query(':leave', animateChild(), { optional: true }),  *****/
    group([
      query(':leave', [animate('1700ms linear', style({ opacity: 0 }))], {
        optional: true,
      }),
      query(':enter', [animate('1700ms linear', style({ opacity: 1 }))], {
        optional: true,
      }),
      /****** query('@*', animateChild(), { optional: true }),  *****/
    ]),
  ]),
]);
