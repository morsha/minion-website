# E-Commerce Platform (Minion Website)

這是一個基於 **Next.js 15** 全端架構的電商平台專案，採用 **Shu-Han Agentic AI Framework** 進行開發治理。

## 🏗️ 技術架構 (Architecture)

本專案採用 Monorepo 風格的單體式全端架構：

- **Frontend**: Next.js 15 (App Router), React 19, Tailwind CSS, Shadcn/UI
- **Backend**: Next.js Server Actions (API Layer)
- **Database**: PostgreSQL (via Docker), Prisma ORM
- **Language**: TypeScript

### 目錄結構
- `app/`: Next.js App Router 頁面與 API (Server Actions)
- `components/`: React UI 元件
- `prisma/`: 資料庫 Schema 與 Seed 腳本
- `scripts/`: 自動化測試與維運腳本
- `docker-compose.yml`: 本地開發環境配置

## 🚀 快速開始 (Getting Started)

### 1. 環境準備
確保已安裝以下工具：
- Node.js (>= 20.9.0)
- Docker & Docker Compose

### 2. 安裝依賴
```bash
npm install
```

### 3. 啟動資料庫
使用 Docker 啟動 PostgreSQL：
```bash
docker-compose up -d
```

### 4. 初始化資料庫
執行 Migration 並寫入測試資料：
```bash
# 建立資料表
npx prisma migrate dev --name init

# 寫入種子資料 (Seed)
npx tsx prisma/seed.ts
```

### 5. 啟動開發伺服器
```bash
npm run dev
```
瀏覽器打開 [http://localhost:3000](http://localhost:3000) 即可看到首頁。

## ✅ 測試 (Testing)

本專案包含手動測試腳本，用於驗證核心邏輯（不依賴瀏覽器）：

```bash
# 測試商品流程 (Create & Get)
npx tsx scripts/test-product.ts
```

## 📜 授權與治理
本專案遵循 **Shu-Han Framework** 之開發規範。
所有變更需對應一張虎符 (Order)，並通過單元測試驗收。

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
