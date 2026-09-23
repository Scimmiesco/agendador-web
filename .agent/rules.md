# Regras do Projeto (Project Rules)

Ao contribuir ou gerar código para este projeto, siga estritamente as diretrizes abaixo:

## 1. Angular e TypeScript
- **Standalone Components**: Utilize componentes standalone por padrão, minimizando ou evitando o uso de `NgModules` tradicionais.
- **Signals e Nova Sintaxe**: Dê preferência ao uso de Angular Signals (`signal`, `computed`, `effect`) para reatividade e gerenciamento de estado.
- **Control Flow**: Utilize a nova sintaxe de control flow do Angular (`@if`, `@for`, `@defer`) em vez das diretivas estruturais antigas (`*ngIf`, `*ngFor`).
- **Tipagem Forte**: Mantenha o TypeScript sempre estrito. Evite o uso de `any`; defina interfaces ou tipos apropriados para todas as estruturas de dados.
- **Injeção de Dependência**: Use a função `inject()` para injetar dependências, em vez de declará-las no construtor.

## 2. Estilos (Tailwind CSS)
- **Utility-first**: Utilize as classes utilitárias do Tailwind CSS v4 para a maior parte da estilização.
- **Semântica e Acessibilidade**: Escreva HTML semântico. Garanta que elementos interativos tenham atributos ARIA apropriados e navegação por teclado adequada.
- **Estilos Globais**: Mantenha regras CSS customizadas ao mínimo. Quando necessário, use `@apply` de forma consciente para não perder os benefícios do utility-first.

## 3. Qualidade de Código e Formatação
- **Prettier**: Todo o código deve ser formatado usando o Prettier de acordo com as configurações do projeto.
- **Testes**: Escreva testes unitários cobrindo o comportamento principal dos componentes e serviços usando **Vitest**.
- **Pequenos PRs / Commits**: Mantenha mudanças atômicas e com propósitos bem definidos.

## 4. Server-Side Rendering (SSR)
- Como o SSR está habilitado, cuidado ao acessar APIs exclusivas do navegador (como `window`, `document`, `localStorage`). 
- Proteja esses acessos checando a plataforma com `isPlatformBrowser` ou garantindo que rodem apenas no cliente (ex: `afterNextRender`).
