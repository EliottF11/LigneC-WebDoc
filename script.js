/**
 * script.js — Webdoc Ligne C Toulouse
 */

/* ============================================================
   ① DONNÉES DES STATIONS
   ============================================================ */
const STATIONS_DATA = [
  {
    id: "colomiers-gare",
    nom: "Colomiers Gare",
    cx: 90, cy: 490,
    estTerminus: true,
    terminus: "TERMINUS OUEST",
    themes: ["Mobilité", "Banlieue Ouest"],
    description:
      "Terminus occidental de la Ligne C, Colomiers Gare est un pôle d'échange multimodal " +
      "majeur connectant le réseau TER Occitanie au futur métro. " +
      "La commune de Colomiers, deuxième ville de la métropole toulousaine, " +
      "bénéficiera d'une liaison directe vers le cœur de Toulouse, " +
      "réduisant considérablement la dépendance à la voiture individuelle pour ses 40 000 habitants.",
    tags: ["Terminus Ouest", "Intermodalité TER", "Colomiers"],
    videoUrl: "assets/videos/colomiers.mp4",
    photos: ["assets/rendu_colomiers.webp", "assets/rendu1_colomiers.webp", "assets/rendu2_colomiers.webp", "assets/travaux_colomiers.webp", "assets/travaux1_colomiers.webp", "assets/travaux2_colomiers.webp"],
    avis: [
      { texte: "On attend vraiment l'arrivée de la ligne pour avoir enfin moins de bouchons sur la route.", profil: "Usager régulier de la route" },
      { texte: "Ça va nous apporter un vrai gain de temps au quotidien pour rejoindre le centre-ville.", profil: "Habitant de Toulouse" }
    ],
    analyse: "Le terminus Ouest répond à une attente critique de désenclavement pour la deuxième commune de la métropole métropolitaine. L'analyse des données de notre enquête montre une focalisation massive sur la productivité temporelle et la réduction des encombrements sur l'axe routier reliant la banlieue ouest au cœur de la ville.",
    chiffres: [
      { valeur: "40 000", libelle: "Habitants directement concernés" },
      { valeur: "-50 %", libelle: "De temps de trajet vers le centre (18 min contre 35 min)" }
    ]
  },
  {
    id: "ponts-jumeaux",
    nom: "Ponts‑Jumeaux",
    cx: 462, cy: 355,
    estTerminus: false,
    themes: ["Culture", "Patrimoine"],
    description:
      "Au confluent du Canal du Midi et du Canal de Brienne, les Ponts-Jumeaux constituent " +
      "l'un des sites patrimoniaux les plus emblématiques de Toulouse. " +
      "La station ouvrira cet espace historique au plus grand nombre, " +
      "renforçant l'attractivité d'un quartier en pleine mutation vers l'Est.",
    tags: ["Canal du Midi", "Patrimoine UNESCO", "Confluence"],
    videoUrl: "assets/videos/Pont Jumeaux.mp4",
    photos: ["assets/rendu_ponts-jumeaux.webp", "assets/rendu1_ponts-jumeaux.webp", "assets/rendu2_ponts-jumeaux.webp", "assets/travaux_ponts-jumeaux.webp", "assets/travaux1_ponts-jumeaux.webp", "assets/travaux2_ponts-jumeaux.webp"],
    avis: [
      { texte: "On espère que ça va réduire le trafic et amener beaucoup moins de pollution de l'air dans le secteur.", profil: "Riverain de la station" },
      { texte: "Pour nous, le grand point positif, c'est vraiment l'accès à Ernest vallon les jours de match.", profil: "Supporter du Stade Toulousain" }
    ],
    analyse: "Cette station incarne la dualité du projet entre valorisation patrimoniale et préoccupations écologiques. S'alignant sur la thématique dominante des réserves exprimées dans notre formulaire, les retours des répondants soulignent une vive inquiétude face au défrichage, à l'abattage d'arbres le long du Canal et à l'aspect jugé trop massif des viaducs aériens.",
    chiffres: [
      { valeur: "UNESCO", libelle: "Site classé au confluent des canaux" },
      { valeur: "1ère", libelle: "Source d'inquiétude : l'impact environnemental local" }
    ]
  },
  {
    id: "matabiau-marengo",
    nom: "Matabiau Gare / Marengo‑SNCF",
    cx: 573, cy: 350,
    estTerminus: false,
    themes: ["Mobilité", "Gare centrale"],
    description:
      "Nœud névralgique du réseau de transport toulousain, la station Matabiau / Marengo-SNCF " +
      "crée enfin une connexion directe entre la principale gare ferroviaire de Toulouse " +
      "et le réseau métro. Ce point de correspondance majeur simplifiera radicalement " +
      "les itinéraires de milliers de voyageurs régionaux et de navetteurs quotidiens.",
    tags: ["Gare Matabiau", "SNCF / TER", "Hub central"],
    videoUrl: "assets/videos/Matabiau.mp4",
    photos: ["assets/rendu_matabiau.webp", "assets/rendu1_matabiau.webp", "assets/rendu2_matabiau.webp", "assets/travaux_matabiau.webp", "assets/travaux1_matabiau.webp", "assets/travaux2_matabiau.webp"],
    avis: [
      { texte: "Le principal avantage de ce projet, ça sera d'avoir un accès plus facile à la gare Matabiau.", profil: "Voyageur régulier" },
      { texte: "On va enfin simplifier notre accès à la gare pour prendre nos trains sans faire de détours.", profil: "Usager des transports en commun" }
    ],
    analyse: "En tant que nœud multimodal absolu, l'intégration à la gare centrale est plébiscitée pour la simplification des trajets interurbains. Cependant, les volets budgétaires de l'enquête mettent en relief des réserves quant à l'enveloppe financière globale du projet, qualifiée par certains de prohibitive, et aux risques de dépassements de coûts.",
    chiffres: [
      { valeur: "Hub", libelle: "Connexion directe TER Occitanie, SNCF et Ligne A" },
      { valeur: "53", libelle: "Réponses globales collectées pour l'évaluation" }
    ]
  },
  {
    id: "francois-verdier",
    nom: "François Verdier",
    cx: 578, cy: 428,
    estTerminus: false,
    themes: ["Quartiers", "Lien social"],
    description:
      "Carrefour entre le centre-ville étendu et les quartiers populaires de l'Est toulousain, " +
      "François Verdier est une station à fort enjeu social. " +
      "Elle facilitera l'accès aux services, à l'emploi et à l'éducation " +
      "pour les habitants des quartiers prioritaires de sa zone d'influence.",
    tags: ["Quartiers prioritaires", "Accès emploi", "Lien social"],
    videoUrl: "assets/videos/F Verdier.mp4",
    photos: ["assets/rendu_francois-verdier.webp", "assets/rendu1_francois-verdier.webp", "assets/rendu2_francois-verdier.webp", "assets/travaux_francois-verdier.webp", "assets/travaux1_francois-verdier.webp", "assets/travaux2_francois-verdier.webp"],
    avis: [
      { texte: "On redoute d'avoir encore plus de monde dans le métro (déjà parfois saturé) aux heures de pointe.", profil: "Usager quotidien du métro" },
      { texte: "C'est compliqué de développer ça sachant qu'il n'y a pas de construction de parking supplémentaire pour pouvoir se garer.", profil: "Automobiliste" }
    ],
    analyse: "Point de contact stratégique avec la ligne B, cette station concentre les craintes de saturation structurelle du réseau de transport en commun existant. Les usagers s'inquiètent d'un afflux massif de voyageurs sans adaptation parallèle des infrastructures périphériques, comme la construction de parkings relais supplémentaires.",
    chiffres: [
      { valeur: "Ligne B", libelle: "Interconnexion majeure en centre-ville" },
      { valeur: "Immo", libelle: "Craintes exprimées sur la hausse des prix locaux" }
    ]
  },
  {
    id: "montaudran-gare",
    nom: "Montaudran Gare",
    cx: 637, cy: 562,
    estTerminus: false,
    themes: ["Innovation", "Aéronautique"],
    description:
      "Station phare de la Ligne C, Montaudran dessert le cœur de la Toulouse aéronautique " +
      "et scientifique. À proximité directe d'Airbus, de l'ISAE-SUPAERO et de la Halle de la Machine, " +
      "elle représente l'ambition économique et technologique du projet.",
    tags: ["Aéronautique", "ISAE-SUPAERO", "Halle de la Machine"],
    videoUrl: "assets/videos/Montaudran.mp4",
    photos: ["assets/rendu_montaudran.webp", "assets/rendu1_montaudran.webp", "assets/rendu2_montaudran.webp", "assets/travaux_montaudran.webp", "assets/travaux1_montaudran.webp", "assets/travaux2_montaudran.webp"],
    avis: [
      { texte: "On s'inquiète surtout des nuisances de chantier et du bruit pour ceux qui habitent ou travaillent à côté.", profil: "Personne habitant ou travaillant à proximité" },
      { texte: "C'est une belle avancée, mais visuellement je trouve les aqueducs assez massifs dans le paysage.", profil: "Habitant du quartier" }
    ],
    analyse: "Placée au cœur de l'écosystème aéronautique et universitaire, la station fait face à des réserves de proximité immédiate. L'analyse des formulaires met en avant l'impact direct de la phase de construction sur le quotidien des actifs, spécifiquement la durée prolongée des chantiers ainsi que les nuisances sonores pour les riverains.",
    chiffres: [
      { valeur: "25 000+", libelle: "Salariés sur l'axe Montaudran-Labège dépendants de la voiture" },
      { valeur: "Nuisances", libelle: "Inquiétudes fortes sur le bruit et la durée des travaux" }
    ]
  },
  {
    id: "labege-gare",
    nom: "Labège Gare",
    cx: 828, cy: 653,
    estTerminus: true,
    terminus: "TERMINUS EST",
    themes: ["Innovation", "Technopôle"],
    description:
      "Terminus oriental de la Ligne C, Labège Gare ancre le technopôle de Labège-Innopole " +
      "dans le réseau de mobilité métropolitain. Ce pôle d'activités qui emploie plus de 15 000 personnes " +
      "souffre depuis des décennies d'un accès en transports en commun insuffisant. " +
      "La Ligne C change radicalement la donne pour ses salariés et ses entreprises.",
    tags: ["Terminus Est", "Innopole", "Technopôle"],
    videoUrl: "assets/videos/Labège.mp4",
    photos: ["assets/rendu_labege.webp", "assets/rendu1_labege.webp", "assets/rendu2_labege.webp", "assets/travaux_labege.webp", "assets/travaux1_labege.webp", "assets/travaux2_labege.webp"],
    avis: [
      { texte: "C'est la solution qu'il nous fallait pour avoir un accès rapide à Labège sans bouchons le matin.", profil: "Salarié du technopôle" },
      { texte: "C'était vraiment indispensable pour le désengorgement de l'accès à Labège qui est toujours bouché.", profil: "Actif travaillant à Labège-Innopole" }
    ],
    analyse: "Le terminus oriental est configuré pour désengorger un pôle économique souffrant historiquement d'un accès insuffisant. L'analyse met en évidence une forte attente de déblocage routier, doublée d'inquiétudes financières sur les budgets des territoires (Sicoval) et sur la densification induite dans les secteurs limitrophes comme Ramonville.",
    chiffres: [
      { valeur: "15 000", libelle: "Emplois rattachés au technopôle de l'Innopole" },
      { valeur: "Sicoval", libelle: "Inquiétudes mentionnées sur le budget des territoires" }
    ]
  },
];

