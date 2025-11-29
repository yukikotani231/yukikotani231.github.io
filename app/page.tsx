import Link from "next/link";
import Navigation from "./components/Navigation";
import FadeIn from "./components/FadeIn";
import MouseFollower from "./components/MouseFollower";
import TiltCard from "./components/TiltCard";

export default function Home() {
  return (
    <>
      <MouseFollower />
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section
          id="hero"
          className="min-h-screen flex items-center justify-center relative overflow-hidden"
        >
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-950 dark:via-blue-950 dark:to-indigo-950">
            <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 dark:bg-yellow-900 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 dark:bg-pink-900 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          </div>

          <div className="container mx-auto px-4 text-center relative z-10">
            <FadeIn delay={0.2}>
              <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400">
                Yuki Kotani
              </h1>
            </FadeIn>
            <FadeIn delay={0.4}>
              <p className="text-2xl md:text-3xl text-slate-700 dark:text-slate-300 mb-12 font-light">
                Software Engineer
              </p>
            </FadeIn>
            <FadeIn delay={0.6}>
              <div className="flex gap-4 justify-center flex-wrap">
                <a
                  href="#about"
                  className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <span className="flex items-center gap-2">
                    About Me
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                </a>
                <a
                  href="#contact"
                  className="px-8 py-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm text-slate-900 dark:text-white border-2 border-slate-200 dark:border-slate-700 rounded-full font-medium hover:bg-white dark:hover:bg-slate-800 hover:scale-105 transition-all duration-300 shadow-md"
                >
                  Contact
                </a>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-32 px-4 bg-white dark:bg-slate-900">
          <div className="container mx-auto max-w-5xl">
            <FadeIn>
              <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400">
                About Me
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="prose dark:prose-invert mx-auto mb-20">
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 md:p-12 shadow-lg">
                  <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                    大学時代にOLIENT TECH株式会社、燈株式会社にてエンジニアのインターンを経験。OLINET TECH株式会社では運送業事業者向けの請求書作成アプリケーションの開発プロジェクトにバックエンドエンジニアとして参加し、その後SaaS化プロジェクトの立ち上げにも関与。燈株式会社ではDXソリューション事業部において図面データの構造化手法の研究開発業務に従事し、複数大手企業とのPoC案件にも参加。図面データ特化の機械学習モデルの提案や物体検出手法の開発を行なった。
                  </p>
                  <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                    2024年にAI SaaS事業部に異動し、建設業界向けの管理業務効率化SaaSの開発・運用にフルスタックエンジニアとして参加。新機能開発や不具合調査修正に加え、ドキュメント整備・CI/CDの効率化による開発生産性向上や監視ツールの導入によるサービスの安定性可視化などを行った。現在はテックリード的立場として、複数プロダクト全体の技術的な方向性の決定も兼任している。
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="mt-16">
                <h3 className="text-3xl font-bold mb-12 text-center">Skills</h3>

                {/* Programming Languages */}
                <div className="mb-12">
                  <h4 className="text-xl font-semibold mb-6 text-slate-900 dark:text-white">プログラミング言語</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      { name: "TypeScript", level: "⭐⭐⭐⭐⭐", desc: "バックエンド・フロントエンド双方で実務経験" },
                      { name: "JavaScript", level: "⭐⭐⭐⭐⭐", desc: "React, Node.jsで幅広く使用" },
                      { name: "Python", level: "⭐⭐⭐⭐", desc: "Django, アルゴリズム開発で使用" },
                    ].map((skill) => (
                      <FadeIn key={skill.name} delay={0.5}>
                        <div className="p-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl hover:shadow-lg transition-all duration-300">
                          <div className="font-semibold text-slate-900 dark:text-white mb-1">{skill.name}</div>
                          <div className="text-sm text-slate-600 dark:text-slate-400 mb-2">{skill.level}</div>
                          <div className="text-xs text-slate-500 dark:text-slate-500">{skill.desc}</div>
                        </div>
                      </FadeIn>
                    ))}
                  </div>
                </div>

                {/* Frontend */}
                <div className="mb-12">
                  <h4 className="text-xl font-semibold mb-6 text-slate-900 dark:text-white">フロントエンド</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {["React", "TypeScript", "Next.js", "Tailwind CSS", "React Native", "Expo"].map((skill, index) => (
                      <FadeIn key={skill} delay={0.5 + index * 0.05}>
                        <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 border border-blue-200 dark:border-blue-800 rounded-xl text-center hover:shadow-lg transition-all duration-300">
                          <span className="text-sm font-medium text-blue-900 dark:text-blue-200">{skill}</span>
                        </div>
                      </FadeIn>
                    ))}
                  </div>
                </div>

                {/* Backend */}
                <div className="mb-12">
                  <h4 className="text-xl font-semibold mb-6 text-slate-900 dark:text-white">バックエンド</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {["Node.js", "Express", "GraphQL", "PostgreSQL", "Prisma", "Django"].map((skill, index) => (
                      <FadeIn key={skill} delay={0.5 + index * 0.05}>
                        <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 border border-purple-200 dark:border-purple-800 rounded-xl text-center hover:shadow-lg transition-all duration-300">
                          <span className="text-sm font-medium text-purple-900 dark:text-purple-200">{skill}</span>
                        </div>
                      </FadeIn>
                    ))}
                  </div>
                </div>

                {/* Infrastructure */}
                <div className="mb-12">
                  <h4 className="text-xl font-semibold mb-6 text-slate-900 dark:text-white">インフラ・クラウド</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {["AWS", "Kubernetes", "Docker", "Terraform", "GitHub Actions", "Prometheus"].map((skill, index) => (
                      <FadeIn key={skill} delay={0.5 + index * 0.05}>
                        <div className="p-4 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/30 dark:to-teal-900/30 border border-emerald-200 dark:border-emerald-800 rounded-xl text-center hover:shadow-lg transition-all duration-300">
                          <span className="text-sm font-medium text-emerald-900 dark:text-emerald-200">{skill}</span>
                        </div>
                      </FadeIn>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Works Section */}
        <section
          id="works"
          className="py-32 px-4 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900"
        >
          <div className="container mx-auto max-w-7xl">
            <FadeIn>
              <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400">
                Works
              </h2>
            </FadeIn>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  id: "project-1",
                  title: "Portfolio Site",
                  description:
                    "Next.js + Tailwind CSS で作成したポートフォリオサイト",
                  tags: ["Next.js", "TypeScript", "Tailwind CSS"],
                },
                {
                  id: "project-2",
                  title: "Coming Soon",
                  description: "プロジェクト情報を準備中です",
                  tags: ["準備中"],
                },
                {
                  id: "project-3",
                  title: "Coming Soon",
                  description: "プロジェクト情報を準備中です",
                  tags: ["準備中"],
                },
              ].map((project, index) => (
                <FadeIn key={project.id} delay={0.1 + index * 0.1}>
                  <TiltCard>
                    <Link
                      href={`/works/${project.id}`}
                      className="group block h-full"
                    >
                      <div className="h-full p-8 bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 rounded-3xl hover:shadow-2xl hover:scale-[1.02] hover:border-purple-300 dark:hover:border-purple-700 transition-all duration-500 relative overflow-hidden">
                      {/* Gradient overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 transition-all duration-500 rounded-3xl"></div>

                      <div className="relative z-10">
                        <h3 className="text-2xl font-bold mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                          {project.description}
                        </p>
                        <div className="flex gap-2 flex-wrap">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/50 dark:to-purple-950/50 text-slate-700 dark:text-slate-300 text-sm rounded-full border border-slate-200/50 dark:border-slate-700/50"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Link>
                </TiltCard>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Career Section */}
        <section id="career" className="py-32 px-4 bg-white dark:bg-slate-900">
          <div className="container mx-auto max-w-4xl">
            <FadeIn>
              <h2 className="text-5xl md:text-6xl font-bold mb-20 text-center bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400">
                Career
              </h2>
            </FadeIn>
            <div className="space-y-12">
              {[
                {
                  period: "2024年1月 - 現在 【正社員】",
                  title: "フルスタックエンジニア",
                  company: "燈株式会社",
                  description:
                    "建設業界向けSaaS開発において、技術的意思決定と実行を主導。チーム全体の技術的健全性の維持と、プロダクト実現を担当。",
                  highlights: [
                    "複雑なデータ構造設計と実装",
                    "CI/CDパイプラインの改善と最適化",
                    "大規模システム改修の計画・実行",
                    "チーム開発・コードレビュー体制の確立",
                  ],
                },
                {
                  period: "2023年4月 - 2023年9月 【個人開発】",
                  title: "モバイルエンジニア",
                  company: "個人開発",
                  description:
                    "AI機能を統合したモバイルアプリケーション開発。企画から実装、デプロイまでを単独で完遂。",
                  highlights: [
                    "モバイルアプリ開発（React Native / Expo）",
                    "Firebase による認証・データベース構築",
                    "外部API連携",
                    "アプリストアへのリリース",
                  ],
                },
                {
                  period: "2022年7月 - 2024年3月 【インターン】",
                  title: "フルスタックエンジニア",
                  company: "燈株式会社",
                  description:
                    "建設業向けの技術開発に従事。アルゴリズム開発から各種システム構築まで、幅広い開発経験を積む。",
                  highlights: [
                    "複雑なアルゴリズムの研究開発",
                    "ベクターデータ処理と幾何学的解析",
                    "バックエンドシステムの設計・実装",
                    "業務効率化ツールの開発",
                  ],
                },
                {
                  period: "2022年8月 - 2022年11月 【インターン】",
                  title: "バックエンドエンジニア",
                  company: "OLIENT TECH株式会社",
                  description:
                    "3PL事業者向けの請求書作成補助アプリケーション開発に従事。バックエンドシステムの設計と実装を担当。",
                  highlights: [
                    "API設計・実装",
                    "データベース設計",
                    "集計ロジックの実装",
                    "業務効率化（手作業削減）",
                  ],
                },
              ].map((job, index) => (
                <FadeIn key={index} delay={0.2 + index * 0.1}>
                  <div className="flex gap-8 relative">
                    <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
                    <div className="absolute left-0 top-2 w-4 h-4 -ml-[7px] bg-gradient-to-br from-blue-500 to-purple-500 rounded-full shadow-lg"></div>
                    <div className="pl-10 flex-1">
                      <div className="text-sm font-semibold text-purple-600 dark:text-purple-400 mb-2">
                        {job.period}
                      </div>
                      <div className="p-6 bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl hover:shadow-lg transition-shadow">
                        <h3 className="text-2xl font-bold mb-2">{job.title}</h3>
                        <p className="text-slate-600 dark:text-slate-400 mb-4 font-medium">
                          {job.company}
                        </p>
                        <p className="text-slate-700 dark:text-slate-300 mb-4">
                          {job.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {job.highlights.map((highlight) => (
                            <span
                              key={highlight}
                              className="text-xs px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full"
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="py-32 px-4 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900"
        >
          <div className="container mx-auto max-w-4xl text-center">
            <FadeIn>
              <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400">
                Contact
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-xl text-slate-600 dark:text-slate-400 mb-12 leading-relaxed">
                お気軽にご連絡ください
              </p>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="flex gap-6 justify-center flex-wrap">
                <a
                  href="https://github.com/yukikotani231"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-8 py-4 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-slate-100 dark:to-slate-300 text-white dark:text-slate-900 rounded-full font-medium hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  GitHub
                </a>
              </div>
            </FadeIn>
            <FadeIn delay={0.6}>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-8">
                その他の連絡先は準備中です
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
          <div className="container mx-auto text-center">
            <p className="text-slate-600 dark:text-slate-400">
              &copy; {new Date().getFullYear()} Yuki Kotani. All rights
              reserved.
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
