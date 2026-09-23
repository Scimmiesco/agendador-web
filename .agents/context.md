# Contexto do Projeto: Agendador Web

Aplicação web frontend da plataforma **Agendador**, projetada para permitir que clientes e prestadores de serviços consultem disponibilidades, realizem reservas e façam a gestão de agendamentos com alta performance, reatividade e acessibilidade.

---

## Tech Stack Principal
- **Framework**: Angular 22 (Standalone components, Signals, novo Control Flow `@if`/`@for`/`@switch`)
- **Linguagem**: TypeScript (~6.0) com verificação estrita
- **Estilização**: Tailwind CSS v4 (`@import 'tailwindcss';` com PostCSS, modelo utility-first)
- **Renderização**: Server-Side Rendering (SSR) via `@angular/ssr` integrado ao servidor Express
- **Testes Unitários**: Vitest 4 com jsdom
- **Formatador**: Prettier
- **Gerenciador de Pacotes**: npm

---

## Estrutura de Diretórios Recomendada
O código sob `src/app/` deve seguir a organização modular por responsabilidade e domínio:
```
src/app/
├── core/                  # Serviços singleton globais, interceptors HTTP, autenticação, guards
│   ├── auth/
│   └── services/
├── shared/                # Componentes visuais reutilizáveis, diretivas, pipes, modelos genéricos
│   ├── components/        # Botões, modais, cards, seletores de data
│   └── models/
└── features/              # Módulos funcionais e rotas de negócio
    ├── scheduling/        # Fluxo de escolha de data/hora, confirmação de agendamento
    ├── appointments/      # Listagem, cancelamento e histórico de agendamentos
    ├── services-catalog/  # Catálogo e detalhes de serviços oferecidos
    └── dashboard/         # Visão geral de métricas ou agenda do profissional
```

---

## Scripts Disponíveis
- `npm start`: Inicia o servidor de desenvolvimento (`ng serve`).
- `npm run build`: Compila a aplicação para produção (client e server SSR).
- `npm run test`: Executa a suíte de testes unitários com Vitest.
- `npm run serve:ssr:agendador`: Executa o bundle SSR compilado com Node/Express.

---

## Diretrizes de Desenvolvimento para Agentes de IA
1. **Reatividade Nativa**: Use Signals (`signal()`, `computed()`, `linkedSignal()`) e evite padrões de RxJS complexos dentro de componentes quando signals atenderem.
2. **Estilização com Tailwind CSS v4**: Use classes utilitárias diretamente nos templates HTML. Evite criar arquivos `.css` vazios.
3. **Compatibilidade com SSR**: Nunca acesse diretamente `window`, `document` ou `localStorage` sem proteger com `isPlatformBrowser` ou `afterNextRender`.
4. **Testes com Vitest**: Sempre utilize a API do Vitest (`describe`, `it`, `expect`, `vi.fn()`) para testes e mocks.
5. **Acessibilidade**: Elementos interativos devem suportar navegação por teclado e rótulos ARIA adequados.
