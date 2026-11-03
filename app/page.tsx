import Link from "next/link";
import { ArrowRight, ArrowUpRight, Mail } from "lucide-react";
import Navigation from "./components/Navigation";
import FadeIn from "./components/FadeIn";
import { GitHubIcon } from "./components/Icons";
import { categoryLabel, projectOrder, projects } from "@/lib/projects";

const EMAIL = "kotani.yuki.231@gmail.com";
const GITHUB = "https://github.com/yukikotani231";

const highlights = [
  { value: "80%", label: "CI実行時間を短縮", note: "30分 → 6分" },
  { value: "10万行", label: "大規模改修をリリース", note: "デグレなし" },
  { value: "20名+", label: "規模のチームで開発", note: "テックリード" },
  { value: "11,000+", label: "GitHub contributions", note: "@yukikotani231" },
];

const experiences = [
  {
    period: "2025.03 — 現在",
    type: "正社員",
    title: "テックリード / フルスタックエンジニア",
    company: "燈株式会社",
    description:
      "建設業向けエンタープライズSaaSの開発・運用。複数プロダクトの技術的意思決定と開発生産性の向上をリード。",
    highlights: [
      "テスト並列化でCI/CDを30分→6分に短縮（80%削減）",
      "閉包テーブルを用いたフォーム分岐機能など、チーム最高難易度の機能を完遂",
      "約10万行の変更を伴う大規模改修をデグレなしでリリース",
    ],
  },
  {
    period: "2022.07 — 2024.03",
    type: "インターン",
    title: "アルゴリズムエンジニア / フルスタックエンジニア",
    company: "燈株式会社",
    description:
      "CAD図面などベクターデータの構造化アルゴリズムを研究開発。複数企業とのPoC案件に参画。",
    highlights: [
      "グラフのサイクル検出を応用した堅牢な領域検出",
      "設定ファイル駆動のパターン認識で非定型データを抽出",
    ],
  },
  {
    period: "2022.08 — 2022.11",
    type: "インターン",
    title: "バックエンドエンジニア",
    company: "OLIENT TECH株式会社",
    description:
      "3PL事業者向け請求書作成補助アプリケーションのバックエンドを設計・実装。",
    highlights: ["月次請求書作成の手作業工数を90%以上削減"],
  },
];

const skills = [
  { group: "Languages", items: ["TypeScript", "JavaScript", "Python"] },
  { group: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "React Native", "Expo"] },
  { group: "Backend", items: ["Node.js", "Express", "GraphQL", "PostgreSQL", "Prisma", "Django"] },
  {
    group: "Infrastructure",
    items: ["AWS", "Kubernetes", "Docker", "Terraform", "GitHub Actions", "Prometheus"],
  },
];

function SectionHeading({ index, title }: { index: string; title: string }) {
  return (
    <FadeIn className="mb-12 flex items-baseline gap-4">
      <span className="font-mono text-sm text-accent">{index}</span>
      <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">{title}</h2>
      <span className="h-px flex-1 translate-y-[-0.35rem] bg-border" />
    </FadeIn>
  );
}

