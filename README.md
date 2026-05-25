# Avestra Hub — Ferramentas de IA para Advogados

Site Next.js 14 com design system **Pulse Blue** (Dr. Wladmir Bonadio / Avestra).

## Stack

- **Next.js 14** (App Router)
- **React 18**
- **CSS Modules** — sem Tailwind
- **Fontes:** Inter + Bebas Neue (Google Fonts via `next/font`)

## Design System

| Token | Valor | Uso |
|-------|-------|-----|
| `--bg` | `#04080F` | Fundo principal |
| `--b1` | `#204080` | Azul Avestra / botões primários |
| `--b5` | `#90C0E0` | Destaques e links |
| `--n1` | `#E0E0D0` | Texto principal |
| `--accent` | `#f59e0b` | Ação / submit (âmbar) |

## Rodar localmente

```bash
npm install
npm run dev
```

Acesse: [http://localhost:3000](http://localhost:3000)

## Build e deploy

```bash
npm run build
npm start
```

Deploy via Vercel (ver skill `deploy`).

## Estrutura

```
app/
├── layout.js       ← Root layout (fontes, metadata, RevealProvider)
├── globals.css     ← Design system completo (CSS vars, animações, utilitários)
└── page.js         ← Composição das seções

components/
├── Nav.js / .css           ← Nav sticky
├── Marquee.js / .css       ← Ticker animado
├── Hero.js / .css          ← Seção hero
├── Problem.js / .css       ← Seção problema
├── Directory.js / .css     ← Diretório filtrável (Client Component)
├── Bridge.js / .css        ← Seção de transição
├── Skills.js / .css        ← Skills sob medida
├── Marketplace.js / .css   ← Planos e preços
├── FinalCTA.js / .css      ← CTA final
├── Footer.js / .css        ← Rodapé
├── WhatsAppFloat.js / .css ← Botão flutuante WhatsApp
└── RevealProvider.js       ← Scroll reveal (IntersectionObserver)

hooks/
└── useReveal.js    ← Hook para animações de entrada
```

---

*Avestra Tecnologia · Responsável: Jonas Guvito · Maio/2026*
