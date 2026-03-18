# 🏁 Passion Voitures - Site Web Complet

Site web moderne et responsive dédié aux voitures sportives emblématiques, développé en HTML, CSS et JavaScript pur (sans framework ni backend).

## 🚀 Fonctionnalités

### Pages
- **index.html** : Page d'accueil avec slider automatique, grille de voitures et comparateur
- **8 pages individuelles** : Une fiche détaillée pour chaque voiture

### Fonctionnalités JavaScript
✅ **Slider Hero** : Défilement automatique des 9 voitures (5 secondes)
✅ **Grille responsive** : Affichage adaptatif 3x3 → 1 colonne mobile
✅ **Comparateur central** : 
  - 2 dropdowns pour sélectionner les voitures
  - Modal avec tableau comparatif
  - Barres de performance calculées dynamiquement
  - Bouton "Ajouter aux favoris" (localStorage)
✅ **Recherche en temps réel** : Filtrage instantané des voitures
✅ **Dark Mode** : Toggle avec sauvegarde localStorage
✅ **Menu hamburger** : Navigation mobile optimisée
✅ **Lazy Loading** : Chargement différé des images
✅ **Smooth Scroll** : Navigation fluide entre sections
✅ **Active Link Highlighting** : Surlignage automatique du lien actif

### Design
- **Responsive** : Mobile-first, tablette et desktop
- **Animations CSS** : fadeIn, fadeInUp, slideUp, hover effects
- **Timeline CSS** : Rétrospective historique pour chaque voiture
- **Modal overlay** : Comparaison immersive
- **Thème sombre** : Palette de couleurs adaptative

## 📁 Structure du Projet

```
Nouveau/
├── index.html                    # Page d'accueil
├── assets/
│   ├── css/
│   │   └── style.css            # Styles uniques (responsive + dark mode)
│   ├── js/
│   │   └── app.js               # JavaScript unique (toutes fonctionnalités)
│   └── images/
│       └── voitures/            # 8 images (SVG placeholder inclus)
└── pages-voitures/              # 8 pages HTML individuelles
    ├── voiture-m4-csl-2022.html
    ├── voiture-m5-2016.html
    ├── voiture-m3-2022.html
    ├── voiture-rs5-2016.html
    ├── voiture-rs3-2022.html
    ├── voiture-skyline-r34.html
    ├── voiture-gtr-r35.html
    └── voiture-megane-rs-2010.html
```

## 🚗 Voitures Incluses

1. **BMW M4 CSL 2022** - 550 ch, 3.7s (0-100)
2. **BMW M5 2016** - 560 ch, 4.3s (0-100)
3. **BMW M3 2022** - 510 ch, 3.9s (0-100)
4. **Audi RS5 2016** - 450 ch, 4.5s (0-100)
5. **Audi RS3 2022** - 400 ch, 3.8s (0-100)
6. **Nissan Skyline R34** - 280 ch, 4.8s (0-100)
7. **Nissan GT-R R35** - 570 ch, 2.7s (0-100)
8. **Renault Mégane RS 2010** - 250 ch, 6.0s (0-100)

## 🎨 Personnalisation

### Ajouter une voiture
1. Ajouter l'objet dans `assets/js/app.js` (tableau `cars`)
2. Créer `pages-voitures/voiture-[id].html`
3. Ajouter l'image dans `assets/images/voitures/`

### Modifier les couleurs
Variables CSS dans `assets/css/style.css` :
```css
:root {
  --primary: #e74c3c;      /* Rouge principal */
  --secondary: #2c3e50;    /* Bleu foncé */
  --bg: #ffffff;           /* Fond clair */
  --text: #333;            /* Texte clair */
}
```

### Calcul de performance
Formule dans `app.js` (fonction `calculatePerformance`) :
- Puissance : 30%
- Accélération : 30%
- Vitesse max : 25%
- Poids : 15%

## 🌐 Utilisation

### Lancement local
```bash
# Ouvrir directement index.html dans un navigateur
open index.html

# OU avec un serveur local (recommandé)
python3 -m http.server 8000
# Puis ouvrir http://localhost:8000
```

### Compatibilité
- ✅ Chrome/Edge (dernières versions)
- ✅ Firefox (dernières versions)
- ✅ Safari (dernières versions)
- ✅ Mobile (iOS/Android)

## 📱 Responsive Breakpoints

- **Desktop** : > 768px (grille 3 colonnes)
- **Tablette** : 481-768px (grille 2 colonnes)
- **Mobile** : < 480px (grille 1 colonne)

## 🔧 Technologies

- **HTML5** : Sémantique, accessibilité
- **CSS3** : Flexbox, Grid, animations, variables
- **JavaScript ES6+** : Modules, arrow functions, template literals
- **LocalStorage** : Favoris et préférences dark mode

## 📝 Licence

Projet éducatif - Libre d'utilisation

## 🎯 Améliorations Futures

- [ ] Ajouter plus de voitures
- [ ] Système de notation utilisateur
- [ ] Galerie d'images multiples par voiture
- [ ] Export PDF des comparaisons
- [ ] Partage social des comparaisons
- [ ] Graphiques de performance interactifs

## 🔎 Analyse SEO Et Actions

### 1) Intention de recherche
- Objectif principal: capter les recherches autour des fiches techniques de voitures sportives (BMW M, Audi RS, Nissan GT-R/Skyline, Renault RS).
- Mots-cles cibles: `fiche technique`, `0-100`, `puissance`, `comparatif`, `[modele] [annee]`.
- Outil recommande: Google Search Console (rapport `Performances`) pour valider les requetes reelles et ajuster les contenus.

### 2) Qualite redactionnelle
- Chaque fiche dispose d'un bloc histoire et d'une chronologie pour enrichir le contenu editorial.
- Recommandation: maintenir des paragraphes informatifs, factuels et actualises (puissance, poids, prix, evolution des generations).

### 3) Popularite
- Backlinks: obtenir des liens depuis blogs auto, forums specialises et annuaires thematiques.
- Autorite de domaine: conserver une coherence forte entre le nom de domaine, les pages et le champ lexical automobile/sportif.

### 4) Structure HTML (points importants)
- Une balise `h1` unique par page (corrigee sur l'accueil, les fiches et la page de tests).
- Attributs `alt` presents sur les images essentielles.
- Donnees structurees: generation JSON-LD (`WebSite` pour l'accueil, `Car` pour les fiches).

### 5) Performance
- Images: `loading="lazy"` et `decoding="async"` actifs.
- Core Web Vitals: suivre LCP/CLS/INP avec Lighthouse ou PageSpeed Insights.
- Compression images: convertir en WebP/AVIF et garder un poids contenu par image.
- Priorisation: eviter de charger des scripts/styles non critiques au premier affichage.

---

**Développé avec ❤️ pour les passionnés d'automobiles**
