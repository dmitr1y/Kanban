import { FactoryProvider, InjectionToken } from '@angular/core';

export const WINDOW: InjectionToken<Window> = new InjectionToken('window');

const WINDOW_PROVIDER: FactoryProvider = {
  provide: WINDOW,
  useFactory: () => window
};

export const WINDOW_PROVIDES = [
  WINDOW_PROVIDER
];
