# Language Support Standard Operating Procedure (SOP)

This document outlines the folder structure and process for maintaining multi-language support in our window renovation and painting services website.

## Folder Structure for Language-Related Files
window-services-website/
├── app/
│ └── [lang]/
│ ├── about/
│ │ └── page.tsx
│ ├── contact/
│ │ └── page.tsx
│ ├── projects/
│ │ └── page.tsx
│ ├── layout.tsx
│ └── page.tsx
├── components/
│ ├── Header.tsx
│ ├── Footer.tsx
│ └── LanguageSwitcher.tsx
├── lib/
│ └── i18n.ts
└── public/
└── locales/
├── en.json
└── sv.json


## Translation Process for New Pages and Components

1. Identify the new page or component that needs translation.
2. Add the necessary keys and English text to `public/locales/en.json`.
3. Copy the new keys to `public/locales/sv.json` and translate the text to Swedish.
4. Use the `getTranslations` function from `lib/utils.ts` in the new page or component.
5. Apply the translations using the appropriate keys.

