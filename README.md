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

- Next.js 15
- React 18
- TypeScript
- Tailwind CSS
- Vercel (for deployment)

---

## 📁 Folder Structure

## 🛠️ How to Run

```bash
# Clone the repository
git clone https://github.com/your-username/nextjs15-seo-demo.git
cd nextjs15-seo-demo

# Install dependencies
npm install
or
yarn install

# Run the development server
npm run dev
or
yarn dev
```

Visit http://localhost:3000 to view the app.

## 🚀 Deployment

You can deploy this project easily using Vercel:

Push your code to GitHub.
Connect your GitHub repo to Vercel.
Vercel will auto-detect the Next.js project and deploy it.

## 📌 Notes

The project uses App Router (/app) instead of the legacy /pages directory.
Default SSR responses include Cache-Control: private, no-cache, no-store, must-revalidate.
You can override cache headers using res.setHeader() in getServerSideProps.
SEO is enhanced using next/head and structured data (JSON-LD).

## 📄 License

MIT License — feel free to use and modify this project for your own purposes.
