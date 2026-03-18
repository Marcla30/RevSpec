// Base de données des voitures
const cars = [
  {
    id: 'm4-csl-2022',
    name: 'M4 CSL 2022',
    brand: 'BMW',
    power: 550,
    weight: 1625,
    acceleration: 3.7,
    topSpeed: 307,
    torque: 650,
    transmission: 'Auto',
    gears: 8,
    consumption: 10.1,
    price: 164000,
    image: 'assets/images/voitures/m4-csl.jpg',
    history: "La BMW M4 CSL 2022 représente l'apogée de la lignée M4, avec le suffixe CSL (Coupe Sport Leichtbau) réservé aux versions les plus extrêmes. Allégée de 100 kg par rapport à la M4 Competition, elle utilise des matériaux composites et supprime les sièges arrière. Son moteur 6-cylindres en ligne biturbo de 3.0L développe 550 ch, faisant d'elle la M4 la plus puissante jamais produite. Limitée à 1000 exemplaires, elle incarne la philosophie BMW M dans sa forme la plus pure.",
    timeline: [
      { year: 2014, model: 'M4 F82', note: 'Première génération M4' },
      { year: 2018, model: 'M4 CS', note: 'Version Competition Sport' },
      { year: 2021, model: 'M4 G82', note: 'Nouvelle génération' },
      { year: 2022, model: 'M4 CSL', note: 'Version ultime' }
    ]
  },
  {
    id: 'm5-2016',
    name: 'M5 2016',
    brand: 'BMW',
    power: 560,
    weight: 1945,
    acceleration: 4.3,
    topSpeed: 250,
    torque: 680,
    transmission: 'Auto',
    gears: 7,
    consumption: 10.8,
    price: 105000,
    image: 'assets/images/voitures/m5-2016.jpg',
    history: "La BMW M5 F10 de 2016 marque la fin d'une ère glorieuse pour la berline sportive allemande. Équipée d'un V8 biturbo de 4.4L développant 560 ch dans sa version Competition, elle combine luxe et performances extrêmes. Cette génération a introduit le mode drift et des technologies avancées tout en conservant une propulsion pure. Son châssis rigide et sa direction précise en font une référence dans le segment des super-berlines. Elle reste l'une des M5 les plus appréciées des puristes.",
    timeline: [
      { year: 2005, model: 'M5 E60 V10', note: 'Moteur V10 507 ch' },
      { year: 2011, model: 'M5 F10', note: 'Retour au V8 biturbo' },
      { year: 2016, model: 'M5 Competition', note: '575 ch' },
      { year: 2018, model: 'M5 F90', note: 'Transmission intégrale xDrive' }
    ]
  },
  {
    id: 'm3-2022',
    name: 'M3 2022',
    brand: 'BMW',
    power: 510,
    weight: 1730,
    acceleration: 3.9,
    topSpeed: 290,
    torque: 650,
    transmission: 'Auto',
    gears: 8,
    consumption: 10.2,
    price: 85000,
    image: 'assets/images/voitures/m3-2022.jpg',
    history: "La BMW M3 G80 de 2022 marque un tournant controversé avec sa calandre surdimensionnée, mais ses performances sont indiscutables. Son 6-cylindres en ligne biturbo S58 de 3.0L délivre 510 ch en version Competition. Disponible en propulsion ou xDrive, elle offre une polyvalence inédite. Son châssis ultra-rigide et ses modes de conduite configurables en font une sportive quotidienne redoutable. Malgré les critiques esthétiques, elle s'impose comme l'une des M3 les plus performantes de l'histoire.",
    timeline: [
      { year: 2007, model: 'M3 E92 V8', note: 'Moteur V8 atmosphérique' },
      { year: 2014, model: 'M3 F80', note: 'Retour au 6-cylindres turbo' },
      { year: 2021, model: 'M3 G80', note: 'Nouvelle calandre' },
      { year: 2022, model: 'M3 Competition xDrive', note: 'Transmission intégrale' }
    ]
  },
  {
    id: 'rs5-2016',
    name: 'RS5 2016',
    brand: 'Audi',
    power: 450,
    weight: 1795,
    acceleration: 4.5,
    topSpeed: 250,
    torque: 430,
    transmission: 'Auto',
    gears: 7,
    consumption: 9.8,
    price: 82000,
    image: 'assets/images/voitures/rs5-2016.jpg',
    history: "L'Audi RS5 B8 de 2016 représente la dernière évolution de la première génération RS5. Son moteur V8 atmosphérique de 4.2L FSI développant 450 ch est un hommage aux moteurs naturellement aspirés. Avec sa transmission Quattro permanente et son châssis sport, elle offre une motricité exceptionnelle. Son design intemporel et sa sonorité unique en font une voiture de collection recherchée. Cette génération marque la fin des V8 atmosphériques chez Audi Sport avant le passage au V6 biturbo.",
    timeline: [
      { year: 2010, model: 'RS5 B8', note: 'Première génération V8 4.2L' },
      { year: 2012, model: 'RS5 Cabriolet', note: 'Version décapotable' },
      { year: 2016, model: 'RS5 B8 facelift', note: 'Dernière évolution V8' },
      { year: 2017, model: 'RS5 B9', note: 'V6 biturbo 450 ch' }
    ]
  },
  {
    id: 'rs3-2022',
    name: 'RS3 2022',
    brand: 'Audi',
    power: 400,
    weight: 1570,
    acceleration: 3.8,
    topSpeed: 290,
    torque: 500,
    transmission: 'Auto',
    gears: 7,
    consumption: 8.9,
    price: 65000,
    image: 'assets/images/voitures/rs3-2022.jpg',
    history: "L'Audi RS3 2022 (8Y) pousse le concept de compacte sportive à son paroxysme. Son 5-cylindres turbo de 2.5L TFSI développe 400 ch, un record pour cette cylindrée. Le système Torque Splitter permet de répartir le couple entre les roues arrière pour un comportement plus joueur. Avec un 0-100 km/h en 3.8 secondes, elle rivalise avec des supercars. Son design agressif et sa sonorité unique en font l'une des compactes les plus désirables du marché.",
    timeline: [
      { year: 2011, model: 'RS3 8P', note: 'Première génération 340 ch' },
      { year: 2015, model: 'RS3 8V', note: '367 ch puis 400 ch' },
      { year: 2017, model: 'RS3 Berline', note: 'Version 4 portes' },
      { year: 2022, model: 'RS3 8Y', note: 'Torque Splitter 400 ch' }
    ]
  },
  {
    id: 'skyline-r34',
    name: 'Skyline R34',
    brand: 'Nissan',
    power: 280,
    weight: 1560,
    acceleration: 4.8,
    topSpeed: 250,
    torque: 392,
    transmission: 'Manuelle',
    gears: 6,
    consumption: 11.5,
    price: 45000,
    image: 'assets/images/voitures/r34.jpg',
    history: "La Nissan Skyline GT-R R34 (1999-2002) est une légende vivante du monde automobile. Son moteur RB26DETT 6-cylindres en ligne biturbo de 2.6L développe officiellement 280 ch (bridage japonais), mais la réalité est proche de 330 ch. Son système ATTESA E-TS Pro et son différentiel actif LSD en font une machine redoutable sur circuit. Popularisée par Fast & Furious, elle reste l'une des JDM les plus iconiques. Son potentiel de préparation illimité et sa rareté en font un investissement prisé des collectionneurs.",
    timeline: [
      { year: 1989, model: 'Skyline R32 GT-R', note: 'Godzilla est né' },
      { year: 1995, model: 'Skyline R33 GT-R', note: 'Version plus lourde' },
      { year: 1999, model: 'Skyline R34 GT-R', note: 'Apogée de la lignée' },
      { year: 2007, model: 'GT-R R35', note: 'Nouvelle ère sans Skyline' }
    ]
  },
  {
    id: 'gtr-r35',
    name: 'Nissan GTR R35',
    brand: 'Nissan',
    power: 570,
    weight: 1740,
    acceleration: 2.7,
    topSpeed: 315,
    torque: 637,
    transmission: 'Auto',
    gears: 6,
    consumption: 11.8,
    price: 115000,
    image: 'assets/images/voitures/r35.jpg',
    history: "La Nissan GT-R R35 lancée en 2007 a révolutionné le monde des supercars. Son V6 biturbo VR38DETT de 3.8L développe 570 ch dans les versions récentes. Sa transmission double embrayage et son système ATTESA E-TS 4WD offrent des performances époustouflantes. Surnommée 'Godzilla', elle bat des supercars bien plus chères sur circuit. Constamment améliorée depuis 15 ans, elle reste une référence absolue en termes de rapport performance/prix. Son électronique sophistiquée compense son poids élevé.",
    timeline: [
      { year: 2007, model: 'GT-R R35', note: '480 ch - Révolution' },
      { year: 2011, model: 'GT-R Spec V', note: 'Version allégée' },
      { year: 2017, model: 'GT-R Nismo', note: '600 ch' },
      { year: 2020, model: 'GT-R 50th Anniversary', note: '570 ch' }
    ]
  },
  {
    id: 'megane-rs-2010',
    name: 'Megane RS 2010',
    brand: 'Renault',
    power: 275,
    weight: 1387,
    acceleration: 6.0,
    topSpeed: 245,
    torque: 340,
    transmission: 'Manuelle',
    gears: 6,
    consumption: 8.2,
    price: 32000,
    image: 'assets/images/voitures/megane-rs.jpg',
    history: "La Renault Mégane RS III de 2010 incarne l'excellence française en matière de compactes sportives. Son moteur 2.0L turbo développe 250 ch en standard, avec possibilité de pousser jusqu'à 275 ch via le mode Sport/bouton de suralimentation. Associé à un châssis Cup ultra-affûté et un différentiel autobloquant mécanique, il offre une précision chirurgicale. Élue meilleure traction du Nürburgring pendant des années, elle a établi de nombreux records. Son rapport poids/puissance et son agilité en font une référence pour les puristes du pilotage.",
    timeline: [
      { year: 2004, model: 'Mégane RS II', note: '225 ch - Première RS moderne' },
      { year: 2010, model: 'Mégane RS III', note: '250 ch - Châssis Cup' },
      { year: 2014, model: 'Mégane RS Trophy', note: '275 ch' },
      { year: 2018, model: 'Mégane RS IV', note: '300 ch - 4 roues directrices' }
    ]
  }
];

