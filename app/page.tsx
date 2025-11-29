import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Yuki Kotani
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Software Engineer
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="#about"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              About Me
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-border rounded-lg hover:bg-accent transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
          <div className="prose dark:prose-invert mx-auto">
            <p className="text-lg text-muted-foreground">
              ソフトウェアエンジニアとして活動しています。
              詳細な経歴やスキルについては、以下のセクションをご覧ください。
            </p>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6">Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["React", "TypeScript", "Next.js", "Node.js", "Python", "Go", "Docker", "AWS"].map((skill) => (
                <div key={skill} className="p-4 border border-border rounded-lg text-center hover:bg-accent transition-colors">
                  {skill}
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-4 text-center">
              ※ 詳細なスキルセットは準備中です
            </p>
          </div>
        </div>
      </section>

      {/* Works Section */}
      <section id="works" className="py-20 px-4 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Works</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                id: "project-1",
                title: "Portfolio Site",
                description: "Next.js + Tailwind CSS で作成したポートフォリオサイト",
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
            ].map((project) => (
              <Link
                key={project.id}
                href={`/works/${project.id}`}
                className="block p-6 bg-white dark:bg-slate-800 border border-border rounded-lg hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex gap-2 flex-wrap">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Career Section */}
      <section id="career" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Career</h2>
          <div className="space-y-8">
            {[
              {
                year: "現在",
                title: "Software Engineer",
                company: "詳細は準備中",
                description: "ソフトウェア開発に従事",
              },
            ].map((job, index) => (
              <div key={index} className="flex gap-6 border-l-2 border-primary pl-6">
                <div className="min-w-[120px] text-muted-foreground">{job.year}</div>
                <div>
                  <h3 className="text-xl font-bold">{job.title}</h3>
                  <p className="text-muted-foreground mb-2">{job.company}</p>
                  <p>{job.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-8">Contact</h2>
          <p className="text-lg text-muted-foreground mb-8">
            お気軽にご連絡ください
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="https://github.com/yukikotani231"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-border rounded-lg hover:bg-accent transition-colors"
            >
              GitHub
            </a>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            その他の連絡先は準備中です
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Yuki Kotani. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
