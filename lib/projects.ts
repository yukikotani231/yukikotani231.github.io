export type ProjectCategory = "professional" | "research" | "personal";

export type Project = {
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  date: string;
  category: ProjectCategory;
  github?: string;
  demo?: string;
};

export const projects: Record<string, Project> = {
  "project-1": {
    category: "personal",
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
    category: "personal",
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
    date: "2025年11月",
  },
  "project-3": {
    category: "professional",
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
    date: "2024年1月〜現在",
  },
  "project-4": {
    category: "personal",
    title: "画像生成AI統合型SNSアプリケーション",
    description: "モバイルプラットフォーム向けに画像生成AI機能とSNS機能を統合したアプリケーション。企画、開発、リリースまでを単独で実行。",
    longDescription: `
      共同企画に基づき、モバイルプラットフォーム向けに画像生成AI機能とSNS機能を統合したアプリケーションを、企画、開発、リリースまで単独で実行したプロジェクト。

      主な実績：

      1. モバイルアプリケーション開発の迅速な習得と実現
      - プロジェクト開始時点でモバイル開発経験が不足していた状況から、React Native/Expoを採用
      - 既存のWeb開発知識を応用することで、短期間でモバイルアプリケーション開発手法を習得
      - 画面遷移、状態管理、コンポーネント設計の基本構造を確立
      - ユーザーが円滑に利用できるプロダクトを短期間で実現

      2. クラウドインフラストラクチャの設計とAI連携
      - Firebase を採用し、認証（Authentication）とデータベース（Firestore）を一元化
      - Firestore における投稿データのリアルタイム同期を実装
      - SNS に必要となるデータ構造（コレクション/ドキュメント）を適切に設計
      - ユーザーの入力プロンプトに基づき画像を生成するため、Hugging Face API と連携

      3. プロダクト全体の統括管理
      - 企画立案から実装、そしてアプリケーションストアへのリリースまでを一貫して単独で完遂
      - プロジェクトの工数管理、およびモバイル特有の技術的課題（ビルドプロセス、API連携）をすべて自己解決
      - プロダクト開発に対する高い熱意と、開発の全工程を俯瞰できる総合的な実行能力を実証

      期間：2023年4月〜2023年9月

      技術スタック：
      - モバイルアプリケーション：React Native, Expo
      - バックエンド/インフラストラクチャ：Firebase (Authentication, Firestore Database)
      - AI連携：Hugging Face API
    `,
    tags: ["React Native", "Expo", "Firebase", "Hugging Face API"],
    date: "2023年4月〜2023年9月",
  },
  "project-5": {
    category: "research",
    title: "3PL事業者向け請求書作成補助アプリケーション",
    description: "3PL事業向けの月次請求書作成業務の自動化。手作業による煩雑な集計作業とヒューマンエラーを削減するシステム開発。",
    longDescription: `
      3PL（サードパーティ・ロジスティクス）事業者の月次請求書作成業務において、手作業による煩雑な集計作業およびそれに伴うヒューマンエラーを削減するためのシステム開発プロジェクト。

      主な成果：

      1. 月次請求書作成工数の劇的な削減
      - 課題：膨大な量の運送データから、顧客別、期間別に複雑な計算ルールに基づいて請求額を集計する作業が人手によるExcel作業に依存
      - 解決策：Python/Djangoを用いて、取引データを取り込み、事前に設定された計算ロジックに基づき正確な請求内訳を自動生成するバックエンド機能を設計・実装
      - 成果：月次請求書作成にかかる手作業工数を90%以上削減
      - 業務の安定化、エラーの根絶、担当者の工数削減に直接的に寄与

      2. 開発プロセスの習得
      - 本格的なソフトウェア開発プロジェクトとしての最初の経験
      - 要件ヒアリング、設計、実装、テスト、デプロイといった一連の開発フローの基礎を体系的に習得
      - チーム2名での協働開発経験

      期間：2022年8月〜2022年11月
      チーム規模：2名

      技術スタック：
      - 言語：Python
      - フレームワーク：Django
      - データベース：PostgreSQL
    `,
    tags: ["Python", "Django", "PostgreSQL"],
    date: "2022年8月〜2022年11月",
  },
  "project-6": {
    category: "research",
    title: "CADデータ解析・アルゴリズム研究開発",
    description: "ベクター形式のデータから意図した情報を自動で抽出・構造化するアルゴリズムの研究開発。複数企業とのPoC案件に参画。",
    longDescription: `
      ベクター形式のデータを解析し、自動的に情報を抽出・構造化するための高度なアルゴリズムの研究開発プロジェクト。複数の企業とのPoC（実証実験）に参画し、実務的なシステム構築を通じて学習。

      主な実績：

      1. グラフアルゴリズムを用いた領域検出
      - 複雑に交差するベクター要素から、特定の領域を正確かつ効率的に抽出
      - グラフ理論のサイクル検出アルゴリズムを応用し、従来のヒューリスティックな手法より堅牢な実装を実現
      - 処理速度と精度の両立を達成

      2. パターン認識による非定型データの抽出
      - 一定の形式を持たないベクターデータから、設定ファイルに基づいて必要な情報を柔軟に抽出
      - パターンマッチングロジックを外部設定化し、コード変更なしに新たなパターンに対応可能な実装
      - 高い拡張性と保守性を確保

      3. 独自アルゴリズムの開発
      - 既存のライブラリや学術論文に実装例がない課題に対して、独自のアプローチを設計・実装
      - 複雑な形状認識をベクター要素の相対的な関係性として定義し、パターン探索ロジックを実装
      - 前処理時間を大幅に削減し、プロダクションでの実用性を向上

      期間：2022年7月〜2024年3月
      役割：アルゴリズムエンジニア

      技術スタック：
      - 言語：Python
      - ライブラリ：幾何学処理ライブラリ、グラフアルゴリズム関連
    `,
    tags: ["Python", "アルゴリズム", "グラフアルゴリズム", "パターン認識"],
    date: "2022年7月〜2024年3月",
  },
};

export const projectOrder = [
  "project-3",
  "project-6",
  "project-5",
  "project-2",
  "project-4",
  "project-1",
] as const;

export const categoryLabel: Record<ProjectCategory, string> = {
  professional: "Professional",
  research: "Internship / R&D",
  personal: "Personal",
};
