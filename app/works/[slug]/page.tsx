import Link from "next/link";
import { notFound } from "next/navigation";

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
    title: "Coming Soon",
    description: "プロジェクト情報を準備中です",
    longDescription: `
      このプロジェクトの詳細は現在準備中です。
      後日追加予定です。
    `,
    tags: ["準備中"],
    github: undefined,
    demo: undefined,
    date: "準備中",
  },
  "project-3": {
    title: "Coming Soon",
    description: "プロジェクト情報を準備中です",
    longDescription: `
      このプロジェクトの詳細は現在準備中です。
      後日追加予定です。
    `,
    tags: ["準備中"],
    github: undefined,
    demo: undefined,
    date: "準備中",
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
    <main className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <Link
          href="/#works"
          className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          ← Back to Works
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
        <p className="text-muted-foreground mb-6">{project.date}</p>

        <div className="flex gap-2 flex-wrap mb-8">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="prose dark:prose-invert max-w-none mb-8">
          <p className="text-lg">{project.description}</p>
          <div className="whitespace-pre-line">{project.longDescription}</div>
        </div>

        <div className="flex gap-4 mb-12">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              View on GitHub
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-border rounded-lg hover:bg-accent transition-colors"
            >
              Live Demo
            </a>
          )}
        </div>

        <div className="border-t border-border pt-8">
          <Link
            href="/#works"
            className="text-primary hover:underline"
          >
            ← すべてのプロジェクトを見る
          </Link>
        </div>
      </div>
    </main>
  );
}