/* ============================================================
   ② DONNÉES DES THÈMES
   ============================================================ */
const THEMES_DATA = [
  {
    id: "mobilite",
    nom: "Mobilité & Fluidité",
    icone: "🚇",
    accroche: "Comment la Ligne C va transformer les déplacements des Toulousains et réduire la congestion urbaine.",
    paragraphes: [
      "La Ligne C représente une rupture majeure dans l'organisation des transports de la métropole toulousaine. En reliant Colomiers à Labège en passant par le cœur de la ville, elle crée un axe structurant est-ouest qui manquait cruellement au réseau existant. Les projections de Tisséo Collectivités estiment qu'elle détournera jusqu'à 30 000 véhicules par jour des axes routiers saturés.",
      "L'intermodalité est au cœur du projet : chaque station terminale est pensée comme un véritable hub multimodal, articulant le métro avec les réseaux TER, bus et vélo. Le temps de déplacement moyen entre Colomiers et le centre-ville passera de 35 à 18 minutes, une réduction de moitié qui reconfigurera les habitudes de travail de milliers de navetteurs quotidiens.",
      "Au-delà des chiffres, la Ligne C incarne un changement culturel dans le rapport à la voiture. En offrant une alternative fiable et rapide aux grands pôles d'emploi, elle rend concrètement envisageable pour des salariés de travailler sans utiliser leur véhicule personnel, une première dans ces zones périurbaines historiquement mono-modales.",
    ],
    chiffres: [
      { valeur: "30 000", unite: "véhicules/jour en moins sur les axes saturés" },
      { valeur: "18 min", unite: "Colomiers → Centre-ville (–50 %)" },
      { valeur: "6", unite: "stations éditoriales sur le tracé" },
      { valeur: "2030", unite: "ouverture estimée de la ligne" },
    ],
    citation: {
      texte: "Gain de temps, moins de bouchons (pollution), aéroport. Impatiente 😊.",
      auteur: "Habitant de Ramonville Saint-Agne.",
    },
  },
  {
    id: "ecologie",
    nom: "Transition Écologique",
    icone: "🌿",
    accroche: "Un projet structurant pour la mobilité durable : réduction carbone, renaturation et verdissement des abords de stations.",
    paragraphes: [
      "La Ligne C s'inscrit dans le Plan Climat Énergie Territorial de Toulouse Métropole, qui vise une réduction de 40 % des émissions de gaz à effet de serre d'ici 2030. En substituant des déplacements automobiles par des trajets en métro électrique, le projet contribuera à éviter l'émission de plus de 80 000 tonnes de CO₂ par an.",
      "Le chantier lui-même intègre des exigences environnementales inédites pour Toulouse : gestion rigoureuse des déblais, préservation des zones humides identifiées le long du tracé, et replantation systématique de 3 arbres pour chaque arbre abattu lors des travaux préparatoires.",
      "L'enjeu dépasse la simple réduction des émissions. La Ligne C est l'occasion de repenser l'espace public autour des stations : stationnements vélos sécurisés, trottoirs élargis, zones 30 dans les quartiers traversés. Ce changement contribue à l'adaptation au changement climatique en réduisant l'effet d'îlot de chaleur urbain.",
    ],
    chiffres: [
      { valeur: "80 000 t", unite: "de CO₂ évités par an (estimation Tisséo)" },
      { valeur: "3 pour 1", unite: "arbres replantés pour chaque arbre abattu" },
      { valeur: "–40 %", unite: "d'émissions visées d'ici 2030 (Plan Climat)" },
      { valeur: "100 %", unite: "d'énergie électrique — zéro émission directe" },
    ],
    citation: {
      texte: "Un pas de plus pour le climat.",
      auteur: "Habitant de Ramonville Saint-Agne.",
    },
  },
  {
    id: "quartiers",
    nom: "Nouveaux Quartiers",
    icone: "🏘️",
    accroche: "Des territoires en mutation autour des futures stations : logements, commerces et attractivité renforcée pour les zones périurbaines.",
    paragraphes: [
      "L'arrivée d'une station de métro transforme profondément la valeur et l'attractivité des quartiers qu'elle dessert. Les études urbaines montrent qu'une infrastructure lourde de transport en commun entraîne dans un rayon de 500 mètres une valorisation immobilière de 8 à 15 %, mais surtout une densification progressive de l'usage commercial et résidentiel.",
      "Le quartier des Ponts-Jumeaux illustre cette dynamique : longtemps en marge de la vie urbaine malgré son patrimoine exceptionnel, il est désormais au cœur d'un projet de réhabilitation de friches industrielles et de création d'une zone d'activités créatives. La future station catalyse l'intérêt des promoteurs et des associations.",
      "À Montaudran, la Ligne C vient compléter l'Aerospace Campus. La station permettra aux jeunes ingénieurs de s'installer dans des quartiers plus accessibles sans renoncer à leur emploi sur le site. C'est toute une géographie résidentielle qui se reconfigure autour de l'axe que dessine la future ligne.",
    ],
    chiffres: [
      { valeur: "+12 %", unite: "valorisation immobilière estimée (rayon 500 m)" },
      { valeur: "4", unite: "quartiers en projet de réaménagement autour des stations" },
      { valeur: "2 500", unite: "logements neufs prévus le long du tracé d'ici 2035" },
      { valeur: "1 km²", unite: "de friches industrielles en reconversion à Montaudran" },
    ],
    citation: {
      texte: "Toulouse a un grand retard pour son accessibilité en métro par rapport aux autres métropoles européennes. Il était temps de mieux desservir certains quartiers.",
      auteur: "Habitant de Fonsorbes.",
    },
  },
  {
    id: "etudiants",
    nom: "Étudiants & Travailleurs",
    icone: "🎓",
    accroche: "Témoignages de ceux qui attendent le plus cette ligne : étudiants de Montaudran, salariés d'Airbus, navetteurs quotidiens.",
    paragraphes: [
      "Toulouse accueille plus de 130 000 étudiants, dont une part significative suit ses études dans les campus scientifiques et technologiques de l'Est de la ville. Pour ces étudiants, le quotidien est souvent synonyme de galère de transport : bus saturés aux heures de pointe, vélos exposés aux intempéries, voitures partagées et précaires.",
      "Pour les travailleurs des zones d'activités de Labège et de Montaudran — plus de 25 000 salariés au total — la situation actuelle est paradoxale : des emplois parmi les mieux rémunérés de la région sont accessibles uniquement en voiture. Cette dépendance automobile pèse lourdement sur le pouvoir d'achat des salariés les moins bien payés et constitue un frein à l'embauche.",
      "Au-delà de la simple accessibilité, la Ligne C va transformer le rapport au temps de travail. Des salariés qui passaient 45 minutes à conduire pourront lire, travailler ou se reposer pendant ce même temps de trajet. Les entreprises du technopôle de Labège y voient un argument de recrutement majeur face à la concurrence des grandes métropoles.",
    ],
    chiffres: [
      { valeur: "130 000", unite: "étudiants à Toulouse, dont beaucoup sur l'axe est" },
      { valeur: "25 000+", unite: "salariés à Labège et Montaudran dépendants de la voiture" },
      { valeur: "30 min", unite: "temps de trajet Matabiau → Labège (futur métro)" },
      { valeur: "45 min", unite: "économisées par jour pour un navetteur en voiture" },
    ],
    citation: {
      texte: "Un gain de temps précieux et moins de bouchons pour aller étudier. C'est un projet avantageux et vraiment utile au quotidien.",
      auteur: "Etudiant de Toulouse.",
    },
  },
];

