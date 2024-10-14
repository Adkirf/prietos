# Window Renovation and Painting Services Website Overview

## Summary

### Purpose of the App
This Next.js app router website is designed for a small business in Stockholm that specializes in window renovation and painting services. The website aims to showcase the company's services, provide information about the business, display past projects, and offer a way for potential customers to contact the company.

### Tech Stack
- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Shadcn UI

### Best Practices
- Use of Next.js App Router for routing and internationalization
- Focus on responsiveness
- Centralized translation logic in utils file
- Component-based architecture
- Use of TypeScript for type safety

### Key Functionalities
- Multilingual support (English and Swedish)
- Home page with hero section, image comparison, and services overview
- About page with company information
- Projects page with image gallery
- Contact page with form
- Language switcher
- Responsive design

### Folder Structure

window-services-website/
├── app/
│ ├── [lang]/
│ │ ├── about/
│ │ │   └── page.tsx
│ │ ├── contact/
│ │ │   └── page.tsx
│ │ ├── home/
│ │ │   └── page.tsx
│ │ ├── projects/
│ │ │   ├── [projectId]/
│ │ │   │   └── [imageIndex]/
│ │ │   │       └── page.tsx
│ │ │   └── page.tsx
│ │ ├── layout.tsx
│ │ └── page.tsx
│ ├── globals.css
│ ├── layout.tsx
│ └── page.tsx
├── components/
│ ├── AboutUs.tsx
│ ├── ContactForm.tsx
│ ├── Footer.tsx
│ ├── FullscreenViewer.tsx
│ ├── Header.tsx
│ ├── Hero.tsx
│ ├── ImageComparison.tsx
│ ├── ImageGallery.tsx
│ ├── LanguageSwitcher.tsx
│ └── Services.tsx
├── lib/
│ └── utils.ts
├── public/
│ ├── assets/
│ │ ├── before.jpg
│ │ └── after.jpg
│ └── locales/
│     ├── en.json
│     └── sv.json
