# Site Web de l'Orchestre Harmonique l'Écho de Charbonnières

**⚠️  Projet en cours de développement - Certaines décisions ne sont pas encore finalisées. ⚠️**

## Description

Ce projet est la refonte en React du site web de l'orchestre harmonique l'Écho de Charbonnières (https://www.echo-de-charbonnieres.fr/). L'objectif est de créer une plateforme moderne, informative et attrayante pour présenter l'orchestre, ses activités, ses musiciens et ses événements à venir.

## Contexte et Objectifs

L'ancien site web peut présenter des limitations en termes de design, de fonctionnalités ou de facilité de mise à jour. Cette refonte en utilisant React, TypeScript et Vite vise à :

*   **Moderniser l'image de l'orchestre** avec un design actuel et une expérience utilisateur fluide.
*   **Fournir des informations complètes et à jour** sur l'orchestre (histoire, répertoire, musiciens).
*   **Mettre en avant les événements à venir** (concerts, répétitions publiques, etc.) avec des détails pertinents (date, heure, lieu, programme).
*   **Offrir des moyens de contact** pour les réservations, les demandes d'adhésion ou les renseignements.
*   **Potentiellement intégrer des éléments multimédias** (extraits musicaux, photos, vidéos) via les réseaux sociaux.
*   **Faciliter la gestion du contenu** pour les membres de l'orchestre avec un système d'administration basique.

## Technologies Principales

*   **Framework Front-end :** React
*   **Langage :** TypeScript
*   **Outil de Build :** Vite
*   **Styling :** Tailwind CSS
*   **Gestion de Version :** Git et GitHub

## Fonctionnalités Clés (Initiales)

*   **Page d'Accueil :** Présentation générale de l'orchestre, prochains événements marquants.
*   **Page "À Propos" (ou "L'Orchestre") :** Histoire de l'orchestre, informations sur le chef d'orchestre, les sections instrumentales, etc.
*   **Page "Musiciens" :** Présentation des membres de l'orchestre (facultatif, peut être sous forme de liste ou plus détaillée).
*   **Page "Concerts et Événements" :** Calendrier des événements à venir avec les détails (date, heure, lieu, programme, billetterie si applicable).
*   **Page "Répertoire" (Facultatif) :** Liste des œuvres jouées par l'orchestre. *L'inclusion de cette page est encore en discussion.*
*   **Page "Contact" :** Formulaire de contact ou informations pour joindre l'orchestre (adresse e-mail, téléphone).
*   **Galerie Multimédia (Facultatif) :** Photos et/ou extraits audio/vidéo des performances *L'intégration de la galerie est incertaine pour la première version.*.

## Décisions à Prendre

*   **Page "Musiciens":** Quelle forme donner à cette page ? Liste simple ou fiches détaillées ?
*   **Page "Répertoire":** Faut-il inclure cette page dans la première version ?
*   **Galerie Multimédia:** Est-ce que la galerie sera présente dans la première version ?

## Étapes Suivantes

Voici les prochaines étapes prévues pour le développement du site :

1.  **Création de la structure de base :** Définir l'arborescence des composants et des pages (en se basant sur la section "Structure du Projet").
2.  **Mise en place du routage :** Implémenter la navigation entre les différentes pages avec une librairie comme `react-router-dom`.
3.  **Développement des composants :** Créer les composants pour chaque section du site (en commençant par les pages principales : Accueil, À Propos, Concerts, etc.).
4.  **Intégration du style visuel :** Appliquer le design et l'identité visuelle de l'orchestre avec Tailwind CSS.
5.  **Ajout de contenu :** Intégrer les textes, images, et autres médias.
6.  **Implémentation des fonctionnalités:** Implémenter les fonctionnalités de chaque page.
7.  **Tests et corrections:** Tester le site et corriger les bugs.

## Comment Lancer le Projet Localement

1.  Clonez le dépôt : `git clone https://github.com/piirk/echo-de-charbonnieres-react`
2.  Naviguez vers le dossier du projet : `cd echo-de-charbonnieres-react`
3.  Installez les dépendances : `npm install` ou `yarn install` ou `pnpm install`
4.  Lancez le serveur de développement : `npm run dev` ou `yarn dev` ou `pnpm dev`

Le site sera accessible à `http://localhost:5173` (ou une autre adresse indiquée par Vite).

## Structure du Projet (Initial)

```plain text
echo-de-charbonnieres-react/
├── public/
│   └── ... (assets statiques)
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   ├── components/
│   │   ├── ... 
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── AboutPage.tsx
│   │   ├── ... 
│   ├── assets/
│   │   ├── images/
│   │   ├── ... (autres assets)
│   ├── ... (autres fichiers source)
├── index.html
```

## Licence

Ce code est la propriété exclusive de Baptiste BOUCHARECHAS.

## Liens Utiles

* Site web actuel : https://www.echo-de-charbonnieres.fr/
* GitHub : https://github.com/piirk/echo-de-charbonnieres-react

