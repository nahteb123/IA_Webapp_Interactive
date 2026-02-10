# TimeTravel Agency — Webapp Interactive

Webapp interactive pour une agence de voyage temporel fictive.
Le projet permet aux utilisateurs de découvrir différentes destinations temporelles,
d’interagir avec un agent conversationnel IA et de personnaliser leur expérience de voyage.

Projet réalisé dans le cadre d’un travail de groupe (4 personnes).

---

## Stack Technique

- **Framework** : Next.js (App Router)
- **Langage** : TypeScript
- **Styling** : Tailwind CSS
- **Animations** : Framer Motion
- **IA conversationnelle** : Mistral AI (API) / Widget chatbot
- **Génération UI** : v0.dev (Vercel)
- **Gestionnaire de paquets** : PNPM
- **Déploiement** : Vercel
- **Assets visuels** : Projet TimeTravel Agency (Projet 1)

---

## Fonctionnalités implémentées

- Landing page immersive avec Hero section
- Galerie de 3 destinations temporelles :
  - Paris 1889 (Belle Époque)
  - Crétacé -65 millions d’années
  - Florence 1504 (Renaissance)
- Cartes interactives avec images et animations
- Agent conversationnel IA :
  - Conseils personnalisés
  - Informations sur les destinations
  - FAQ automatisée
- Design responsive (mobile-first)
- Animations subtiles et micro-interactions

---

## Structure du projet

```
.
├── app/                # Pages Next.js (App Router)
├── components/         # Composants React (Hero, Destinations, Chatbot, Footer)
├── public/
│   └── images/         # Assets visuels (destinations)
├── styles/             # Styles globaux
├── tailwind.config.ts
├── next.config.mjs
├── package.json
├── pnpm-lock.yaml
```

---

## Installation & Exécution en local

⚠️ **Ce projet utilise PNPM (et non npm)**  
PNPM est requis pour installer correctement les dépendances.

### Installer PNPM (si nécessaire)

```bash
npm install -g pnpm
```

Vérifier l’installation :
```bash
pnpm -v
```

---

### Installer les dépendances

À la racine du projet :

```bash
pnpm install
```

---

### Lancer le serveur de développement

```bash
pnpm dev
```

---

### Accéder à l’application

Ouvrir dans le navigateur :

```
http://localhost:3000
```

---

##  Déploiement

Le projet est déployé sur **Vercel**.

- Déploiement automatique depuis le repository GitHub
- Compatible desktop et mobile
- Toutes les fonctionnalités sont actives en production

URL publique : **https://v0-luxury-time-travel-landing-page-iota.vercel.app/**

---

## IA utilisées

- **Génération de code UI** : v0.dev (Vercel)
- **Chatbot IA** : Mistral Small (API)
- **Visuels** : générés lors du Projet TimeTravel Agency précédent

---

##  Équipe

Projet réalisé en groupe (4 personnes) :

- BERMOND Ethan
- INSA NAKIB Elamine
- BOUZID Mehdy
- KHAYBULOV Egor

---

##  Licence

Projet pédagogique — M1 / M2 Digital & IA  
Usage strictement académique
