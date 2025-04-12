import { InjectionToken } from '@angular/core';
import { AppSettings } from './app-settings';

export interface NeoContext extends Window {
    AppSettings?: AppSettings
}


export const TOKEN_NEO_CONTEXT = new InjectionToken<NeoContext>('neo-context', {
    providedIn: 'root',
    factory: () => window as NeoContext // ✅ This preserves all Window properties
});