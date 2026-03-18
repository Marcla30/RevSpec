# 🔧 Guide d'Extension - Passion Voitures

Ce guide explique comment étendre et personnaliser le site facilement.

## 📝 Ajouter une Nouvelle Voiture

### Étape 1 : Ajouter les données (app.js)
```javascript
// Dans assets/js/app.js, ajouter dans le tableau cars :
{
  id: 'porsche-911-gt3',
  name: 'Porsche 911 GT3',
  brand: 'Porsche',
  power: 510,
  weight: 1430,
  acceleration: 3.4,
  topSpeed: 320,
  torque: 470,
  transmission: 'Auto',
  gears: 7,
  consumption: 12.4,
  price: 180000,
  image: 'assets/images/voitures/911-gt3.jpg',
  history: "Votre texte d'histoire ici (300 mots max)...",
  timeline: [
    { year: 1999, model: '911 GT3 996', note: 'Première génération' },
    { year: 2006, model: '911 GT3 997', note: 'Deuxième génération' },
    // ... autres modèles
  ]
}
```

### Étape 2 : Créer la page HTML
```bash
# Copier un modèle existant
cp pages-voitures/voiture-m4-csl-2022.html pages-voitures/voiture-porsche-911-gt3.html
```

### Étape 3 : Modifier le contenu
- Remplacer le titre
- Mettre à jour les caractéristiques techniques
- Ajouter l'histoire
- Mettre à jour la timeline

### Étape 4 : Ajouter l'image
```bash
# Placer l'image dans :
assets/images/voitures/911-gt3.jpg
# Format recommandé : 1920x1080px, JPG
```

## 🎨 Personnaliser les Couleurs

### Modifier le thème (style.css)
```css
:root {
  --primary: #e74c3c;      /* Couleur principale (boutons, titres) */
  --secondary: #2c3e50;    /* Couleur secondaire (header, footer) */
  --bg: #ffffff;           /* Fond clair */
  --text: #333;            /* Texte clair */
  --card-bg: #f8f9fa;      /* Fond des cartes */
  --border: #ddd;          /* Bordures */
  --shadow: rgba(0,0,0,0.1); /* Ombres */
}

/* Mode sombre */
body.dark-mode {
  --bg: #1a1a1a;
  --text: #e0e0e0;
  --card-bg: #2a2a2a;
  --border: #444;
  --shadow: rgba(255,255,255,0.05);
}
```

## ⚙️ Modifier le Calcul de Performance

### Ajuster les pondérations (app.js)
```javascript
function calculatePerformance(car) {
  // Modifier ces valeurs (total = 100%)
  const powerScore = (car.power / 600) * 30;        // 30% puissance
  const accelScore = (6 - car.acceleration) / 6 * 30; // 30% accélération
  const speedScore = (car.topSpeed / 350) * 25;     // 25% vitesse max
  const weightScore = (2000 - car.weight) / 2000 * 15; // 15% poids
  
  return Math.round(powerScore + accelScore + speedScore + weightScore);
}
```

## 🔍 Ajouter des Filtres Avancés

### Exemple : Filtre par marque
```javascript
// Dans app.js, ajouter après initSearch() :
function initBrandFilter() {
  const brands = [...new Set(cars.map(car => car.brand))];
  const filterDiv = document.createElement('div');
  filterDiv.className = 'brand-filter';
  
  brands.forEach(brand => {
    const btn = document.createElement('button');
    btn.textContent = brand;
    btn.onclick = () => filterByBrand(brand);
    filterDiv.appendChild(btn);
  });
  
  document.querySelector('#cars').prepend(filterDiv);
}

function filterByBrand(brand) {
  const cards = document.querySelectorAll('.car-card');
  cards.forEach(card => {
    const carName = card.querySelector('h3').textContent;
    const car = cars.find(c => c.name === carName);
    card.style.display = car.brand === brand ? 'block' : 'none';
  });
}
```

## 📊 Ajouter des Graphiques

### Exemple : Graphique radar de performance
```javascript
// Ajouter dans la modal de comparaison
function createRadarChart(car1, car2) {
  const canvas = document.createElement('canvas');
  canvas.width = 400;
  canvas.height = 400;
  
  // Utiliser Canvas API pour dessiner
  const ctx = canvas.getContext('2d');
  
  // Normaliser les valeurs
  const metrics = {
    power: [car1.power / 600, car2.power / 600],
    speed: [car1.topSpeed / 350, car2.topSpeed / 350],
    accel: [(6 - car1.acceleration) / 6, (6 - car2.acceleration) / 6],
    weight: [(2000 - car1.weight) / 2000, (2000 - car2.weight) / 2000]
  };
  
  // Dessiner le graphique...
  return canvas;
}
```

