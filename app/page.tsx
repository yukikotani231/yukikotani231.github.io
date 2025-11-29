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
              <p className="text-2xl md:text-3xl text-slate-700 dark:text-slate-300 mb-4 font-light">
                Fullstack Engineer / Tech Lead
              </p>
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-12 font-light">
                開発生産性向上とチーム成長を実現するテックリード。<br />
                複雑な技術課題の解決から組織づくりまで、プロダクト全体の成長を主導。
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

            {/* Career Summary */}
            <FadeIn delay={0.2}>
              <div className="grid md:grid-cols-3 gap-6 mb-20">
                {[
                  {
                    period: "2024～",
                    role: "正社員",
                    title: "ソフトウェアエンジニア",
                    company: "燈株式会社",
                    desc: "SaaS基盤の開発・最適化とアーキテクチャ設計",
                  },
                  {
                    period: "2022-2024",
                    role: "インターン",
                    title: "アルゴリズムエンジニア",
                    company: "燈株式会社",
                    desc: "図面データ構造化技術の研究開発",
                  },
                  {
                    period: "2022-2023",
                    role: "インターン",
                    title: "バックエンドエンジニア",
                    company: "OLIENT TECH",
                    desc: "請求書自動化システムの開発",
                  },
                ].map((item, index) => (
                  <FadeIn key={item.period} delay={0.3 + index * 0.1}>
                    <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-750 rounded-2xl p-6 text-center border border-slate-200 dark:border-slate-700">
                      <div className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2">{item.period}</div>
                      <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{item.title}</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-500 mb-2">{item.role}</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">{item.company}</p>
                      <p className="text-sm text-slate-700 dark:text-slate-300">{item.desc}</p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </FadeIn>

            {/* About Me Text */}
            <FadeIn delay={0.5}>
              <div className="prose dark:prose-invert mx-auto mb-20">
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 md:p-12 shadow-lg">
                  <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                    大学時代にOLIENT TECH株式会社、燈株式会社にてエンジニアのインターンを経験。OLIENT TECH では運送業事業者向けの請求書作成アプリケーション開発に従事。燈株式会社では図面データの構造化手法の研究開発業務に従事し、複数大手企業とのPoC案件に参加。
                  </p>
                  <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                    2024年に正社員として燈株式会社AI SaaS事業部に配置。建設業向けバーティカルSaaSの開発・運用に従事。新機能開発やCI/CD最適化（30分→6分に短縮）、チーム技術指導を担当。現在はテックリードとして複数プロダクト全体の技術的な方向性を統括。
                  </p>
                  <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                    <strong>得意領域：</strong>フルスタック開発（React/Next.js、Node.js/Express、GraphQL）、データベース設計、DevOps/インフラ、アルゴリズム開発、チーム技術リーダーシップ
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

            {/* Professional Projects */}
            <div className="mb-20">
              <FadeIn>
                <h3 className="text-3xl font-bold mb-12 text-slate-900 dark:text-white border-l-4 border-blue-500 pl-4">
                  📌 Professional Projects
                </h3>
              </FadeIn>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    id: "project-3",
                    title: "建設業向けバーティカルSaaS",
                    description: "建設業界向けの管理業務効率化SaaS - 複雑なフォーム制御やデータ構造設計を採用した大規模プロダクト",
                    tags: ["React", "TypeScript", "Node.js", "GraphQL", "PostgreSQL", "AWS", "Kubernetes"],
                  },
                ].map((project, index) => (
                  <FadeIn key={project.id} delay={0.1 + index * 0.1}>
                    <TiltCard>
                      <Link
                        href={`/works/${project.id}`}
                        className="group block h-full"
                      >
                        <div className="h-full min-h-[400px] flex flex-col p-8 bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 rounded-3xl hover:shadow-2xl hover:scale-[1.02] hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-500 relative overflow-hidden">
                        {/* Gradient overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-500/0 group-hover:from-blue-500/5 group-hover:to-blue-500/5 transition-all duration-500 rounded-3xl"></div>

                        <div className="relative z-10 flex flex-col h-full">
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                              {project.title}
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
                              {project.description}
                            </p>
                          </div>
                          <div className="flex gap-2 flex-wrap mt-auto pt-6">
                            {project.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-4 py-2 bg-gradient-to-r from-blue-50 to-blue-50 dark:from-blue-950/50 dark:to-blue-950/50 text-blue-700 dark:text-blue-300 text-sm rounded-full border border-blue-200/50 dark:border-blue-700/50"
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

            {/* Internship & Research */}
            <div className="mb-20">
              <FadeIn>
                <h3 className="text-3xl font-bold mb-12 text-slate-900 dark:text-white border-l-4 border-purple-500 pl-4">
                  🎓 Internship & Research
                </h3>
              </FadeIn>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    id: "project-6",
                    title: "CADデータ解析・アルゴリズム研究開発",
                    description: "ベクター形式のデータから意図した情報を自動で抽出・構造化するアルゴリズムの研究開発。複数企業とのPoC案件に参画。",
                    tags: ["Python", "アルゴリズム", "グラフアルゴリズム", "パターン認識"],
                  },
                  {
                    id: "project-5",
                    title: "3PL事業者向け請求書作成補助アプリケーション",
                    description: "3PL事業向けの月次請求書作成業務の自動化。手作業による煩雑な集計作業とヒューマンエラーを削減するシステム開発。",
                    tags: ["Python", "Django", "PostgreSQL"],
                  },
                ].map((project, index) => (
                  <FadeIn key={project.id} delay={0.1 + index * 0.1}>
                    <TiltCard>
                      <Link
                        href={`/works/${project.id}`}
                        className="group block h-full"
                      >
                        <div className="h-full min-h-[400px] flex flex-col p-8 bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 rounded-3xl hover:shadow-2xl hover:scale-[1.02] hover:border-purple-300 dark:hover:border-purple-700 transition-all duration-500 relative overflow-hidden">
                        {/* Gradient overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-purple-500/0 group-hover:from-purple-500/5 group-hover:to-purple-500/5 transition-all duration-500 rounded-3xl"></div>

                        <div className="relative z-10 flex flex-col h-full">
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                              {project.title}
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
                              {project.description}
                            </p>
                          </div>
                          <div className="flex gap-2 flex-wrap mt-auto pt-6">
                            {project.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-4 py-2 bg-gradient-to-r from-purple-50 to-purple-50 dark:from-purple-950/50 dark:to-purple-950/50 text-purple-700 dark:text-purple-300 text-sm rounded-full border border-purple-200/50 dark:border-purple-700/50"
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

            {/* Personal Projects & Tools */}
            <div>
              <FadeIn>
                <h3 className="text-3xl font-bold mb-12 text-slate-900 dark:text-white border-l-4 border-emerald-500 pl-4">
                  🛠️ Personal Projects & Tools
                </h3>
              </FadeIn>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    id: "project-2",
                    title: "RepoLens",
                    description: "GitHub PR Review Tool - GitHub OAuthで認証し、プルリクエストを効率的にレビューするWebアプリケーション",
                    tags: ["Next.js", "TypeScript", "Tailwind CSS", "NextAuth.js", "GitHub API"],
                  },
                  {
                    id: "project-4",
                    title: "画像生成AI統合型SNSアプリケーション",
                    description: "モバイルプラットフォーム向けに画像生成AI機能とSNS機能を統合したアプリケーション。企画、開発、リリースまでを単独で実行。",
                    tags: ["React Native", "Expo", "Firebase", "Hugging Face API"],
                  },
                  {
                    id: "project-1",
                    title: "Portfolio Site",
                    description:
                      "Next.js + Tailwind CSS で作成したポートフォリオサイト",
                    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
                  },
                ].map((project, index) => (
                  <FadeIn key={project.id} delay={0.1 + index * 0.1}>
                    <TiltCard>
                      <Link
                        href={`/works/${project.id}`}
                        className="group block h-full"
                      >
                        <div className="h-full min-h-[400px] flex flex-col p-8 bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 rounded-3xl hover:shadow-2xl hover:scale-[1.02] hover:border-emerald-300 dark:hover:border-emerald-700 transition-all duration-500 relative overflow-hidden">
                        {/* Gradient overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-emerald-500/0 group-hover:from-emerald-500/5 group-hover:to-emerald-500/5 transition-all duration-500 rounded-3xl"></div>

                        <div className="relative z-10 flex flex-col h-full">
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                              {project.title}
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
                              {project.description}
                            </p>
                          </div>
                          <div className="flex gap-2 flex-wrap mt-auto pt-6">
                            {project.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-4 py-2 bg-gradient-to-r from-emerald-50 to-emerald-50 dark:from-emerald-950/50 dark:to-emerald-950/50 text-emerald-700 dark:text-emerald-300 text-sm rounded-full border border-emerald-200/50 dark:border-emerald-700/50"
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
                  title: "テックリード / フルスタックエンジニア",
                  company: "燈株式会社",
                  description:
                    "建設業向けSaaS開発・運用。正社員7名＋インターン15名の20名超チームを技術統括。",
                  highlights: [
                    "CI/CDパイプライン最適化: 30分→6分に短縮（80%削減）",
                    "複雑なアルゴリズム設計（閉包テーブル）で最高難易度機能を完遂",
                    "10万行コード変更を伴う大規模改修を無デグレでリリース",
                    "複数プロダクト全体の技術的意思決定と開発生産性向上",
                  ],
                },
                {
                  period: "2022年7月 - 2024年3月 【インターン】",
                  title: "アルゴリズムエンジニア/フルスタックエンジニア",
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
              <div className="grid md:grid-cols-2 gap-6 mb-12 max-w-2xl mx-auto">
                <a
                  href="https://github.com/yukikotani231"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-6 bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 rounded-2xl hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-lg transition-all duration-300 text-center"
                >
                  <svg
                    className="w-8 h-8 mx-auto mb-3 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-1">GitHub</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">@yukikotani231</p>
                </a>
                <a
                  href="mailto:contact@yukikotani.dev"
                  className="group p-6 bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 rounded-2xl hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-lg transition-all duration-300 text-center"
                >
                  <svg
                    className="w-8 h-8 mx-auto mb-3 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Email</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 break-all">contact@yukikotani.dev</p>
                </a>
              </div>
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
