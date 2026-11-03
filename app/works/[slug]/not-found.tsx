import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <div className="text-center">
        <p className="font-mono text-sm text-accent">404</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">Project Not Found</h1>
        <p className="mt-4 text-muted-foreground">お探しのプロジェクトが見つかりませんでした。</p>
        <Link
          href="/#works"
          className="mt-8 inline-block rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-85"
        >
          Works に戻る
        </Link>
      </div>
    </div>
  );
}
