<div align="center">

# Aurora · AI Image Studio

**Data, Decided.** — 极简黑白 · 专业 SaaS 图片生成平台

[![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=flat&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat&logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Supabase](https://img.shields.io/badge/Supabase-Database-3ECF8E?style=flat&logo=supabase&logoColor=white)](https://supabase.com/)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-000000?style=flat&logo=vercel&logoColor=white)](https://vercel.com/)

**在线预览**: [run-go-omega.vercel.app](https://run-go-omega.vercel.app)

</div>

---

## ✨ 核心功能

- 🎨 **AI 图片生成** - 多种风格、画幅、画质自由组合
- 💰 **积分系统** - 消耗、充值、记录一体化
- 🖼 **作品库** - 历史收藏、一键复用
- 🌓 **深色模式** - 柔和护眼配色
- 🌏 **多语言** - 中/英切换，支持扩展

## 🚀 快速开始

### 环境要求
- Node.js ≥ 18.17

### 安装与运行

```bash
# 1. 克隆项目
git clone https://github.com/your-username/runGO-.git
cd runGO-

# 2. 安装依赖
npm install

# 3. 配置环境变量（复制 .env.local 并填入你的 Supabase 凭证）
#    详见下方 "环境变量" 章节

# 4. 启动开发服务器
npm run dev

# 5. 访问 http://localhost:3000
```

### 生产部署

使用 [Vercel](https://vercel.com/) 一键部署：

```bash
# 构建生产版本
npm run build
npm run start
```

部署到 Vercel 后，在 **Settings → Environment Variables** 中配置必要变量即可。

---

## 🧰 技术栈

| 类别 | 技术 |
|------|------|
| 框架 | Next.js 16 (App Router) · React 19 |
| 样式 | Tailwind CSS 4 · CSS Variables |
| 数据库 | Supabase (PostgreSQL) |
| 状态 | React Context API |
| 图片 | Trae API (Seedream) |

---

<details>
<summary>🔐 环境变量（点击展开）</summary>

| 变量名 | 类型 | 示例 |
|--------|------|------|
| `NEXT_PUBLIC_SUPABASE_URL` | 客户端 + 服务端 | `https://your-project.supabase.co` |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | 客户端 + 服务端 | `eyJhbGci...` |
| `SUPABASE_SERVICE_ROLE_KEY` | **仅服务端** | `eyJhbGci...` |
| `DATABASE_URL` | 仅服务端 | `postgresql://...` |

> ⚠️ `SUPABASE_SERVICE_ROLE_KEY` 权限极高，不得暴露到客户端。

</details>

<details>
<summary>📁 项目结构（点击展开）</summary>

```
runGO-/
├── app/                    # App Router 页面
│   ├── generate/           # 图片生成页
│   ├── gallery/            # 作品库
│   ├── dashboard/          # 用户中心
│   ├── recharge/           # 积分充值
│   └── ...
├── components/             # 通用组件
├── lib/                    # 核心逻辑
│   ├── points/             # 积分系统
│   ├── i18n/               # 国际化
│   └── theme/              # 主题
├── supabase/               # SQL 脚本
└── package.json
```

</details>

---

## 🛠️ 常用命令

| 命令 | 说明 |
|------|------|
| `npm run dev` | 开发服务器 |
| `npm run build` | 生产构建 |
| `npm run start` | 生产服务器 |
| `npm run lint` | 代码检查 |

## 📄 License

Private · © Aurora Studio
