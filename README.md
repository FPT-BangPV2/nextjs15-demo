# 🌐 Next.js 15 SEO & Rendering Demo

## 🚀 Introduction

This project is a **Next.js 15 demo** showcasing modern rendering strategies and SEO optimization techniques. It demonstrates how to use **Server-side Rendering (SSR)**, **Static Site Generation (SSG)**, and **custom Cache-Control headers** to build fast, SEO-friendly web applications.

The project uses the **App Router** introduced in Next.js 13+ and is updated for **Next.js 15**.

---

## ✨ Features

- [x] **Server-side Rendering (SSR)** with `getServerSideProps`
- [x] **Server-side Rendering (SSR)** with `getServerSideProps`
- [x] **Static Site Generation (SSG)** with `getStaticProps` and ISR
- [x] **Custom Cache-Control headers** via `res.setHeader` in SSR
- [x] **TypeScript + Tailwind CSS** for modern development
- [ ] **SEO optimization** with `next/head`, Open Graph, Twitter Cards, and JSON-LD
- [ ] **Sitemap and robots.txt** support

---

## 🧰 Technologies Used

- Next.js 15.2
- React 19
- TypeScript
- Tailwind CSS ^4
- Vercel (for deployment)

---

## 📁 Folder Structure

```
/be-product
├── /src
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── services/
├── app.js
├── server.js
└── .env

/fe-product
├── /public
│   └── /images
├── /src
│   ├── /pages
│   │   └── products/[id]/index.tsx
│   │   └── index.tsx
│   │   └── products.tsx
│   ├── /components
│   ├── /styles
│   └── /types
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── .env.local

```

## 🛠️ How to Run

### Clone the repository

```bash
git clone https://github.com/your-username/nextjs15-seo-demo.git
cd nextjs15-seo-demo
```

### Install dependencies

```bash
npm install
or
yarn install

```

## Run Development

### 🔧 Backend

```shell

cd bg-product
npm run dev

```

API will be available at: http://localhost:3001

### 💻 Frontend

```shell

cd fe-product
yarn dev
```

Frontend will be available at: http://localhost:3060

## 🚀 Build & Test for Production (Local)

### Build Frontend (Next.js)

```bash

cd fe-product
yarn build
yarn start

```

App will run production at: http://localhost:3070

Not implement

## 📄 License

MIT License — feel free to use and modify this project for your own purposes.
