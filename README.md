# ARAAI - Polish AI for All Initiative

Nowoczesna strona internetowa dla ARAAI (Polish AI for All Initiative) - społeczności ekspertów rozwijającej AI opartą na wiedzy, wartościach i działaniu.

## 🚀 Stack Technologiczny

- **React 18** - Biblioteka UI
- **TypeScript** - Silne typowanie
- **Vite** - Szybki bundler i dev server  
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Routing i nawigacja

## 🎨 Funkcje

- ✅ **Responsywny design** - Kompatybilny z urządzeniami mobilnymi, tabletami i desktopami
- ✅ **Nowoczesny UI/UX** - Gradient styling, animacje i przejścia
- ✅ **Nawigacja SPA** - React Router z płynną nawigacją
- ✅ **Semantic HTML** - Dostępność i SEO
- ✅ **TypeScript** - Bezpieczeństwo typów
- ✅ **Performance** - Optymalizacja obrazów i kodu

## 📱 Strony

1. **Strona główna** (`/`) - Hero section, misja, cele organizacji
2. **O nas** (`/o-nas`) - Informacje o organizacji, zespół, wartości  
3. **Wydarzenia** (`/wydarzenia`) - Kalendarz eventów, warsztaty, konferencje
4. **Aktualności** (`/aktualnosci`) - Blog, newsy, raporty

## 🛠 Instalacja i Uruchomienie

### Wymagania
- Node.js 18+ 
- npm lub yarn

### Kroki

1. Zainstaluj zależności:
\`\`\`bash
npm install
\`\`\`

2. Uruchom serwer deweloperski:
\`\`\`bash  
npm run dev
\`\`\`

3. Otwórz [http://localhost:5173](http://localhost:5173) w przeglądarce

### Inne komendy

\`\`\`bash
# Build do produkcji
npm run build

# Preview build 
npm run preview

# Linting
npm run lint
\`\`\`

## 🎨 Design System

### Kolory
- **Primary**: Odcienie turkusowego (#26e4e7, #0bc5d1)
- **Dark**: Grafiowa paleta (#06121c - #f8fafc)
- **Gradients**: Wykorzystywane w akcenty i hero sections

### Typografia
- **Montserrat** - Nagłówki i akcenty
- **Signika** - Tekst główny
- **Oxygen** - Tekst uzupełniający

### Komponenty
- Buttons: `.btn-primary`, `.btn-secondary`
- Gradient text: `.gradient-text`
- Responsywne układy: Tailwind breakpoints

## 📁 Struktura Projektu

\`\`\`
src/
├── components/          # Komponenty wielokrotnego użytku
│   ├── Layout.tsx      # Główny layout
│   ├── Navbar.tsx      # Nawigacja
│   └── Footer.tsx      # Stopka
├── pages/              # Komponenty stron
│   ├── Home.tsx        # Strona główna
│   ├── About.tsx       # O nas
│   ├── Events.tsx      # Wydarzenia
│   └── News.tsx        # Aktualności
├── hooks/              # Custom React hooks
├── types/              # Definicje TypeScript
└── main.tsx           # Entry point
\`\`\`

## 🚀 Deployment

### Vercel (Rekomendowane)
1. Push kod do GitHub
2. Podłącz repo do Vercel
3. Deploy automatyczny na każdy push

### Netlify
1. `npm run build`
2. Upload folder `dist/` do Netlify

### Docker
\`\`\`dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "preview"]
\`\`\`

## 🤝 Kontakt

- **Email**: office@araai.org
- **Website**: [araai.org](https://araai.org)

## 📄 Licencja

© 2025 ARAAI - Polish AI for All Initiative