/* ============================================================
   ③ INITIALISATION DE LA CARTE
   ============================================================ */
function initCarte() {
  const tooltip = document.getElementById("tooltip");
  if (!tooltip) return;

  STATIONS_DATA.forEach((station) => {
    const groupe = document.getElementById(`station-${station.id}`);
    if (!groupe) return;

    groupe.addEventListener("mouseenter", (e) => afficherTooltip(e, station.nom, tooltip));
    groupe.addEventListener("mousemove",  (e) => positionnerTooltip(e, tooltip));
    groupe.addEventListener("mouseleave", ()  => masquerTooltip(tooltip));
    groupe.addEventListener("click",      ()  => gererClic(station));

    groupe.setAttribute("tabindex",  "0");
    groupe.setAttribute("role",      "button");
    groupe.setAttribute("aria-label", `Explorer la station ${station.nom}`);
    groupe.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        gererClic(station);
      }
    });

    if (station.estTerminus) animer(groupe);
  });

  _lierCartesThematiques();
}

function _lierCartesThematiques() {
  const mapping = {
    "Mobilité & Fluidité":      "mobilite",
    "Transition Écologique":    "ecologie",
    "Nouveaux Quartiers":       "quartiers",
    "Étudiants & Travailleurs": "etudiants",
  };

  document.querySelectorAll(".carte-thematique").forEach((carte) => {
    const titreEl = carte.querySelector("h3");
    if (!titreEl) return;

    const id = mapping[titreEl.textContent.trim()];
    if (!id) return;

    carte.style.cursor = "pointer";
    carte.setAttribute("role",      "button");
    carte.setAttribute("tabindex",  "0");
    carte.setAttribute("aria-label", `Explorer la thématique : ${titreEl.textContent.trim()}`);

    const naviguer = () => {
      window.location.href = `Thematique.html?id=${encodeURIComponent(id)}`;
    };
    carte.addEventListener("click", naviguer);
    carte.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); naviguer(); }
    });
  });
}

