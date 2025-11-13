# 📘 Guide d'Installation et de Configuration - CFPAM GROUP

## 🚀 Installation du Projet

### Prérequis
- **Node.js** (version 18 ou supérieure) : [Télécharger Node.js](https://nodejs.org/)
- **npm** (généralement inclus avec Node.js)
- Un éditeur de code (VS Code recommandé)

### Étapes d'Installation

1. **Cloner ou télécharger le projet**
   ```bash
   # Si vous utilisez Git
   git clone <url-du-projet>
   cd cfpam-group
   
   # OU téléchargez et décompressez le projet
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Lancer le serveur de développement**
   ```bash
   npm run dev
   ```

4. **Accéder à l'application**
   - Ouvrez votre navigateur à l'adresse : `http://localhost:5173`

---

## ⚙️ Configuration

### Configuration du Backend API

Le site communique avec votre backend Laravel via des API. Vous devez configurer l'URL de votre backend :

#### 1. Page de Pré-inscription (`src/pages/PreInscription.tsx`)
```typescript
// Ligne 15 - Modifier cette URL
const API_URL = "https://votre-domaine-backend.com/api";
```

#### 2. Page des Étudiants (`src/pages/Etudiants.tsx`)
```typescript
// Ligne 11 - Modifier cette URL
const API_URL = "https://votre-domaine-backend.com/api";
```

**Remplacez** `https://votre-domaine-backend.com/api` par l'URL réelle de votre backend Laravel.

### Configuration de Google Maps

Pour afficher la carte interactive dans la page Contact :

1. Obtenez une clé API Google Maps :
   - Visitez : [Google Cloud Console](https://console.cloud.google.com/)
   - Créez un projet
   - Activez l'API "Maps JavaScript API"
   - Créez des identifiants (clé API)

2. Dans l'application :
   - Naviguez vers la page Contact
   - La carte affichera un formulaire pour entrer votre clé API
   - Entrez votre clé et cliquez sur "Enregistrer"
   - La clé sera stockée dans le localStorage de votre navigateur

**Note** : Pour une utilisation en production, il est recommandé d'implémenter la gestion de la clé API côté serveur.

### Coordonnées de la Carte

Pour modifier les coordonnées de localisation :

**Fichier** : `src/components/GoogleMap.tsx` (ligne 15-18)
```typescript
const center = {
  lat: 3.8667,  // Latitude de votre emplacement
  lng: 11.5167, // Longitude de votre emplacement
};
```

---

## 🏗️ Architecture du Projet

### Structure des Dossiers

```
cfpam-group/
├── public/                      # Fichiers statiques publics
│   └── robots.txt              # Configuration SEO pour robots
├── src/
│   ├── components/             # Composants réutilisables
│   │   ├── Home/              # Composants de la page d'accueil
│   │   │   └── HeroCarousel.tsx  # Carrousel des entités
│   │   ├── Layout/            # Composants de mise en page
│   │   │   ├── Header.tsx        # En-tête avec navigation
│   │   │   ├── Footer.tsx        # Pied de page
│   │   │   └── WhatsAppButton.tsx # Bouton WhatsApp flottant
│   │   ├── ui/                # Composants UI (shadcn/ui)
│   │   └── GoogleMap.tsx      # Composant carte Google Maps
│   ├── pages/                 # Pages de l'application
│   │   ├── Index.tsx             # Page d'accueil
│   │   ├── CentreFormation.tsx   # Page Centre de Formation
│   │   ├── AutoEcole.tsx         # Page Auto-École
│   │   ├── Cooperative.tsx       # Page Coopérative
│   │   ├── PreInscription.tsx    # Formulaire pré-inscription
│   │   ├── Etudiants.tsx         # Liste des étudiants
│   │   ├── Galerie.tsx           # Galerie photo/vidéo
│   │   ├── Actualites.tsx        # Page actualités
│   │   ├── Contact.tsx           # Page contact avec carte
│   │   └── NotFound.tsx          # Page 404
│   ├── hooks/                 # Hooks React personnalisés
│   ├── lib/                   # Utilitaires
│   │   └── utils.ts              # Fonctions utilitaires
│   ├── App.tsx                # Composant racine avec routing
│   ├── main.tsx               # Point d'entrée de l'app
│   └── index.css              # Styles globaux et variables CSS
├── index.html                 # Template HTML principal
├── tailwind.config.ts         # Configuration Tailwind CSS
├── vite.config.ts            # Configuration Vite
└── package.json              # Dépendances du projet
```

### Technologies Utilisées

- **React 18.3** : Bibliothèque UI
- **TypeScript** : Typage statique
- **Vite** : Build tool ultra-rapide
- **React Router 6** : Navigation
- **Tailwind CSS** : Styles utilitaires
- **shadcn/ui** : Composants UI accessibles
- **Lucide React** : Icônes
- **React Hook Form + Zod** : Gestion des formulaires et validation
- **TanStack Query** : Gestion des requêtes API
- **@react-google-maps/api** : Intégration Google Maps

### Design System

Le site utilise un système de design cohérent basé sur des tokens CSS :

**Fichier** : `src/index.css`
- **Variables de couleurs** : Définies en HSL pour chaque entité
- **Animations** : Définies via Tailwind
- **Thèmes** : Support dark/light mode

**Entités et leurs couleurs** :
- **Centre de Formation** : Bleu (#2563eb) et Violet (#8b5cf6)
- **Auto-École** : Orange (#f97316) et Rouge (#ef4444)
- **Coopérative** : Vert (#10b981) et Cyan (#06b6d4)
- **Accent principal** : Jaune (#fbbf24)

---

## 📄 Pages et Fonctionnalités

### 1. **Page d'Accueil** (`/`)
- Carrousel interactif présentant les 3 entités
- Sections "À propos", "Pourquoi nous choisir"
- Statistiques du centre
- Call-to-action vers pré-inscription

### 2. **Centre de Formation** (`/centre-formation`)
- Présentation détaillée des formations
- Diplômes : AQP, CQP, DQP, BTS
- Filières : Secrétariat, Audiovisuel, Beauté, Digital, Gestion, Comptabilité, Commerce, Informatique
- Informations sur pièces à fournir et coûts
- Bonus offerts

### 3. **Auto-École** (`/auto-ecole`)
- Informations Permis A et Permis B
- Cours théoriques et pratiques
- Tarifs et modalités

### 4. **Coopérative** (`/cooperative`)
- Page placeholder (contenu à venir)

### 5. **Pré-inscription** (`/pre-inscription`)
- Formulaire multi-étapes
- Validation des données
- Envoi vers backend Laravel via API POST `/api/pre-inscription`
- Gestion d'erreurs (affiche toast si API échoue)

### 6. **Liste des Étudiants** (`/etudiants`)
- Filtrage par entité : GET `/api/etudiants/entite/{entite}`
- Filtrage par filière : GET `/api/etudiants/filiere/{filiere}`
- Affichage de données de démonstration si API échoue

### 7. **Galerie** (`/galerie`)
- Photos et vidéos classées par catégories
- Effets hover interactifs
- Images placeholder (à remplacer)

### 8. **Actualités** (`/actualites`)
- Page placeholder (contenu à venir)

### 9. **Contact** (`/contact`)
- Informations de contact (téléphone, email, adresse)
- Horaires d'ouverture
- Boutons d'action rapide (appel, WhatsApp, email)
- **Carte Google Maps interactive**

---

## 🔧 Modifier le Contenu

### Remplacer les Données Fictives

Les données entre crochets `[...]` sont fictives et doivent être remplacées :

#### Exemple dans `CentreFormation.tsx` :
```typescript
// Recherchez les sections avec [...]
{
  year: "[2015]",  // ← À remplacer par la vraie année
  title: "[Histoire du CFPAM]",  // ← À remplacer
  description: "[Texte descriptif réel]",  // ← À remplacer
}
```

### Modifier les Images

Les images utilisent actuellement des URLs Unsplash (placeholder).

**Pour remplacer une image** :
1. Placez votre image dans le dossier `public/images/`
2. Mettez à jour le chemin :
   ```typescript
   // Avant
   src="https://images.unsplash.com/photo-xxx"
   
   // Après
   src="/images/votre-image.jpg"
   ```

### Ajouter une Nouvelle Page

1. **Créer le fichier de page** :
   ```bash
   src/pages/NouvellePagedePage.tsx
   ```

2. **Créer le composant** :
   ```typescript
   const NouvellePage = () => {
     return (
       <div className="min-h-screen py-12">
         <h1>Ma Nouvelle Page</h1>
       </div>
     );
   };
   export default NouvellePage;
   ```

3. **Ajouter la route dans `App.tsx`** :
   ```typescript
   // Importer en lazy loading
   const NouvellePage = lazy(() => import("./pages/NouvellePage"));
   
   // Ajouter dans <Routes>
   <Route path="/nouvelle-page" element={<NouvellePage />} />
   ```

4. **Ajouter dans la navigation (`Header.tsx`)** :
   ```typescript
   const navLinks = [
     // ... liens existants
     { name: "Nouvelle Page", path: "/nouvelle-page" },
   ];
   ```

### Modifier les Couleurs du Design System

**Fichier** : `src/index.css`

```css
:root {
  /* Modifier les couleurs principales */
  --primary: 221 83% 53%;        /* Bleu principal */
  --secondary: 45 93% 47%;       /* Jaune */
  --formation-primary: 262 83% 58%;  /* Violet */
  /* ... etc */
}
```

**Appliquer dans Tailwind** : `tailwind.config.ts`
```typescript
colors: {
  primary: {
    DEFAULT: "hsl(var(--primary))",
    light: "hsl(var(--primary-light))",
    // ...
  },
}
```

---

## 📱 Responsive Design

Le site est entièrement responsive avec 3 breakpoints principaux :
- **Mobile** : < 768px
- **Tablette** : 768px - 1024px
- **Desktop** : > 1024px

Les classes Tailwind utilisées :
- `md:` pour tablette et plus
- `lg:` pour desktop
- `xl:` pour grands écrans

---

## 🎨 Animations

Le site utilise des animations CSS personnalisées définies dans `tailwind.config.ts` :

- **`animate-slide-up`** : Apparition en glissant vers le haut
- **`animate-fade-in`** : Fondu d'apparition
- **`hover-lift`** : Élévation au survol (défini dans `index.css`)

**Exemple d'utilisation** :
```typescript
<div className="animate-slide-up hover-lift">
  Contenu animé
</div>
```

---

## 🔒 SEO et Accessibilité

### SEO
- Balises `<title>` et `<meta description>` dans `index.html`
- Structure sémantique HTML5 (`<header>`, `<main>`, `<footer>`, `<section>`, `<article>`)
- Attributs `alt` sur toutes les images
- `robots.txt` configuré

### Accessibilité
- Navigation au clavier supportée
- Labels ARIA sur les boutons interactifs
- Contraste de couleurs conforme WCAG 2.1
- Composants shadcn/ui conformes aux standards d'accessibilité

---

## 📦 Build et Déploiement

### Build de Production

```bash
npm run build
```

Cela génère les fichiers optimisés dans le dossier `dist/`.

### Preview du Build

```bash
npm run preview
```

### Déploiement

Le projet peut être déployé sur :
- **Vercel** (recommandé pour React)
- **Netlify**
- **GitHub Pages**
- Tout hébergement supportant les SPA (Single Page Applications)

**Instructions Vercel** :
1. Installez Vercel CLI : `npm i -g vercel`
2. Déployez : `vercel`
3. Suivez les instructions

---

## 🐛 Dépannage

### Le site ne démarre pas
```bash
# Supprimez node_modules et réinstallez
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Les API ne fonctionnent pas
- Vérifiez l'URL du backend dans `PreInscription.tsx` et `Etudiants.tsx`
- Vérifiez que le backend Laravel est en cours d'exécution
- Vérifiez les CORS sur le backend Laravel
- Ouvrez la console du navigateur (F12) pour voir les erreurs

### Google Maps ne s'affiche pas
- Vérifiez que vous avez entré une clé API valide
- Vérifiez que l'API "Maps JavaScript API" est activée dans Google Cloud Console
- Vérifiez que votre clé API n'a pas de restrictions de domaine incompatibles

---

## 📞 Support

Pour toute question ou problème :
- **Email** : contact@cfpam-group.cm
- **Téléphone** : +237 655 511 512 / +237 677 401 841
- **WhatsApp** : +237 677 401 841

---

## 📝 Licence

Ce projet est la propriété de **CFPAM GROUP**. Tous droits réservés.

---

**Dernière mise à jour** : Novembre 2025
**Version** : 1.0.0
