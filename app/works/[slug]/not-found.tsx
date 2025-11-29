import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Project Not Found</h2>
        <p className="text-muted-foreground mb-8">
          お探しのプロジェクトが見つかりませんでした。
        </p>
        <Link
          href="/#works"
          className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors inline-block"
        >
          すべてのプロジェクトを見る
        </Link>
      </div>
    </div>
  );
}
