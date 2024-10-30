# Project Structure

** General ** 
- Use next.js version 14 app router
- Use shadcn/ui components wherever possible
- Use globals.css variables whereever possible
- Use tailwind css for styling
- Use existing code wherever possible

** Pages **
- app/layout app metadata and language routing
- app/[lang]/layout.tsx app layout, Context Providers
- app/[lang]/page.tsx landing page
- app/[lang]/about/page.tsx about page
- app/[lang]/projects/page.tsx projects page
- app/[lang]/contact/page.tsx contact page

** Utilities ** 
- internationalization: middleware.ts, app/[lang]/dictionaries.ts, app/layout.tsx
- types/video.d.ts: video type
