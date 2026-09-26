import { TestBed } from '@angular/core/testing';
import { DOCUMENT, PLATFORM_ID } from '@angular/core';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { ThemeService } from './theme.service';

describe('ThemeService', () => {
  let service: ThemeService;
  let mockDocument: Document;

  beforeEach(() => {
    mockDocument = {
      documentElement: {
        classList: {
          add: vi.fn(),
          remove: vi.fn(),
        },
      },
    } as unknown as Document;

    TestBed.configureTestingModule({
      providers: [
        ThemeService,
        { provide: PLATFORM_ID, useValue: 'browser' },
        { provide: DOCUMENT, useValue: mockDocument },
      ],
    });

    service = TestBed.inject(ThemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should toggle theme between light and dark', () => {
    const initial = service.isDarkMode();
    service.toggleTheme();
    expect(service.isDarkMode()).toBe(!initial);
    expect(service.currentTheme()).toBe(!initial ? 'dark' : 'light');
  });

  it('should set theme explicitly', () => {
    service.setTheme('dark');
    expect(service.isDarkMode()).toBe(true);
    expect(service.currentTheme()).toBe('dark');

    service.setTheme('light');
    expect(service.isDarkMode()).toBe(false);
    expect(service.currentTheme()).toBe('light');
  });
});