// État global
let darkMode = localStorage.getItem('darkMode') === 'true';

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
  initStructuredData();
  initFAQ();
  initDarkMode();
  initMenu();
  initSlider();
  initCarGrid();
  initComparator();
  initSearch();
  initLazyLoading();
  initSmoothScroll();
});

// Dark Mode
function initDarkMode() {
  if (darkMode) document.body.classList.add('dark-mode');
  
  const toggle = document.getElementById('dark-mode-toggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      darkMode = !darkMode;
      document.body.classList.toggle('dark-mode');
      localStorage.setItem('darkMode', darkMode);
    });
  }
}

// Menu hamburger
function initMenu() {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  
  if (burger) {
    burger.addEventListener('click', () => {
      nav.classList.toggle('active');
      burger.classList.toggle('active');
    });
  }
}

// Slider hero
function initSlider() {
  const slider = document.querySelector('.hero-slider');
  if (!slider) return;
  
  let currentSlide = 0;
  slider.innerHTML = '';
  
  cars.forEach((car, i) => {
    const slide = document.createElement('div');
    slide.className = `slide ${i === 0 ? 'active' : ''}`;
    slide.style.backgroundImage = `url(${car.image})`;
    
    const content = document.createElement('div');
    content.className = 'slide-content';
    content.innerHTML = `<h2>${car.name}</h2><p>${car.power} ch • ${car.acceleration}s (0-100)</p>`;
    
    const btn = document.createElement('a');
    btn.className = 'btn';
    btn.textContent = 'Voir la collection';
    btn.href = '#cars';
    
    content.appendChild(btn);
    slide.appendChild(content);
    slider.appendChild(slide);
  });
  
  setInterval(() => {
    const slides = slider.querySelectorAll('.slide');
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
  }, 5000);
}