/* ============================================================
   ④ GESTION DU TOOLTIP
   ============================================================ */
function afficherTooltip(event, texte, tooltip) {
  tooltip.textContent = texte;
  tooltip.classList.add("visible");
  positionnerTooltip(event, tooltip);
}

function masquerTooltip(tooltip) {
  tooltip.classList.remove("visible");
}

/* ============================================================
   ⑤ POSITIONNEMENT DU TOOLTIP (anti-débordement)
   ============================================================ */
function positionnerTooltip(event, tooltip) {
  const wrapper = document.querySelector(".carte-wrapper");
  if (!wrapper) return;

  const rect = wrapper.getBoundingClientRect();
  let x = event.clientX - rect.left + 14;
  let y = event.clientY - rect.top  - 42;

  const largeurTooltip = 180;
  if (x + largeurTooltip > rect.width) {
    x = event.clientX - rect.left - largeurTooltip - 8;
  }
  if (y < 4) {
    y = event.clientY - rect.top + 18;
  }

  tooltip.style.left = `${x}px`;
  tooltip.style.top  = `${y}px`;
}

/* ============================================================
   ⑥ NAVIGATION → STATION
   ============================================================ */
function gererClic(station) {
  const groupe = document.getElementById(`station-${station.id}`);
  if (groupe) {
    groupe.style.transform  = "scale(1.15)";
    groupe.style.transition = "transform 0.15s ease";
  }
  setTimeout(() => {
    window.location.href = `Station.html?id=${encodeURIComponent(station.id)}`;
  }, 150);
}

