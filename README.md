# Landing Page — Miguel Mónica (CENTURY 21)

Página de captação de leads para avaliação gratuita de imóveis no Algarve.

## Comandos

Correr sempre dentro desta pasta (`casa-famalic`):

```sh
npm install        # instalar dependências (só na primeira vez)
npm run dev        # servidor local em http://localhost:8080
npm run build      # gerar versão de produção na pasta dist/
npm run deploy     # publicar a pasta dist/ no GitHub Pages
```

## Notas

- Os leads do formulário são enviados via Formspree (form `xyzpjqog`, configurado em `src/components/HeroSection.tsx`). O email de destino define-se no painel do Formspree.
- Stack: React + Vite + Tailwind (shadcn/ui).