// Grille de voitures
function initCarGrid() {
  const grid = document.getElementById('car-grid');
  if (!grid) return;
  
  cars.forEach(car => {
    const card = document.createElement('div');
    card.className = 'car-card';
    card.dataset.brand = car.brand;
    card.dataset.power = car.power;
    card.dataset.weight = car.weight;
    card.dataset.price = car.price;
    card.dataset.accel = car.acceleration;
    card.innerHTML = `
      <img src="${car.image}" alt="${car.name}" loading="lazy" decoding="async">
      <div class="car-info">
        <h3>${car.name}</h3>
        <p class="brand">${car.brand}</p>
        <p>${car.power} ch</p>
        <a href="pages-voitures/voiture-${car.id}.html" class="btn-small">Voir détails</a>
      </div>
    `;
    grid.appendChild(card);
  });
}

function initStructuredData() {
  const existingSchema = document.querySelector('script[data-generated-schema="true"]');
  if (existingSchema) return;

  const path = window.location.pathname;
  const pageName = path.split('/').pop() || 'index.html';
  let schema = null;
  const siteBaseUrl = getSiteBaseUrl();
  const absoluteOrRelative = (relativePath) => {
    if (!siteBaseUrl) return relativePath;
    return siteBaseUrl + relativePath;
  };

  if (pageName === 'index.html' || pageName === '') {
    schema = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebSite',
          '@id': absoluteOrRelative('/#website'),
          name: 'RevSpec',
          url: absoluteOrRelative('/'),
          description: 'Comparateur de performances automobiles : 0-100, puissance, vitesse max. Fiches techniques et historique des versions BMW M, Audi RS, Nissan GT-R.',
          potentialAction: {
            '@type': 'SearchAction',
            target: absoluteOrRelative('/?search={search_term_string}'),
            'query-input': 'required name=search_term_string'
          }
        },
        {
          '@type': 'Organization',
          '@id': absoluteOrRelative('/#organization'),
          name: 'RevSpec',
          url: absoluteOrRelative('/'),
          logo: absoluteOrRelative('/assets/images/voitures/r35.jpg')
        }
      ]
    };
  }

  if (pageName.startsWith('voiture-') && pageName.endsWith('.html')) {
    const carId = pageName.replace('voiture-', '').replace('.html', '');
    const car = cars.find(item => item.id === carId);
    const pageUrl = absoluteOrRelative(`/pages-voitures/${pageName}`);

    if (car) {
      schema = {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Car',
            '@id': `${pageUrl}#car`,
            name: car.name,
            brand: {
              '@type': 'Brand',
              name: car.brand
            },
            model: car.name,
            vehicleConfiguration: car.transmission,
            fuelConsumption: `${car.consumption} L/100km`,
            speed: {
              '@type': 'QuantitativeValue',
              value: car.topSpeed,
              unitCode: 'KMH'
            },
            image: absoluteOrRelative('/' + car.image),
            description: car.history,
            offers: {
              '@type': 'Offer',
              priceCurrency: 'EUR',
              price: car.price,
              availability: 'https://schema.org/InStock',
              url: pageUrl
            }
          },
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Accueil',
                item: absoluteOrRelative('/index.html')
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: car.name,
                item: pageUrl
              }
            ]
          }
        ]
      };
    }
  }

  if (!schema) return;

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.dataset.generatedSchema = 'true';
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
}