/* ============================================================
   Animation pulsation pour les terminus
   ============================================================ */
function animer(groupe) {
  const halo = groupe.querySelector(".halo-pulse");
  if (!halo) return;

  let agrandir = true;
  setInterval(() => {
    const courant = parseFloat(halo.getAttribute("r"));
    const cible   = agrandir ? courant * 1.2 : courant / 1.2;
    halo.setAttribute("r",       cible.toFixed(1));
    halo.setAttribute("opacity", agrandir ? "0.1" : "0.25");
    agrandir = !agrandir;
  }, 900);
}

/* ============================================================
   ⑦ CHARGEMENT PAGE STATION + NAVIGATION + VIDÉO + CARROUSEL + AVIS
   ============================================================ */
function chargerStation() {
  const conteneur = document.getElementById("contenu-station");
  if (!conteneur) return;

  const params    = new URLSearchParams(window.location.search);
  const stationId = params.get("id");
  const index     = STATIONS_DATA.findIndex((s) => s.id === stationId);
  const station   = index !== -1 ? STATIONS_DATA[index] : null;

  if (!station) {
    conteneur.innerHTML = `
      <div style="text-align:center;padding:3rem;color:var(--lien);">
        <p style="font-size:1.2rem;font-family:var(--font-titre);">Station introuvable.</p>
        <a href="Index.html" class="btn-retour" style="margin-top:1.5rem;display:inline-flex;">
          ← Retour à la carte
        </a>
      </div>`;
    return;
  }

  // ── Titre, breadcrumb, tags, description
  document.title = `${station.nom} — Ligne C Toulouse`;
  document.getElementById("station-titre").textContent = station.nom;
  document.getElementById("station-breadcrumb-nom").textContent = station.nom;

  const metaZone = document.getElementById("station-meta");
  metaZone.innerHTML = station.tags.map((t) => `<span class="tag-station">${t}</span>`).join("");
  document.getElementById("station-description").textContent = station.description;

  // ── Badge terminus
  if (station.estTerminus) {
    const badge = document.getElementById("badge-terminus");
    if (badge) {
      badge.textContent   = station.terminus;
      badge.style.display = "inline-block";
    }
  }

  // ── Navigation précédent / suivant (bouclage circulaire)
  const total       = STATIONS_DATA.length;
  const indexPrec   = (index - 1 + total) % total;
  const indexSuiv   = (index + 1) % total;
  const stationPrec = STATIONS_DATA[indexPrec];
  const stationSuiv = STATIONS_DATA[indexSuiv];

  const navStation = conteneur.querySelector("nav[aria-label='Navigation entre stations']");
  if (navStation) {
    const zoneBoutons = navStation.querySelector("div");
    if (zoneBoutons) {
      zoneBoutons.innerHTML = `
        <a href="Station.html?id=${encodeURIComponent(stationPrec.id)}" class="btn-retour" aria-label="Station précédente : ${stationPrec.nom}">← ${stationPrec.nom}</a>
        <a href="Index.html" class="btn-retour" style="margin:0 auto;">↩ Retour à la carte</a>
        <a href="Station.html?id=${encodeURIComponent(stationSuiv.id)}" class="btn-retour" style="margin-left:auto;" aria-label="Station suivante : ${stationSuiv.nom}">${stationSuiv.nom} →</a>
      `;
    }
  }

  // --- GESTION DE LA VIDÉO SPÉCIFIQUE (.MP4) ---
  const conteneurVideo = document.getElementById("station-video-container");
  if (conteneurVideo) {
    if (station.videoUrl && station.videoUrl.trim() !== "") {
      conteneurVideo.innerHTML = `
        <div class="video-responsive-wrapper">
          <video controls width="100%" preload="metadata">
            <source src="${station.videoUrl}" type="video/mp4">
            Votre navigateur ne supporte pas la lecture de cette vidéo.
          </video>
        </div>
      `;
      conteneurVideo.style.display = "block";
    } else {
      conteneurVideo.style.display = "none";
    }
  }

  // --- GESTION DE LA GALERIE PHOTOS (CARROUSEL) ---
  const carrouselTrack = document.getElementById("station-carrousel-track");
  const carrouselWrapper = document.getElementById("carrousel-wrapper");
  
  if (carrouselTrack && station.photos && station.photos.length > 0) {
    carrouselTrack.innerHTML = station.photos.map((urlImage, index) => `
      <figure class="carrousel-item" role="group" aria-roledescription="slide">
        <img src="${urlImage}" alt="Vue ${index + 1} du projet pour la station ${station.nom}" loading="lazy" />
      </figure>
    `).join("");
    
    initCarrousel(); // Active les boutons du carrousel
  } else if (carrouselWrapper) {
    carrouselWrapper.style.display = "none";
  }

  // --- GESTION DES AVIS D'USAGERS ---
  const conteneurAvis = document.getElementById("station-avis-container");
  
  if (conteneurAvis && station.avis && station.avis.length > 0) {
    conteneurAvis.innerHTML = station.avis.map((item) => `
      <blockquote style="padding:1.25rem; border-left:4px solid var(--vert-ligne-c); background:var(--fond-surface-alt); border-radius:var(--rayon); margin:0;">
        <p style="font-style:italic; margin-bottom:0.5rem; color:var(--texte-principal);">"${item.texte}"</p>
        <footer style="font-size:0.85rem; color:var(--vert-pale); font-weight:600;">— ${item.profil}</footer>
      </blockquote>
    `).join("");
  } else if (conteneurAvis) {
    conteneurAvis.innerHTML = ""; 
  }

  // --- INJECTION DE L'ANALYSE ET DES CHIFFRES CLÉS ---
  const conteneurAnalyse = document.getElementById("station-analyse-texte");
  const conteneurChiffres = document.getElementById("station-chiffres-cles");

  // Injection du paragraphe d'analyse
  if (conteneurAnalyse) {
    conteneurAnalyse.innerHTML = station.analyse 
      ? `<p style="color: var(--texte-principal); line-height: 1.6;">${station.analyse}</p>`
      : `<p style="color: var(--texte-secondaire); font-style: italic;">Aucune analyse disponible pour cette station.</p>`;
  }

  // Injection des blocs de chiffres clés
  if (conteneurChiffres) {
    if (station.chiffres && station.chiffres.length > 0) {
      conteneurChiffres.innerHTML = station.chiffres.map((c) => `
        <div style="background: var(--fond-surface-alt); border: 1px solid var(--bordure-forte); border-radius: var(--rayon); padding: 1rem; flex: 1 1 calc(50% - 0.5rem); min-width: 150px; text-align: center;">
          <div style="font-size: 1.8rem; font-weight: 800; color: var(--vert-ligne-c); font-family: var(--font-titre); line-height: 1.2;">${c.valeur}</div>
          <div style="font-size: 0.85rem; color: var(--texte-secondaire); margin-top: 0.25rem;">${c.libelle}</div>
        </div>
      `).join("");
    } else {
      conteneurChiffres.innerHTML = "";
    }
  }
}

