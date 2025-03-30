# Site Web de l'Orchestre Harmonique l'Écho de Charbonnières

**⚠️ Projet en cours de développement - Certaines décisions ne sont pas encore finalisées. ⚠️**

## Description

Ce projet est la refonte en React du site web de l'orchestre harmonique l'Écho de Charbonnières (https://www.echo-de-charbonnieres.fr/). L'objectif est de créer une plateforme moderne, informative et attrayante pour présenter l'orchestre, ses activités, ses musiciens et ses événements à venir.

## Contexte et Objectifs

L'ancien site web peut présenter des limitations en termes de design, de fonctionnalités ou de facilité de mise à jour. Cette refonte en utilisant React, TypeScript et Vite vise à :

- **Moderniser l'image de l'orchestre** avec un design actuel et une expérience utilisateur fluide.
- **Fournir des informations complètes et à jour** sur l'orchestre (histoire, répertoire, musiciens).
- **Mettre en avant les événements à venir** (concerts, répétitions publiques, etc.) avec des détails pertinents (date, heure, lieu, programme).
- **Offrir des moyens de contact** pour les réservations, les demandes d'adhésion ou les renseignements.
- **Potentiellement intégrer des éléments multimédias** (extraits musicaux, photos, vidéos) via les réseaux sociaux.
- **Faciliter la gestion du contenu** pour les membres de l'orchestre avec un système d'administration basique.

## Technologies Principales

- **Framework Front-end :** React v19.0.0
- **Langage :** TypeScript v5.7.2
- **Outil de Build :** Vite v6.2.0
- **Styling :** Tailwind CSS v4.0.17
- **Navigation :** React Router v7.4.1
- **UI Components :** Headless UI v2.2.0
- **Gestion de Version :** Git et GitHub
- **Tests :** Vitest v1.3.1
- **Linting :** ESLint v9.21.0
- **Formatage :** Prettier v3.5.3
- **Gestion des Formulaires :** React Hook Form (planifié pour la partie administration)

## État du Projet

### Pages Implémentées ✅
- Page d'Accueil
- Page À Propos
- Page Concerts
- Page Contact
- Page 404 (Not Found)

### Composants Réutilisables ✅
- Header avec navigation responsive
- Footer avec liens et informations
- Layout principal
- Composant de titre de page

### Fonctionnalités en Cours 🚧
- Système de billetterie
- Page des musiciens
- Optimisation mobile
- Animations de transition

### Fonctionnalités à Venir ⏳
- Page Répertoire
- Galerie Multimédia
- Interface d'administration
- Système de gestion des événements

### Tests et Qualité 🚧
- Tests unitaires à mettre en place
- Tests d'intégration à configurer
- Optimisation des performances
- SEO à implémenter

_Note : Les émojis indiquent l'état : ✅ Terminé, 🚧 En cours, ⏳ À venir_

## Fonctionnalités Clés (Initiales)

- **Page d'Accueil** ✅
  - Présentation générale de l'orchestre
  - Prochains événements marquants
  - Design moderne et responsive

- **Page "À Propos" (ou "L'Orchestre")** ✅
  - Histoire de l'orchestre
  - Informations sur le chef d'orchestre
  - Les sections instrumentales
  - Design élégant et informatif

- **Page "Concerts et Événements"** ✅
  - Calendrier des événements à venir
  - Détails des concerts (date, heure, lieu, programme)
  - Système de billetterie (à implémenter)

- **Page "Contact"** ✅
  - Formulaire de contact
  - Informations pour joindre l'orchestre
  - Validation des champs et gestion des erreurs

- **Page "Musiciens"** 🚧
  - Présentation des membres de l'orchestre
  - Format à définir (liste simple ou fiches détaillées)
  - _En cours de développement_

- **Page "Répertoire"** ⏳
  - Liste des œuvres jouées par l'orchestre
  - _Décision d'inclusion en attente_

- **Galerie Multimédia** ⏳
  - Photos des performances
  - Extraits audio/vidéo
  - _Décision d'inclusion en attente_

_Note : Les émojis indiquent l'état de développement : ✅ Implémenté, 🚧 En cours, ⏳ À venir_

## Décisions à Prendre

- **Page "Musiciens"** 🚧
  - Format de présentation : Liste simple vs Fiches détaillées
  - Informations à afficher : Photo, instrument, rôle dans l'orchestre, etc.
  - _En cours de discussion_

- **Page "Répertoire"** ⏳
  - Inclusion dans la première version
  - Organisation des œuvres (par période, par type, etc.)
  - _Décision en attente_

- **Galerie Multimédia** ⏳
  - Intégration dans la première version
  - Type de contenu (photos, vidéos, extraits audio)
  - Plateforme d'hébergement (YouTube, SoundCloud, etc.)
  - _Décision en attente_

- **Système de Billetterie** 🚧
  - Solution technique à choisir
  - Intégration avec un système de paiement
  - _En cours d'étude_

- **Interface d'Administration** ⏳
  - Besoins en termes de gestion de contenu
  - Niveau d'accès requis
  - _À définir_

_Note : Les émojis indiquent l'état de la décision : 🚧 En cours de discussion, ⏳ À discuter_

## Étapes Suivantes

Voici les prochaines étapes prévues pour le développement du site :

1. **Finalisation des pages existantes :**
   - Compléter le contenu de la page d'accueil avec les informations essentielles
   - Enrichir la page "À Propos" avec l'histoire de l'orchestre
   - Finaliser le formulaire de contact et la page des concerts

2. **Amélioration de l'expérience utilisateur :**
   - Optimiser la navigation mobile
   - Ajouter des animations de transition entre les pages
   - Implémenter un système de chargement progressif des images

3. **Intégration des fonctionnalités avancées :**
   - Mettre en place un système de gestion des événements
   - Créer une interface d'administration pour la mise à jour du contenu
   - Intégrer un système de réservation pour les concerts

4. **Optimisation et performance :**
   - Optimiser les images et les assets
   - Mettre en place le lazy loading des composants
   - Implémenter le SEO et les meta tags

5. **Tests et déploiement :**
   - Mettre en place des tests unitaires et d'intégration
   - Effectuer des tests de compatibilité cross-browser
   - Préparer le déploiement en production

6. **Documentation et maintenance :**
   - Documenter le code source
   - Créer un guide de maintenance
   - Mettre en place un système de monitoring

## Comment Lancer le Projet Localement

1.  Clonez le dépôt : `git clone https://github.com/piirk/echo-de-charbonnieres-react`
2.  Naviguez vers le dossier du projet : `cd echo-de-charbonnieres-react`
3.  Installez les dépendances : `npm install` ou `yarn install` ou `pnpm install`
4.  Lancez le serveur de développement : `npm run dev` ou `yarn dev` ou `pnpm dev`

Le site sera accessible à `http://localhost:3000` (ou une autre adresse indiquée par Vite).

## Structure du Projet

```plain text
echo-de-charbonnieres-react/
├── public/                    # Assets statiques
│   └── ... (images, fonts, etc.)
├── src/
│   ├── App.tsx                # Point d'entrée de l'application
│   ├── main.tsx               # Configuration React et styles globaux
│   ├── components/            # Composants réutilisables
│   │   ├── Header.tsx         # En-tête du site avec navigation
│   │   ├── Footer.tsx         # Pied de page
│   │   ├── Layout.tsx         # Layout principal de l'application
│   │   └── PageTitle.tsx      # Composant de titre de page
│   ├── pages/                 # Pages principales
│   │   ├── HomePage.tsx       # Page d'accueil
│   │   ├── AboutPage.tsx      # Page À propos
│   │   ├── ConcertsPage.tsx   # Page des concerts
│   │   ├── ContactPage.tsx    # Page de contact
│   │   └── NotFoundPage.tsx   # Page 404
│   ├── assets/                # Ressources statiques
│   │   ├── images/            # Images du projet
│   │   └── ... (autres assets)
│   ├── hooks/                 # Custom hooks React
│   ├── utils/                 # Fonctions utilitaires
│   ├── types/                 # Types TypeScript
│   └── index.css              # Styles globaux
├── index.html                 # Template HTML principal
├── vite.config.ts             # Configuration Vite
├── tailwind.config.js         # Configuration Tailwind CSS
├── tsconfig.json              # Configuration TypeScript
└── package.json               # Dépendances et scripts
```

_Note : Cette structure reflète l'état actuel du projet. De nouveaux dossiers et fichiers peuvent être ajoutés au fur et à mesure du développement._

## Licence

Ce code est la propriété exclusive de Baptiste BOUCHARECHAS.

## Liens Utiles

- Site web actuel : https://www.echo-de-charbonnieres.fr/
- GitHub : https://github.com/piirk/echo-de-charbonnieres-react
