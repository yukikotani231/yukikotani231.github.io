# yukikotani231.github.io

Yuki Kotani のポートフォリオサイト — https://yukikotani231.github.io/

## Stack

- Next.js 16 (App Router, static export) / React 19
- TypeScript / Tailwind CSS v4 / Motion
- pnpm / ESLint 10 (flat config)
- GitHub Actions → GitHub Pages

## Development

```bash
corepack enable   # package.json の packageManager に従って pnpm を有効化
pnpm install
pnpm dev          # http://localhost:3000
pnpm lint
pnpm typecheck
pnpm build        # out/ に静的ファイルを出力
```

`main` への push で GitHub Actions が自動でビルド・デプロイします。