function initFAQ() {
  const path = window.location.pathname;
  const pageName = path.split('/').pop() || '';
  if (!pageName.startsWith('voiture-') || !pageName.endsWith('.html')) return;

  const carId = pageName.replace('voiture-', '').replace('.html', '');
  const car = cars.find(c => c.id === carId);
  if (!car) return;

  const faqs = [
    {
      q: `Quelle est la puissance de la ${car.name} ?`,
      a: `La ${car.name} développe ${car.power} ch et ${car.torque} Nm de couple, transmis via une boîte ${car.transmission.toLowerCase()} à ${car.gears} rapports.`
    },
    {
      q: `Quel est le 0-100 km/h de la ${car.name} ?`,
      a: `La ${car.name} abat le 0-100 km/h en ${car.acceleration} secondes.`
    },
    {
      q: `Quelle est la vitesse maximale de la ${car.name} ?`,
      a: `La ${car.name} atteint une vitesse maximale de ${car.topSpeed} km/h.`
    },
    {
      q: `Quel est le poids de la ${car.name} ?`,
      a: `La ${car.name} pèse ${car.weight} kg.`
    },
    {
      q: `Quel est le prix neuf de la ${car.name} ?`,
      a: `Le prix neuf de la ${car.name} est de ${car.price.toLocaleString('fr-FR')} €.`
    }
  ];

  // Bloc HTML visible (requis par Google)
  const section = document.createElement('div');
  section.className = 'faq-section';
  section.innerHTML = `<h2>Questions fréquentes</h2>` +
    faqs.map(faq => `
      <details class="faq-item">
        <summary class="faq-question">${faq.q}</summary>
        <div class="faq-answer">${faq.a}</div>
      </details>`).join('');

  const timeline = document.querySelector('.timeline');
  if (timeline) timeline.insertAdjacentElement('afterend', section);

  // JSON-LD FAQPage
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a
      }
    }))
  };

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
}