/* ============================================================
   LOGIQUE DU CARROUSEL PHOTO
   ============================================================ */
function initCarrousel() {
  const track = document.getElementById("station-carrousel-track");
  const btnPrev = document.querySelector(".btn-prev");
  const btnNext = document.querySelector(".btn-next");

  if (!track || !btnPrev || !btnNext) return;

  btnNext.addEventListener("click", () => {
    const scrollAmount = track.clientWidth * 0.8; 
    track.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });

  btnPrev.addEventListener("click", () => {
    const scrollAmount = track.clientWidth * 0.8;
    track.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  });
}

/* ============================================================
   ⑧ CHARGEMENT PAGE THÉMATIQUE
   ============================================================ */
function chargerTheme() {
  const conteneur = document.getElementById("contenu-theme");
  if (!conteneur) return;

  const params  = new URLSearchParams(window.location.search);
  const themeId = params.get("id");
  const theme   = THEMES_DATA.find((t) => t.id === themeId);

  if (!theme) return;

  document.title = `${theme.nom} — Ligne C Toulouse`;
  document.getElementById("theme-icone").textContent = theme.icone;
  document.getElementById("theme-titre").textContent = theme.nom;
  document.getElementById("theme-accroche").textContent = theme.accroche;
  document.getElementById("theme-breadcrumb-nom").textContent = theme.nom;

  const zoneParagraphes = document.getElementById("theme-paragraphes");
  if (zoneParagraphes) {
    zoneParagraphes.innerHTML = theme.paragraphes.map((p) => `<p style="margin-bottom:1rem;">${p}</p>`).join("");
  }

  const zoneChiffres = document.getElementById("theme-chiffres");
  if (zoneChiffres) {
    zoneChiffres.innerHTML = theme.chiffres.map((c) => `
        <div style="background:var(--fond-surface-alt); border:1px solid var(--bordure-forte); border-radius:var(--rayon); padding:1.25rem 1.5rem; min-width:160px; text-align:center; flex:1 1 160px;">
          <div style="font-size:2rem;font-weight:800; color:var(--vert-ligne-c); font-family:var(--font-titre); line-height:1;">${c.valeur}</div>
          <div style="font-size:0.82rem; color:var(--texte-secondaire); margin-top:0.4rem;">${c.unite}</div>
        </div>`).join("");
  }

  const zoneCitation = document.getElementById("theme-citation");
  if (zoneCitation) {
    zoneCitation.innerHTML = `
      <p style="margin-bottom:0.75rem;">"${theme.citation.texte}"</p>
      <footer style="font-size:0.85rem;color:var(--vert-pale); font-weight:600;font-style:normal;">— ${theme.citation.auteur}</footer>
    `;
  }
}

