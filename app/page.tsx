import Link from "next/link";
import Navigation from "./components/Navigation";
import FadeIn from "./components/FadeIn";

export default function Home() {
  return (
    <>
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
              <div className="prose dark:prose-invert mx-auto text-center mb-20">
                <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
                  ソフトウェアエンジニアとして活動しています。
                  <br />
                  詳細な経歴やスキルについては、以下のセクションをご覧ください。
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="mt-16">
                <h3 className="text-3xl font-bold mb-10 text-center">Skills</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    "React",
                    "TypeScript",
                    "Next.js",
                    "Node.js",
                    "Python",
                    "Go",
                    "Docker",
                    "AWS",
                  ].map((skill, index) => (
                    <FadeIn key={skill} delay={0.5 + index * 0.05}>
                      <div className="group p-6 bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl text-center hover:shadow-xl hover:scale-105 hover:border-purple-300 dark:hover:border-purple-700 transition-all duration-300 cursor-default">
                        <span className="text-lg font-medium bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                          {skill}
                        </span>
                      </div>
                    </FadeIn>
                  ))}
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-8 text-center">
                  ※ 詳細なスキルセットは準備中です
                </p>
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
                  year: "現在",
                  title: "Software Engineer",
                  company: "詳細は準備中",
                  description: "ソフトウェア開発に従事",
                },
              ].map((job, index) => (
                <FadeIn key={index} delay={0.2}>
                  <div className="flex gap-8 relative">
                    <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
                    <div className="absolute left-0 top-2 w-4 h-4 -ml-[7px] bg-gradient-to-br from-blue-500 to-purple-500 rounded-full shadow-lg"></div>
                    <div className="pl-10 flex-1">
                      <div className="min-w-[120px] text-sm font-semibold text-purple-600 dark:text-purple-400 mb-2">
                        {job.year}
                      </div>
                      <div className="p-6 bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl hover:shadow-lg transition-shadow">
                        <h3 className="text-2xl font-bold mb-2">{job.title}</h3>
                        <p className="text-slate-600 dark:text-slate-400 mb-2 font-medium">
                          {job.company}
                        </p>
                        <p className="text-slate-700 dark:text-slate-300">
                          {job.description}
                        </p>
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