## 🌐 Ajouter une Nouvelle Page

### Exemple : Page "À propos"
```html
<!-- about.html -->
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>À propos - Passion Voitures</title>
  <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
  <header>
    <div class="logo">🏁 Passion Voitures</div>
    <nav>
      <ul class="nav-links">
        <li><a href="index.html">Accueil</a></li>
        <li><a href="about.html" class="active">À propos</a></li>
      </ul>
      <button id="dark-mode-toggle">🌙</button>
    </nav>
  </header>
  
  <section style="margin-top: 100px;">
    <h2>À propos de Passion Voitures</h2>
    <p>Votre contenu ici...</p>
  </section>
  
  <script src="assets/js/app.js"></script>
</body>
</html>
```

## 💾 Ajouter une Fonctionnalité de Sauvegarde

### Exemple : Export des favoris en JSON
```javascript
function exportFavorites() {
  const data = {
    favorites: favorites,
    exportDate: new Date().toISOString(),
    version: '1.0'
  };
  
  const blob = new Blob([JSON.stringify(data, null, 2)], 
    { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  
  const a = document.createElement('a');
  a.href = url;
  a.download = 'favoris-passion-voitures.json';
  a.click();
}

// Ajouter un bouton dans l'interface
const exportBtn = document.createElement('button');
exportBtn.textContent = 'Exporter mes favoris';
exportBtn.className = 'btn';
exportBtn.onclick = exportFavorites;
```

## 🎬 Ajouter des Animations Personnalisées

### Exemple : Animation de carte au survol
```css
/* Dans style.css */
.car-card {
  transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.car-card:hover {
  transform: translateY(-20px) rotate(2deg);
  box-shadow: 0 20px 40px var(--shadow);
}

.car-card:hover img {
  transform: scale(1.1);
  filter: brightness(1.2);
}
```

## 📱 Optimiser pour PWA (Progressive Web App)

### Ajouter un manifest.json
```json
{
  "name": "Passion Voitures",
  "short_name": "PassionCars",
  "description": "Les plus belles voitures sportives",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#2c3e50",
  "theme_color": "#e74c3c",
  "icons": [
    {
      "src": "icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    }
  ]
}
```

### Ajouter dans index.html
```html
<link rel="manifest" href="manifest.json">
<meta name="theme-color" content="#e74c3c">
```

## 🔐 Ajouter une Authentification Simple

### Exemple : Protection par mot de passe
```javascript
// Ajouter au début de app.js
function checkAuth() {
  const password = localStorage.getItem('auth');
  if (password !== 'passion2024') {
    const input = prompt('Mot de passe :');
    if (input === 'passion2024') {
      localStorage.setItem('auth', input);
    } else {
      alert('Accès refusé');
      window.location.href = 'about:blank';
    }
  }
}

// Appeler au chargement
// checkAuth();
```

## 📈 Ajouter Google Analytics

```html
<!-- Ajouter dans <head> de index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🎯 Bonnes Pratiques

1. **Toujours tester** sur mobile après modification
2. **Valider le HTML** avec W3C Validator
3. **Optimiser les images** (compression, format WebP)
4. **Commenter le code** pour faciliter la maintenance
5. **Versionner** avec Git pour suivre les changements
6. **Sauvegarder** régulièrement

## 🆘 Dépannage

### Le slider ne fonctionne pas
- Vérifier que `initSlider()` est appelé dans `DOMContentLoaded`
- Vérifier la console pour les erreurs JavaScript

### Les images ne s'affichent pas
- Vérifier les chemins relatifs (`../` pour remonter d'un niveau)
- Vérifier les noms de fichiers (sensible à la casse)

### Le dark mode ne persiste pas
- Vérifier que localStorage est activé dans le navigateur
- Tester en navigation privée

### Le site est lent
- Compresser les images (TinyPNG, ImageOptim)
- Minifier CSS/JS en production
- Activer la mise en cache

---

**Besoin d'aide ?** Consultez la documentation complète dans README.md