function getSiteBaseUrl() {
  if (!window.location || !window.location.origin || window.location.origin === 'null') {
    return '';
  }

  if (window.location.origin.startsWith('http')) {
    return window.location.origin;
  }

  return '';
}

// Comparateur
function initComparator() {
  const select1 = document.getElementById('car-select-1');
  const select2 = document.getElementById('car-select-2');
  const compareBtn = document.getElementById('compare-btn');
  
  if (!select1 || !select2) return;
  
  cars.forEach(car => {
    select1.innerHTML += `<option value="${car.id}">${car.name}</option>`;
    select2.innerHTML += `<option value="${car.id}">${car.name}</option>`;
  });
  
  if (compareBtn) {
    compareBtn.addEventListener('click', () => {
      const car1 = cars.find(c => c.id === select1.value);
      const car2 = cars.find(c => c.id === select2.value);
      
      if (car1 && car2) showComparisonModal(car1, car2);
    });
  }
}

// Modal de comparaison
function showComparisonModal(car1, car2) {
  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close">&times;</span>
      <h2>Comparaison</h2>
      <div class="comparison-table">
        <table>
          <thead>
            <tr>
              <th>Caractéristique</th>
              <th>${car1.name}</th>
              <th>${car2.name}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Puissance</td>
              <td class="${car1.power > car2.power ? 'winner' : ''}">${car1.power} ch</td>
              <td class="${car2.power > car1.power ? 'winner' : ''}">${car2.power} ch</td>
            </tr>
            <tr>
              <td>0-100 km/h</td>
              <td class="${car1.acceleration < car2.acceleration ? 'winner' : ''}">${car1.acceleration}s</td>
              <td class="${car2.acceleration < car1.acceleration ? 'winner' : ''}">${car2.acceleration}s</td>
            </tr>
            <tr>
              <td>Poids</td>
              <td class="${car1.weight < car2.weight ? 'winner' : ''}">${car1.weight} kg</td>
              <td class="${car2.weight < car1.weight ? 'winner' : ''}">${car2.weight} kg</td>
            </tr>
            <tr>
              <td>Vitesse max</td>
              <td class="${car1.topSpeed > car2.topSpeed ? 'winner' : ''}">${car1.topSpeed} km/h</td>
              <td class="${car2.topSpeed > car1.topSpeed ? 'winner' : ''}">${car2.topSpeed} km/h</td>
            </tr>
            <tr>
              <td>Prix</td>
              <td class="${car1.price < car2.price ? 'winner' : ''}">${car1.price.toLocaleString()} €</td>
              <td class="${car2.price < car1.price ? 'winner' : ''}">${car2.price.toLocaleString()} €</td>
            </tr>
          </tbody>
        </table>
        <div class="performance-bars">
          <div class="perf-bar">
            <span>${car1.name}</span>
            <div class="bar"><div class="fill" style="width: ${calculatePerformance(car1)}%"></div></div>
            <span>${calculatePerformance(car1)}%</span>
          </div>
          <div class="perf-bar">
            <span>${car2.name}</span>
            <div class="bar"><div class="fill" style="width: ${calculatePerformance(car2)}%"></div></div>
            <span>${calculatePerformance(car2)}%</span>
          </div>
        </div>
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);
  modal.style.display = 'flex';
  
  modal.querySelector('.close').addEventListener('click', () => {
    modal.remove();
  });
  
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.remove();
  });
}

