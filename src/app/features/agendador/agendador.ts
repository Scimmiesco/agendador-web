import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';

export interface StepConfig {
  id: string;
  path: string;
  label: string;
  proximoLabel: string;
}

@Component({
  selector: 'app-agendador',
  imports: [RouterOutlet],
  templateUrl: './agendador.html',
})
export class Agendador {
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  readonly steps = signal<StepConfig[]>([
    {
      id: 'horarios',
      path: 'horarios',
      label: 'Horários',
      proximoLabel: 'Agendar',
    },
    {
      id: 'itens',
      path: 'itens',
      label: 'Itens',
      proximoLabel: 'Escolher Data',
    },
    {
      id: 'dias',
      path: 'dias',
      label: 'Data',
      proximoLabel: 'Preencher Dados',
    },
    {
      id: 'dados',
      path: 'dados',
      label: 'Seus Dados',
      proximoLabel: 'Confirmar Agendamento',
    },
  ]);

  private readonly currentUrl = signal<string>(this.router.url);

  constructor() {
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event) => {
        this.currentUrl.set(event.urlAfterRedirects);
      });
  }

  readonly currentStepIndex = computed(() => {
    const url = this.currentUrl().toLowerCase();
    const index = this.steps().findIndex((step) => url.includes(step.path));
    return index >= 0 ? index : 0;
  });

  readonly currentStep = computed(() => this.steps()[this.currentStepIndex()]);

  readonly podeVoltar = computed(() => this.currentStepIndex() > 0);

  avancar(): void {
    const nextIndex = this.currentStepIndex() + 1;
    if (nextIndex < this.steps().length) {
      const nextStep = this.steps()[nextIndex];
      this.router.navigate([nextStep.path], { relativeTo: this.route });
    }
  }

  voltar(): void {
    const prevIndex = this.currentStepIndex() - 1;
    if (prevIndex >= 0) {
      const prevStep = this.steps()[prevIndex];
      this.router.navigate([prevStep.path], { relativeTo: this.route });
    }
  }
}