/* ============================================================
   ⑨ ÉCRAN D'INTRODUCTION IMMERSIVE (AVEC SESSIONSTORAGE)
   ============================================================ */
function afficherIntro2() {
  const DUREE_MS = 4000;
  const overlay2 = document.getElementById("intro2-overlay");
  if (!overlay2) { afficherIntroVideo(); return; }

  overlay2.hidden = false;
  void overlay2.offsetWidth;
  overlay2.classList.add("visible");

  const barre = document.getElementById("intro2-barre");
  if (barre) {
    barre.style.transitionDuration = `${DUREE_MS - 200}ms`;
    requestAnimationFrame(() => { barre.style.width = "100%"; });
  }

  setTimeout(() => {
    overlay2.classList.add("disparaitre");
    let supprime = false;
    const supprimer = () => {
      if (supprime) return;
      supprime = true;
      if (overlay2.parentNode) overlay2.remove();
      afficherIntroVideo();
    };
    overlay2.addEventListener("animationend", supprimer, { once: true });
    setTimeout(supprimer, 1000);
  }, DUREE_MS);
}

function afficherIntroVideo() {
  const overlayVid = document.getElementById("intro-video-overlay");
  if (!overlayVid) {
    document.body.style.overflow = "";
    return;
  }

  overlayVid.hidden = false;
  void overlayVid.offsetWidth;
  overlayVid.classList.add("visible");

  const fermerVideo = () => {
    let ferme = false;
    return () => {
      if (ferme) return;
      ferme = true;
      overlayVid.classList.add("disparaitre");
      const supprimer = () => {
        if (overlayVid.parentNode) overlayVid.remove();
        document.body.style.overflow = "";
      };
      overlayVid.addEventListener("animationend", supprimer, { once: true });
      setTimeout(supprimer, 1000);
    };
  };

  const btnPasser = document.getElementById("btn-passer-video");
  if (btnPasser) btnPasser.addEventListener("click", fermerVideo());
}