// Calcul performance globale
function calculatePerformance(car) {
  const powerScore = (car.power / 600) * 30;
  const accelScore = (6 - car.acceleration) / 6 * 30;
  const speedScore = (car.topSpeed / 350) * 25;
  const weightScore = (2000 - car.weight) / 2000 * 15;
  return Math.round(powerScore + accelScore + speedScore + weightScore);
}

// Recherche
function initSearch() {
  const searchInput = document.getElementById('search-input');
  const filterPower = document.getElementById('filter-power');
  const filterWeight = document.getElementById('filter-weight');
  const filterPrice = document.getElementById('filter-price');
  const filterAccel = document.getElementById('filter-accel');
  const resetBtn = document.getElementById('reset-filters');
  
  if (!searchInput) return;
  
  function applyFilters() {
    const query = searchInput.value.toLowerCase();
    const power = filterPower.value;
    const weight = filterWeight.value;
    const price = filterPrice.value;
    const accel = filterAccel.value;
    
    document.querySelectorAll('.car-card').forEach(card => {
      const name = card.querySelector('h3').textContent.toLowerCase();
      const brand = card.dataset.brand.toLowerCase();
      const cardPower = parseInt(card.dataset.power);
      const cardWeight = parseInt(card.dataset.weight);
      const cardPrice = parseInt(card.dataset.price);
      const cardAccel = parseFloat(card.dataset.accel);
      
      let show = (name.includes(query) || brand.includes(query));
      
      if (show && power) {
        if (power === '0-300') show = cardPower <= 300;
        else if (power === '300-400') show = cardPower > 300 && cardPower <= 400;
        else if (power === '400-500') show = cardPower > 400 && cardPower <= 500;
        else if (power === '500+') show = cardPower > 500;
      }
      
      if (show && weight) {
        if (weight === '0-1500') show = cardWeight <= 1500;
        else if (weight === '1500-1700') show = cardWeight > 1500 && cardWeight <= 1700;
        else if (weight === '1700-1900') show = cardWeight > 1700 && cardWeight <= 1900;
        else if (weight === '1900+') show = cardWeight > 1900;
      }
      
      if (show && price) {
        if (price === '0-50000') show = cardPrice <= 50000;
        else if (price === '50000-80000') show = cardPrice > 50000 && cardPrice <= 80000;
        else if (price === '80000-120000') show = cardPrice > 80000 && cardPrice <= 120000;
        else if (price === '120000+') show = cardPrice > 120000;
      }
      
      if (show && accel) {
        if (accel === '0-4') show = cardAccel <= 4;
        else if (accel === '4-5') show = cardAccel > 4 && cardAccel <= 5;
        else if (accel === '5-6') show = cardAccel > 5 && cardAccel <= 6;
        else if (accel === '6+') show = cardAccel > 6;
      }
      
      card.style.display = show ? 'block' : 'none';
    });
  }
  
  searchInput.addEventListener('input', applyFilters);
  filterPower.addEventListener('change', applyFilters);
  filterWeight.addEventListener('change', applyFilters);
  filterPrice.addEventListener('change', applyFilters);
  filterAccel.addEventListener('change', applyFilters);
  
  resetBtn.addEventListener('click', () => {
    searchInput.value = '';
    filterPower.value = '';
    filterWeight.value = '';
    filterPrice.value = '';
    filterAccel.value = '';
    applyFilters();
  });
}

// Lazy loading
function initLazyLoading() {
  const images = document.querySelectorAll('img[loading="lazy"]');
  
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src || img.src;
          observer.unobserve(img);
        }
      });
    });
    
    images.forEach(img => observer.observe(img));
  }
}

// Smooth scroll
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

// Active link highlighting
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 100) {
      current = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// Export pour pages individuelles
if (typeof window !== 'undefined') {
  window.cars = cars;
  window.darkMode = darkMode;
  window.initDarkMode = initDarkMode;
}
