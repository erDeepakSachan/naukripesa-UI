import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { Observable } from 'rxjs';

export const authGuard = (): Observable<boolean> => {
    const authService = inject(AuthService);
    const router = inject(Router);
    return authService.checkAuth();
};
