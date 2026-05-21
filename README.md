# 🚇 Mobilités Toulousaines : Au cœur de la Ligne C

![Statut du Projet](https://img.shields.io/badge/Statut-Termin%C3%A9-success)
![Technologies](https://img.shields.io/badge/Stack-HTML5%20%7C%20CSS3%20%7C%20Vanilla%20JS-blue)
![Établissement](https://img.shields.io/badge/IUT-Toulouse%20Paul%20Sabatier-orange)

Bienvenue sur le dépôt du projet **Mobilités Toulousaines**, un webdocumentaire interactif conçu pour explorer les enjeux, le tracé et les futures stations de la Ligne C du métro toulousain (Tisséo).

🔗 **[Découvrir le Webdoc en ligne (Lien Pages)](#)** *(N'oublie pas de mettre ton lien GitHub Pages ici !)*

## 🎯 Contexte du Projet

Ce projet a été réalisé dans le cadre de la ressource **R2.13** du BUT Informatique. Il vise à informer et immerger l'utilisateur dans les transformations urbaines liées à la nouvelle ligne de métro, en combinant des données institutionnelles et une véritable enquête de terrain menée auprès des futurs usagers.

## ✨ Fonctionnalités Principales

* **🗺️ Carte Interactive (SVG) :** Navigation fluide et dynamique sur le tracé de la future ligne.
* **🚉 Fiches Stations Détaillées :** Pages générées dynamiquement via JavaScript incluant :
    * Vidéos immersives de présentation.
    * Carrousels d'images (visuels du projet et suivi de chantier).
    * Chiffres clés et analyses statistiques.
    * Paroles d'usagers issues de notre sondage.
* **📊 Tableau de Bord des Données :** Intégration des résultats de l'enquête (53 réponses) directement sur la page d'accueil.
* **📱 Design 100% Responsive :** Interface optimisée pour mobile, tablette et desktop (Thème Sombre & Vert Ligne C).
* **🎬 Expérience Immersive :** Écran d'introduction animé pour plonger l'utilisateur dans l'ambiance du réseau de transport.

## 🛠️ Stack Technique

* **Structure :** HTML5 sémantique.
* **Style :** CSS3 (Variables natives, CSS Grid, Flexbox, Animations).
* **Logique :** Vanilla JavaScript (ES6+), manipulation du DOM, gestion du `SessionStorage`, URLSearchParams pour le routage dynamique.

👥 L'Équipe (Groupe B)
Projet conçu et développé par les étudiants du BUT Informatique - IUT Toulouse Paul Sabatier :

Fauroux Eliott

Marcaillou

Karim

Rivero

Année universitaire 2025-2026

## 📂 Architecture du Projet

```text
📁 webdoc-ligne-c/
├── 📄 Index.html         # Page d'accueil, carte SVG et statistiques globales
├── 📄 Station.html       # Modèle dynamique pour chaque station
├── 📄 Thematique.html    # Modèle dynamique pour les axes d'analyse
├── 📄 style.css          # Feuille de style globale et responsive
├── 📄 script.js          # Base de données locales (JSON) et logique fonctionnelle
├── 📄 favicon.png        # Icône du site
└── 📁 assets/            # Vidéos, images de rendu et photos de chantier

