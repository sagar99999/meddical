# 🏥 Meddical — Online Medical Service Platform

> **Leading the Way in Medical Excellence, Trusted Care.**

A full-featured medical web application that allows patients to browse doctors, book appointments, explore hospital services, and read health-related news — all from a clean, modern interface.

🌐 **Live Demo:** [meddical-kappa.vercel.app](https://meddical-kappa.vercel.app)

---

## 📋 Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Deployment](#deployment)

---

## About the Project

**Meddical** is a modern healthcare web platform built with Next.js. It provides a complete digital presence for a medical center — from doctor listings and appointment booking to a news section and contact information. The platform supports both patient-facing pages and a content management flow for adding doctors, news, and services.

The application is hosted in Kathmandu, Nepal, and is deployed on Vercel.

---

## ✨ Features

- **Home Page** — Hero section with hospital highlights, featured services, and specialties carousel
- **Doctors Directory** — Browsable list of doctors with profiles, specialties, and social links
- **Appointment Booking** — Form-based system to book appointments by gender, doctor, and department
- **Services Section** — Overview of available medical services (Free Checkup, Cardiogram, DNA Test, Blood Bank, etc.)
- **Specialties** — Covers 12+ medical specialties including Neurology, Oncology, Cardiology, Dermatology, and more
- **News & Articles** — Health news blog with individual article pages
- **About & Contact Pages** — Hospital information, working hours, location, and emergency contact
- **Image Uploads** — Doctor profile images and content images managed via ImageKit
- **Responsive Design** — Mobile-friendly layout across all pages
- **Slug-based Routing** — SEO-friendly URLs for doctors and news articles

---

## 🛠 Tech Stack

| Category | Technology |
|---|---|
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router) |
| **Language** | TypeScript (~98% of codebase) |
| **UI Components** | [shadcn/ui](https://ui.shadcn.com/), [Radix UI](https://www.radix-ui.com/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/), `tw-animate-css` |
| **Database ODM** | [Mongoose](https://mongoosejs.com/) (MongoDB) |
| **Forms** | [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) validation |
| **Image Management** | [ImageKit](https://imagekit.io/) via `@imagekit/next` |
| **Carousel/Slider** | [Swiper.js](https://swiperjs.com/) |
| **Notifications** | [Sonner](https://sonner.emilkowal.ski/) (toast notifications) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **URL Slugs** | [slugify](https://github.com/simov/slugify) + [nanoid](https://github.com/ai/nanoid) |
| **Date Utilities** | [date-fns](https://date-fns.org/) |
| **Package Manager** | [pnpm](https://pnpm.io/) |
| **Linting** | ESLint (with Next.js config) |
| **Deployment** | [Vercel](https://vercel.com/) |

---

## 📁 Project Structure

```
meddical/
├── app/              # Next.js App Router pages and layouts
├── actions/          # Server actions (form submissions, data mutations)
├── components/       # Reusable UI components
├── hooks/            # Custom React hooks
├── lib/              # Utility functions and shared logic
├── models/           # Mongoose data models (MongoDB schemas)
├── public/           # Static assets (images, icons)
├── package.json      # Dependencies and scripts
├── next.config.ts    # Next.js configuration
├── tsconfig.json     # TypeScript configuration
└── tailwind.config   # Tailwind CSS configuration
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js** v18 or higher
- **pnpm** (recommended) — install with `npm install -g pnpm`
- A **MongoDB** database (local or [MongoDB Atlas](https://www.mongodb.com/atlas))
- An **ImageKit** account for image uploads

### 1. Clone the Repository

```bash
git clone https://github.com/sagar99999/meddical.git
cd meddical
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Configure Environment Variables

Create a `.env.local` file in the root directory and add the required variables:

```env
# MongoDB
MONGODB_URI=your_mongodb_connection_string

# ImageKit
IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=https://ik.imagekit.io/your_imagekit_id
```

### 4. Run the Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

---

## 📜 Available Scripts

| Command | Description |
|---|---|
| `pnpm dev` | Start the development server at `localhost:3000` |
| `pnpm build` | Build the application for production |
| `pnpm start` | Start the production server (after build) |
| `pnpm lint` | Run ESLint to check for code issues |

---

## 🌍 Deployment

The easiest way to deploy this project is via **Vercel**:

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and import your repository
3. Add your environment variables in the Vercel project settings
4. Click **Deploy**

Vercel automatically handles builds and deployments on every push to `main`.

For other platforms, run `pnpm build` and then `pnpm start` to serve the production build.

---

## 📞 Contact

- **Emergency:** (+977) 98-123-131-09
- **Email:** support@meddical.com
- **Location:** Kathmandu, Nepal
- **Working Hours:** Mon–Sat, 09:00–20:00 | Sunday (Emergency only)

---

© 2021-2026 Meddical. All Rights Reserved by PNTEC-LTD.