function initIntro() {
  const overlay = document.getElementById("intro-overlay");
  const overlay2 = document.getElementById("intro2-overlay");
  const overlayVid = document.getElementById("intro-video-overlay");
  const btnEntrer = document.getElementById("btn-entrer");

  // Vérification si l'intro a déjà été jouée (SessionStorage)
  if (sessionStorage.getItem('introPlayed')) {
    if (overlay) overlay.remove();
    if (overlay2) overlay2.remove();
    if (overlayVid) overlayVid.remove();
    document.body.style.overflow = "";
    return;
  }

  if (!overlay || !btnEntrer) return;
  document.body.style.overflow = "hidden";

  btnEntrer.addEventListener("click", () => {
    sessionStorage.setItem('introPlayed', 'true'); // On marque comme jouée
    overlay.classList.add("disparaitre");

    let transite = false;
    const apresOverlay1 = () => {
      if (transite) return;
      transite = true;
      if (overlay.parentNode) overlay.remove();
      afficherIntro2();
    };
    overlay.addEventListener("animationend", apresOverlay1, { once: true });
    setTimeout(apresOverlay1, 1000);
  });
}

/* ============================================================
   POINT D'ENTRÉE UNIQUE
   ============================================================ */
document.addEventListener("DOMContentLoaded", () => {
  initCarte();
  chargerStation();
  chargerTheme();
  initIntro();
});