export default function Home() {
  const [featuredSlug, ...otherSlugs] = projectOrder;
  const featured = projects[featuredSlug];

  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section id="hero" className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-dots mask-fade" />
          <div className="pointer-events-none absolute left-1/2 top-[-12rem] h-[28rem] w-[48rem] -translate-x-1/2 rounded-full bg-accent/15 blur-3xl dark:bg-accent/10" />

          <div className="relative mx-auto flex min-h-[92vh] max-w-5xl flex-col justify-center px-6 pb-20 pt-32">
            <FadeIn>
              <a
                href="#experience"
                className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1 text-xs text-muted-foreground backdrop-blur-sm transition-colors hover:text-foreground"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                燈株式会社でエンタープライズSaaSを開発中
              </a>
            </FadeIn>

            <FadeIn delay={0.05}>
              <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl md:text-8xl">
                Yuki Kotani
              </h1>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="mt-6 font-mono text-sm text-muted-foreground sm:text-base">
                Fullstack Engineer <span className="text-accent">/</span> Tech Lead{" "}
                <span className="text-accent">/</span> Problem Solver
              </p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
                エンタープライズSaaSの
                <span className="text-foreground">複雑な技術課題</span>
                を解くエンジニア。開発生産性の向上と大規模改修を通じて、プロダクト全体の成長をリードしています。
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <a
                  href="#works"
                  className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-85"
                >
                  Works を見る
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href={GITHUB}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
                >
                  <GitHubIcon />
                  GitHub
                </a>
                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
                >
                  <Mail className="h-4 w-4" />
                  Email
                </a>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Highlights */}
        <section className="border-y border-border bg-card/50">
          <div className="mx-auto grid max-w-5xl grid-cols-2 md:grid-cols-4">
            {highlights.map((h, i) => (
              <FadeIn
                key={h.label}
                delay={i * 0.05}
                className={`px-6 py-8 ${i % 2 === 1 ? "border-l border-border" : ""} ${
                  i >= 2 ? "border-t border-border md:border-t-0" : ""
                } ${i === 2 ? "md:border-l" : ""}`}
              >
                <div className="text-3xl font-semibold tracking-tight md:text-4xl">{h.value}</div>
                <div className="mt-2 text-sm">{h.label}</div>
                <div className="mt-1 font-mono text-xs text-muted-foreground">{h.note}</div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* About */}
        <section id="about" className="mx-auto max-w-5xl px-6 py-24 md:py-32">
          <SectionHeading index="01" title="About" />
          <div className="grid gap-12 md:grid-cols-[1fr_16rem]">
            <FadeIn className="space-y-6 text-base leading-loose text-muted-foreground md:text-lg">
              <p>
                現在は<span className="text-foreground">燈株式会社</span>
                で、建設業向けエンタープライズSaaSの開発・運用を担当しています。CI/CDの最適化、閉包テーブルやトポロジカルソートを用いたデータ構造・計算ロジックの設計、10万行規模の改修など、難易度の高い課題に向き合ってきました。
              </p>
              <p>
                インターン時代にはCADデータを構造化するアルゴリズムの研究開発に携わり、論文や既存ライブラリに答えがない問題を自分で設計して解く経験を積みました。フロントエンドからインフラ、アルゴリズムまで、領域をまたいで「動くもの」を届けることが好きです。
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Focus
              </h3>
              <ul className="space-y-3 text-sm">
                {[
                  "フルスタック開発",
                  "データベース設計",
                  "DevOps / インフラ",
                  "アルゴリズム開発",
                  "技術リーダーシップ",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="h-px w-4 bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="mx-auto max-w-5xl px-6 py-24 md:py-32">
          <SectionHeading index="02" title="Experience" />
          <ol className="space-y-4">
            {experiences.map((job, i) => (
              <FadeIn key={job.period} delay={i * 0.05}>
                <li className="grid gap-2 rounded-2xl p-6 transition-colors hover:bg-card md:grid-cols-[11rem_1fr] md:gap-8 md:p-8">
                  <div className="font-mono text-xs text-muted-foreground md:pt-1.5">
                    <div>{job.period}</div>
                    <div className="mt-1 text-accent">{job.type}</div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{job.title}</h3>
                    <p className="text-sm text-muted-foreground">{job.company}</p>
                    <p className="mt-4 leading-relaxed text-muted-foreground">{job.description}</p>
                    <ul className="mt-4 space-y-2 text-sm">
                      {job.highlights.map((h) => (
                        <li key={h} className="flex gap-3">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </FadeIn>
            ))}
          </ol>
        </section>

        {/* Works */}
        <section id="works" className="mx-auto max-w-5xl px-6 py-24 md:py-32">
          <SectionHeading index="03" title="Works" />

          <FadeIn>
            <Link
              href={`/works/${featuredSlug}`}
              className="group relative mb-6 block overflow-hidden rounded-3xl border border-border bg-card p-8 transition-colors hover:border-accent/50 md:p-12"
            >
              <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
              <div className="relative">
                <div className="flex items-center justify-between font-mono text-xs text-muted-foreground">
                  <span>
                    <span className="text-accent">Featured</span> · {categoryLabel[featured.category]}
                  </span>
                  <span>{featured.date}</span>
                </div>
                <h3 className="mt-6 text-2xl font-semibold tracking-tight md:text-4xl">
                  {featured.title}
                </h3>
                <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
                  {featured.description}
                </p>
                <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
                  <div className="flex flex-wrap gap-2">
                    {featured.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-muted px-3 py-1 font-mono text-xs text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-sm font-medium">
                    詳しく見る
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </div>
            </Link>
          </FadeIn>

          <div className="grid gap-6 md:grid-cols-2">
            {otherSlugs.map((slug, i) => {
              const p = projects[slug];
              return (
                <FadeIn key={slug} delay={(i % 2) * 0.05}>
                  <Link
                    href={`/works/${slug}`}
                    className="group flex h-full flex-col rounded-3xl border border-border bg-card p-8 transition-colors hover:border-accent/50"
                  >
                    <div className="flex items-center justify-between font-mono text-xs text-muted-foreground">
                      <span>{categoryLabel[p.category]}</span>
                      <ArrowUpRight className="h-4 w-4 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                    </div>
                    <h3 className="mt-6 text-xl font-semibold tracking-tight">{p.title}</h3>
                    <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {p.description}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-muted-foreground">
                      {p.tags.slice(0, 4).map((tag) => (
                        <span key={tag}>#{tag}</span>
                      ))}
                    </div>
                  </Link>
                </FadeIn>
              );
            })}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="mx-auto max-w-5xl px-6 py-24 md:py-32">
          <SectionHeading index="04" title="Skills" />
          <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
            {skills.map((s, i) => (
              <FadeIn key={s.group} delay={i * 0.05} className="bg-background p-6 md:p-8">
                <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {s.group}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {s.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-border px-2.5 py-1 text-sm transition-colors hover:border-accent/60 hover:text-accent"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mx-auto max-w-5xl px-6 py-24 md:py-32">
          <SectionHeading index="05" title="Contact" />
          <FadeIn>
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-8 py-16 text-center md:py-24">
              <div className="pointer-events-none absolute inset-0 bg-dots mask-fade opacity-60" />
              <div className="relative">
                <p className="text-3xl font-semibold tracking-tight md:text-5xl">
                  お気軽にご連絡ください。
                </p>
                <p className="mx-auto mt-4 max-w-md text-muted-foreground">
                  お仕事のご相談、技術の話、カジュアルな雑談まで歓迎です。
                </p>
                <div className="mt-10 flex flex-wrap justify-center gap-3">
                  <a
                    href={`mailto:${EMAIL}`}
                    className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-85"
                  >
                    <Mail className="h-4 w-4" />
                    {EMAIL}
                  </a>
                  <a
                    href={GITHUB}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-muted"
                  >
                    <GitHubIcon />
                    @yukikotani231
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-6 py-8 font-mono text-xs text-muted-foreground sm:flex-row">
          <span>© {new Date().getFullYear()} Yuki Kotani</span>
          <span>Built with Next.js & Tailwind CSS</span>
        </div>
      </footer>
    </>
  );
}
