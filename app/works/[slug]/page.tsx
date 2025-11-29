import Link from "next/link";
import { notFound } from "next/navigation";
import Navigation from "../../components/Navigation";
import FadeIn from "../../components/FadeIn";

// プロジェクトデータ（後で外部ファイルに移動可能）
const projects = {
  "project-1": {
    title: "Portfolio Site",
    description: "Next.js + Tailwind CSS + shadcn/ui で作成したポートフォリオサイト",
    longDescription: `
      このポートフォリオサイトは、Create React AppからNext.jsへの移行プロジェクトとして作成しました。

      主な特徴：
      - Next.js 15 の静的エクスポート機能を使用
      - Tailwind CSS + shadcn/ui によるモダンなデザイン
      - レスポンシブ対応
      - GitHub Pages でホスティング

      技術的なポイント：
      - App Router を使用した最新のNext.js構成
      - 動的ルーティングでプロジェクト詳細ページを実装
      - Tailwind CSSのカスタムテーマ設定
    `,
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    github: "https://github.com/yukikotani231/yukikotani231.github.io",
    demo: "https://yukikotani231.github.io/",
    date: "2025年11月",
  },
  "project-2": {
    title: "RepoLens",
    description: "GitHub PR Review Tool - GitHub OAuthで認証し、プルリクエストを効率的にレビューするWebアプリケーション",
    longDescription: `
      GitHubユーザーがOAuth認証でログインし、アクセス可能なプルリクエストを一覧表示・詳細確認できるツールです。

      主な機能：
      - GitHub OAuth認証による安全なログイン
      - アクセス可能なすべてのプルリクエストの表示
      - コミット内容の変更を見やすく表示するDiff表示
      - PR内のレビューコメント確認

      技術的なポイント：
      - Next.js 15 (App Router) による最新の構成
      - TypeScriptを使用した型安全な開発
      - NextAuth.js v5 + GitHub OAuth による認証実装
      - Tailwind CSS によるモダンなUI/UX
      - GitHub REST API を活用したデータ取得
      - Vercel へのデプロイ構成
    `,
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "NextAuth.js", "GitHub API"],
    github: "https://github.com/yukikotani231/repolens",
    demo: undefined,
    date: "2025年11月",
  },
  "project-3": {
    title: "建設業向けバーティカルSaaS",
    description: "建設業界向けの管理業務効率化SaaS - 複雑なフォーム制御やデータ構造設計を採用した大規模プロダクト",
    longDescription: `
      建設業界向けの管理業務効率化SaaSの開発・運用プロジェクト。テックリード兼フルスタックエンジニアとして、新機能開発から既存システムの最適化まで幅広い業務を担当。

      主な成果：

      1. CI/CDパイプラインの抜本的改善
      - テスト並列実行化により、CI実行時間を30分から6分へと80%短縮
      - 開発チームのリリースサイクルを大幅に高速化

      2. 高度なデータ構造設計
      - 閉包テーブル(Closure Table)を用いた複雑なフォーム分岐機能を実装
      - チーム内最高難易度（ストーリーポイント基準）と評価された機能を完遂

      3. 計算ロジックの抜本的改善
      - トポロジカルソートを適用した計算エンジンを実装
      - バグ発生率を顕著に削減

      4. 大規模改修の計画的実行
      - 約10万行のコード変更を伴う経費精算サービスの仕様変更を、デグレなしで完遂
      - 大規模なコードベースに対する高い変更耐性を実証

      チーム規模：正社員7名、インターン生15名を含む総勢20名超
      期間：2024年1月〜現在

      技術スタック：
      - フロントエンド：React, TypeScript, Tailwind CSS
      - バックエンド：TypeScript, Node.js (Express), GraphQL, PostgreSQL (Prisma)
      - インフラ：AWS (EKS, RDS), Kubernetes (Flux), Prometheus, Grafana, Docker, Terraform
    `,
    tags: ["React", "TypeScript", "Node.js", "GraphQL", "PostgreSQL", "AWS", "Kubernetes"],
    github: undefined,
    demo: undefined,
    date: "2024年1月〜現在",
  },
};

type ProjectSlug = keyof typeof projects;

// 静的パスの生成
export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({
    slug: slug,
  }));
}

// メタデータの生成
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects[slug as ProjectSlug];

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Portfolio`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects[slug as ProjectSlug];

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navigation />
      <main className="min-h-screen py-20 px-4 bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="container mx-auto max-w-4xl">
        <FadeIn>
          <Link
            href="/#works"
            className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 mb-12 transition-colors group"
          >
            <svg
              className="w-5 h-5 group-hover:-translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Works
          </Link>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400">
              {project.title}
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400">{project.date}</p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="flex gap-2 flex-wrap mb-12">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/50 dark:to-purple-950/50 text-slate-700 dark:text-slate-300 rounded-full border border-slate-200 dark:border-slate-700 font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="p-8 md:p-12 bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-3xl border border-slate-200 dark:border-slate-700 shadow-2xl mb-12">
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-xl text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                {project.description}
              </p>
              <div className="text-slate-600 dark:text-slate-400 whitespace-pre-line leading-relaxed">
                {project.longDescription}
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="flex gap-4 mb-16 flex-wrap">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-slate-100 dark:to-slate-300 text-white dark:text-slate-900 rounded-full font-medium hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                View on GitHub
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm text-slate-900 dark:text-white border-2 border-slate-200 dark:border-slate-700 rounded-full font-medium hover:bg-white dark:hover:bg-slate-800 hover:scale-105 transition-all duration-300 shadow-md flex items-center gap-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                Live Demo
              </a>
            )}
          </div>
        </FadeIn>

        <FadeIn delay={0.5}>
          <div className="pt-12 border-t border-slate-200 dark:border-slate-800">
            <Link
              href="/#works"
              className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors group font-medium"
            >
              <svg
                className="w-5 h-5 group-hover:-translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              すべてのプロジェクトを見る
            </Link>
          </div>
        </FadeIn>
      </div>
    </main>
    </>
  );
}
