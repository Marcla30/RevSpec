# RevSpec – Comparateur de Performances Automobiles

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![HTML5](https://img.shields.io/badge/HTML5-%23E34F26.svg?style=flat&logo=html5&logoColor=white)](https://html.spec.whatwg.org/)
[![CSS3](https://img.shields.io/badge/CSS3-%231572B6.svg?style=flat&logo=css3&logoColor=white)](https://www.w3.org/Style/CSS/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

RevSpec est un comparateur interactif de performances automobiles présentant les meilleures voitures sportives du marché avec fiches techniques détaillées, historiques des versions et système de comparaison intégré.

## 🚀 Caractéristiques

- **Comparateur en temps réel** – Comparez jusqu'à 3 voitures simultanément
- **Design Glassmorphism moderne** – Interface épurée avec animations fluides
- **Mode sombre/clair** – Toggle thème avec persistance de préférence
- **Recherche et filtrage** – Filtrez par puissance, poids, prix, accélération
- **Fiches techniques complètes** – 8 voitures sportives avec historiques
- **SEO optimisé** – Structured data JSON-LD, sitemap, robots.txt
- **Mobile-responsive** – Adapté à tous les appareils
- **Performance** – `defer` JavaScript, lazy loading images, aspect-ratio CSS

## 📋 Contenu

### Voitures présentes
1. **BMW M4 CSL 2022** – 550 ch, 3.7s (0-100)
2. **BMW M3 2022** – 503 ch, 3.9s (0-100)
3. **BMW M5 2016** – 625 ch, 3.7s (0-100)
4. **Renault Mégane RS 2010** – 250-275 ch, 6.0s (0-100)
5. **Audi RS3 2022** – 400 ch, 3.8s (0-100)
6. **Audi RS5 2016** – 450 ch, 3.9s (0-100)
7. **Nissan Skyline R34** – 280 ch (bridé), 4.8s (0-100)
8. **Nissan GT-R R35** – 570 ch, 2.7s (0-100)

## 🛠️ Stack Technique

- **Frontend :** HTML5, CSS3, Vanilla JavaScript
- **Design :** Glassmorphism, Gradients linéaires, Animations CSS
- **SEO :** Schema.org (JSON-LD), Vue structurée, Meta tags
- **Performance :** Lazy loading, Image compression, Aspect-ratio CSS
- **Accessibilité :** WCAG 2.1, ARIA labels, Semantic HTML

## 📁 Structure du Projet

```
├── index.html                          # Homepage avec hero slider et grille de voitures
├── assets/
│   ├── css/
│   │   └── style.css                  # Design system glassmorphism (1500+ lignes)
│   ├── js/
│   │   └── app.js                     # Logique comparateur, recherche, filtrage
│   └── images/
│       └── voitures/                  # Images des véhicules
├── pages-voitures/
│   ├── voiture-m4-csl-2022.html
│   ├── voiture-m3-2022.html
│   ├── voiture-m5-2016.html
│   ├── voiture-megane-rs-2010.html
│   ├── voiture-rs3-2022.html
│   ├── voiture-rs5-2016.html
│   ├── voiture-gtr-r35.html
│   └── voiture-skyline-r34.html
├── robots.txt                         # Directives robots indexation
├── sitemap.xml                        # Sitemap pour moteurs recherche
├── schema.json                        # Structured data JSON-LD
└── README.md                          # Ce fichier
```

## 🌐 Optimisations SEO

### ✅ Implémentées
- [x] Meta tags (description, viewport, robots)
- [x] Structured data (JSON-LD schema.org)
- [x] Sitemap avec priorités et fréquences
- [x] robots.txt (Allow, Disallow, Sitemap)
- [x] Alt text sur toutes les images
- [x] H1 unique par page
- [x] Open Graph tags
- [x] Canonical URLs
- [x] Lazy loading images (`loading="lazy"`)
- [x] Script defer (`<script defer>`)
- [x] Aspect-ratio CSS (prévention CLS)

### ⏱️ Core Web Vitals
- **LCP** – Optimisé avec `defer` et lazy loading
- **CLS** – Prévenue par aspect-ratio CSS
- **INP** – Événements asynchrones optimisés

## 🚀 Démarrage Rapide

### Installation locale
```bash
git clone https://github.com/votre-username/revspec.git
cd revspec
```

### Lancer le site
Ouvrez simplement `index.html` dans votre navigateur ou utilisez un serveur local :
```bash
python -m http.server 8000
# ou
npx serve
```

Visitez `http://localhost:8000`

## 🎨 Design System

### Couleurs
- **Dégradé principal :** `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`
- **Text light mode :** `#1a1a1a`
- **Text dark mode :** `#ffffff`
- **Background light :** `#f8f9fa`
- **Background dark :** `#1a1a2e`

### Effets Glassmorphism
```css
backdrop-filter: blur(16px);
background: rgba(44, 62, 80, 0.75);
border: 1px solid rgba(255, 255, 255, 0.1);
```

## 📱 Responsive Design

- **Desktop :** Optimisé pour ≥1200px
- **Tablet :** ≥768px à <1200px
- **Mobile :** <768px

## 🔒 Sécurité

- HTTPS recommandé
- Certificat SSL/TLS obligatoire en production
- No-index sur `START.html` et `tests.html`
- Content Security Policy ready

## 📊 Performance Metrics

Testez votre site avec :
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [Google Search Console](https://search.google.com/search-console)
- [Google Rich Results Test](https://search.google.com/test/rich-results)

## 📝 Licence

MIT License – Voir [LICENSE](LICENSE) pour plus de détails

## 👤 Auteur

**Marc L.** – Projet BTS SIO – 2026

---

**Note :** Ce projet a été optimisé selon les guidelines **BLOC 1 - Referencement** avec focus sur :
- Crawlabilité (robots.txt, sitemap)
- Indexabilité (structure HTML, structured data)
- Core Web Vitals (performance, layout stability)
