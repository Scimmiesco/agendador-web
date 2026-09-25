import { ComponentFixture, TestBed } from '@angular/core/testing';
import { describe, expect, it, beforeEach } from 'vitest';
import { HorariosDisponiveis } from './horarios-disponiveis';

describe('HorariosDisponiveis', () => {
  let component: HorariosDisponiveis;
  let fixture: ComponentFixture<HorariosDisponiveis>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HorariosDisponiveis],
    }).compileComponents();

    fixture = TestBed.createComponent(HorariosDisponiveis);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
