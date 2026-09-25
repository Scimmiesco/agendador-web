import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { computed, effect, inject, Injectable, PLATFORM_ID, signal } from '@angular/core';

export type AppTheme = 'light' | 'dark';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly document = inject(DOCUMENT);
  private readonly isBrowser = isPlatformBrowser(this.platformId);

  readonly isDarkMode = signal<boolean>(false);
  readonly currentTheme = computed<AppTheme>(() => (this.isDarkMode() ? 'dark' : 'light'));

  constructor() {
    if (this.isBrowser) {
      const savedTheme = localStorage.getItem('agendador-theme') as AppTheme | null;
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const initialDark = savedTheme ? savedTheme === 'dark' : prefersDark;

      this.isDarkMode.set(initialDark);
      this.applyThemeToDom(initialDark);
    }

    effect(() => {
      const isDark = this.isDarkMode();
      if (this.isBrowser) {
        this.applyThemeToDom(isDark);
        localStorage.setItem('agendador-theme', isDark ? 'dark' : 'light');
      }
    });
  }

  toggleTheme(): void {
    this.isDarkMode.update(dark => !dark);
  }

  setTheme(theme: AppTheme): void {
    this.isDarkMode.set(theme === 'dark');
  }

  private applyThemeToDom(isDark: boolean): void {
    const root = this.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }
}

