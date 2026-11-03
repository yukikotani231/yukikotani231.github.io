import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Navigation from "../../components/Navigation";
import FadeIn from "../../components/FadeIn";
import { GitHubIcon } from "../../components/Icons";
import { categoryLabel, projectOrder, projects } from "@/lib/projects";

type Block =
  | { kind: "heading"; text: string }
  | { kind: "subheading"; text: string }
  | { kind: "list"; items: string[] }
  | { kind: "paragraph"; text: string };

const META_KEYS = ["期間", "役割", "チーム規模"];

/** longDescription のプレーンテキストを構造化ブロックとメタ情報に変換する */
function parseDescription(raw: string) {
  const blocks: Block[] = [];
  const meta: { key: string; value: string }[] = [];

  for (const line of raw.split("\n").map((l) => l.trim())) {
    if (!line) continue;
    const metaMatch = line.match(/^(.+?)：(.+)$/);
    if (metaMatch && META_KEYS.includes(metaMatch[1])) {
      meta.push({ key: metaMatch[1], value: metaMatch[2] });
    } else if (line.startsWith("- ")) {
      const last = blocks[blocks.length - 1];
      if (last?.kind === "list") last.items.push(line.slice(2));
      else blocks.push({ kind: "list", items: [line.slice(2)] });
    } else if (/^\d+\.\s/.test(line)) {
      blocks.push({ kind: "subheading", text: line });
    } else if (line.endsWith("：")) {
      blocks.push({ kind: "heading", text: line.slice(0, -1) });
    } else {
      blocks.push({ kind: "paragraph", text: line });
    }
  }
  return { blocks, meta };
}

export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects[slug];
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} — Yuki Kotani`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects[slug];
  if (!project) notFound();

  const { blocks, meta } = parseDescription(project.longDescription);
  const order = projectOrder as readonly string[];
  const nextSlug = order[(order.indexOf(slug) + 1) % order.length];
  const next = projects[nextSlug];

  return (
    <>
      <Navigation />
      <main className="mx-auto max-w-3xl px-6 pb-24 pt-32">
        <FadeIn>
          <Link
            href="/#works"
            className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
            Works に戻る
          </Link>
        </FadeIn>

        <FadeIn delay={0.05}>
          <header className="mt-10 border-b border-border pb-10">
            <p className="font-mono text-xs text-accent">{categoryLabel[project.category]}</p>
            <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
              {project.title}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {project.description}
            </p>

            <dl className="mt-8 grid grid-cols-2 gap-6 text-sm sm:grid-cols-3">
              <div>
                <dt className="font-mono text-xs text-muted-foreground">期間</dt>
                <dd className="mt-1">{project.date}</dd>
              </div>
              {meta
                .filter((m) => m.key !== "期間")
                .map((m) => (
                  <div key={m.key}>
                    <dt className="font-mono text-xs text-muted-foreground">{m.key}</dt>
                    <dd className="mt-1">{m.value}</dd>
                  </div>
                ))}
            </dl>

            <div className="mt-8 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-muted px-3 py-1 font-mono text-xs text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>

            {(project.github || project.demo) && (
              <div className="mt-8 flex flex-wrap gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-85"
                  >
                    <GitHubIcon />
                    Source
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
                  >
                    Live
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}
              </div>
            )}
          </header>
        </FadeIn>

        <FadeIn delay={0.1}>
          <article className="py-10 leading-loose text-muted-foreground">
            {blocks.map((b, i) => {
              switch (b.kind) {
                case "heading":
                  return (
                    <h2
                      key={i}
                      className="mb-4 mt-12 flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-foreground first:mt-0"
                    >
                      <span className="h-px w-6 bg-accent" />
                      {b.text}
                    </h2>
                  );
                case "subheading":
                  return (
                    <h3 key={i} className="mb-3 mt-8 text-lg font-semibold text-foreground">
                      {b.text}
                    </h3>
                  );
                case "list":
                  return (
                    <ul key={i} className="mb-6 space-y-2">
                      {b.items.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="mt-[0.9em] h-1 w-1 shrink-0 rounded-full bg-accent" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  );
                default:
                  return (
                    <p key={i} className="mb-6">
                      {b.text}
                    </p>
                  );
              }
            })}
          </article>
        </FadeIn>

        <FadeIn>
          <Link
            href={`/works/${nextSlug}`}
            className="group flex items-center justify-between gap-6 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-accent/50"
          >
            <div>
              <p className="font-mono text-xs text-muted-foreground">Next project</p>
              <p className="mt-1 font-semibold">{next.title}</p>
            </div>
            <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
          </Link>
        </FadeIn>
      </main>
    </>
  );
}
