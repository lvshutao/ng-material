import { trigger, state, style, transition, animate } from '@angular/animations';

export const cardAnim = trigger('card', [
    state('out', style({ transform: 'scale(1)','box-shadow':'none' })),
    state('hover', style({ transform: 'scale(1.01)','box-shadow':'1px 2px 2px 4px #ccc'})),
    transition('out => hover', animate('100ms ease-in')),
    transition('hover => out', animate('100ms ease-out'))
])