import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { describe, expect, it, beforeEach } from 'vitest';
import { Agendador } from './agendador';

describe('Agendador', () => {
  let component: Agendador;
  let fixture: ComponentFixture<Agendador>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Agendador],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Agendador);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
