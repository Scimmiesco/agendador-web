import { NgOptimizedImage } from '@angular/common';
import { Component, signal } from '@angular/core';

export interface HorarioSemana {
  dia: string;
  periodoManha: string;
  intervalo: string;
  periodoTarde: string;
  fechado?: boolean;
}

@Component({
  selector: 'app-horarios-disponiveis',
  imports: [NgOptimizedImage],
  templateUrl: './horarios-disponiveis.html',
})
export class HorariosDisponiveis {
  protected readonly nomeEstabelecimento = signal<string>('Studio Elegance');
  protected readonly imagemBanner = signal<string>(
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80'
  );

  protected readonly numeroWhatsapp = signal('+55 (11) 98765-4321');
  protected readonly linkWhatsapp = signal(
    'https://wa.me/5511987654321?text=Ol%C3%A1!%20Gostaria%20de%20tirar%20uma%20d%C3%BAvida%20sobre%20os%20hor%C3%A1rios.'
  );

  protected readonly diasSemana = signal<HorarioSemana[]>([
    {
      dia: 'Segunda-feira',
      periodoManha: '08:00 – 12:00',
      intervalo: '12:00 – 13:30',
      periodoTarde: '13:30 – 18:00',
    },
    {
      dia: 'Terça-feira',
      periodoManha: '08:00 – 12:00',
      intervalo: '12:00 – 13:30',
      periodoTarde: '13:30 – 18:00',
    },
    {
      dia: 'Quarta-feira',
      periodoManha: '08:00 – 12:00',
      intervalo: '12:00 – 13:30',
      periodoTarde: '13:30 – 18:00',
    },
    {
      dia: 'Quinta-feira',
      periodoManha: '08:00 – 12:00',
      intervalo: '12:00 – 13:30',
      periodoTarde: '13:30 – 18:00',
    },
    {
      dia: 'Sexta-feira',
      periodoManha: '08:00 – 12:00',
      intervalo: '12:00 – 13:30',
      periodoTarde: '13:30 – 18:00',
    },
    {
      dia: 'Sábado',
      periodoManha: '08:30 – 12:00',
      intervalo: '12:00 – 13:00',
      periodoTarde: '13:00 – 16:30',
    },
    {
      dia: 'Domingo',
      periodoManha: 'Fechado',
      intervalo: '—',
      periodoTarde: 'Fechado',
      fechado: true,
    },
  ]);
}
