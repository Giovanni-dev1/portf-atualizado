# Giovanni Crescenzi Bogner — Portfólio

Portfólio pessoal de Giovanni Crescenzi Bogner. Next.js (App Router) + TypeScript,
CSS autoral com tokens (sem Tailwind), conteúdo centralizado e tipado.

Direção visual: "Dossiê de Operações Digitais" — layout editorial, grade de
12 colunas, fundo papel, acento vermelho-alaranjado e cobalto, tipografia
serifada expressiva (Fraunces) + sans humanista (IBM Plex Sans) + monoespaçada
para metadados (IBM Plex Mono).

## Desenvolvimento

```bash
npm install
npm run dev
```

Abra http://localhost:3000.

## Build de produção

```bash
npm run build
npm run start
```

## Qualidade

```bash
npm run lint       # ESLint
npx tsc --noEmit   # Typecheck
npm run build      # Build de produção (falha se houver erro de tipo ou de rota)
```

Todos os três comandos rodam limpos no estado atual do repositório.

## Estrutura do conteúdo

Todo o texto do site (exceto microcopy de interface) vive em
`content/portfolio.ts`, um arquivo TypeScript tipado. Para atualizar
qualquer informação — experiência, estudos de caso, habilidades, dados de
contato — edite esse arquivo; não é necessário tocar nos componentes.

Os estudos de caso ficam no array `caseStudies` e geram automaticamente as
rotas em `/projetos/[slug]` via `generateStaticParams`. Para adicionar um
novo caso, basta adicionar um objeto ao array — ele aparece na home e ganha
uma página própria sem nenhuma outra alteração.

## Imagens

O site não tem nenhuma imagem real embutida ainda. Onde uma imagem de
projeto ou foto de perfil seria esperada, a interface mostra um placeholder
editorial (`FIG. 0X — captura pendente`) em vez de inventar ou usar uma
imagem genérica.

Para adicionar imagens reais:

1. Coloque o arquivo em `public/` (ex.: `public/profile.webp`,
   `public/projetos/saldo-e-foco-01.webp`). Prefira AVIF ou WebP.
2. Defina `site.profileImageHref` em `content/portfolio.ts` para a foto de
   perfil, ou marque `hasRealImage: true` e adicione o caminho da imagem no
   objeto do estudo de caso correspondente.
3. Troque o placeholder pelo componente `next/image` na página afetada
   (`app/page.tsx` para a home, `app/projetos/[slug]/page.tsx` para o caso).

## Currículo em PDF

Quando houver um PDF real, coloque-o em `public/curriculo-giovanni-crescenzi-bogner.pdf`
e defina `site.resumeHref` em `content/portfolio.ts` com esse caminho. O
botão "Baixar currículo" no cabeçalho aparece automaticamente quando esse
campo está preenchido — hoje fica oculto porque não há PDF real fornecido.

## SEO

- Metadados por página (title, description, canonical) em cada `page.tsx`.
- Imagem Open Graph gerada dinamicamente em `app/opengraph-image.tsx` (via
  `next/og`), sem depender de arquivo externo.
- `app/robots.ts` e `app/sitemap.ts` geram `/robots.txt` e `/sitemap.xml`.
- JSON-LD do tipo `Person` em `app/layout.tsx`, com apenas dados públicos.
- Favicon com monograma em `app/icon.svg` (detectado automaticamente pelo
  Next.js).

**Antes de publicar**, troque o domínio de exemplo `giovannicrescenzi.com.br`
usado em `app/layout.tsx`, `app/robots.ts` e `app/sitemap.ts` pelo domínio
real do site.

## Acessibilidade

- Link "Pular para o conteúdo" no topo de toda página.
- Foco visível em todos os elementos interativos (`:focus-visible`).
- `prefers-reduced-motion` respeitado — animações de entrada e o menu móvel
  não animam quando o usuário pede redução de movimento.
- Paleta revisada para contraste WCAG AA: o vermelho-sinal usado como cor de
  fundo/borda (`--signal`) tem uma variante mais escura para texto
  (`--signal-text`, contraste 4.7:1 sobre o papel) — use `--signal-text`
  sempre que a cor for aplicada a texto normal.

## Deploy na Vercel

```bash
npx vercel
```

Ou conecte o repositório diretamente pelo painel da Vercel — não há banco de
dados nem variáveis de ambiente obrigatórias. O comando de build é
`next build`, gerenciado automaticamente pelo adaptador da Vercel.

## Pendências (dados que só Giovanni pode fornecer)

- Foto de perfil (`public/profile.webp`)
- PDF do currículo
- Capturas reais dos 4 estudos de caso (Saldo e Foco, Copiloto de
  Atendimento, Carreira em Evidência, Presença Digital)
- Imagens e link do Studio Uniq / outras landing pages do caso "Presença
  Digital para Negócios"
- Confirmação da data de conclusão da FATEC (hoje consta apenas "em
  andamento", por divergência nas informações anteriores)
- Nomes das duas entidades estudantis fundadas na FATEC (hoje descritas sem
  nome, incluindo a Atlética)
- Domínio real de produção (para substituir `giovannicrescenzi.com.br` nos
  metadados)
