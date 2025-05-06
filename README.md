# Amani Front

Este é um projeto front-end desenvolvido com Next.js 14, TypeScript e Tailwind CSS.

## Tecnologias Utilizadas

- Next.js 14
- TypeScript
- Tailwind CSS
- ESLint
- Prettier (configuração pendente)

## Requisitos

- Node.js 18.17 ou superior
- npm 9.x ou superior

## Como Iniciar

1. Clone o repositório:
```bash
git clone [url-do-repositorio]
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o servidor de desenvolvimento:
```bash
npm run dev
```

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria uma build de produção
- `npm run start` - Inicia o servidor de produção
- `npm run lint` - Executa a verificação de linting

## Estrutura do Projeto

```
src/
├── app/           # Rotas e layouts da aplicação
├── components/    # Componentes reutilizáveis
├── lib/          # Utilitários e configurações
└── styles/       # Arquivos de estilo global
```

## Convenções de Código

- Utilizamos TypeScript para type safety
- Seguimos as convenções do ESLint
- Componentes devem ser funcionais e utilizar hooks quando necessário
- Nomes de arquivos de componentes devem usar PascalCase
- Nomes de arquivos utilitários devem usar camelCase

## Ambiente de Desenvolvimento

O projeto está configurado com:
- TypeScript para type checking
- ESLint para linting
- Tailwind CSS para estilização
- Aliases de importação (@/*)

## Contribuição

1. Crie uma branch para sua feature
2. Faça commit das suas alterações
3. Faça push para a branch
4. Abra um Pull Request
