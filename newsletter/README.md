# Newsletter HelpMed DOM — Édition spéciale N° 01

Mise en page HTML (`index.html`) imprimée en PDF A4 de 4 pages (`newsletter.pdf`).

## Regénérer le PDF

```
node build.js
```

Le script affiche le débordement de chaque page (0 = tout tient dans la page).

## Photos

Les emplacements photo recadrent automatiquement l'image sans la déformer :

| Fichier                     | Emplacement                                   |
| --------------------------- | --------------------------------------------- |
| `assets/photo-une.jpg`      | Page 1, photo de une (visite à domicile)      |
| `assets/photo-dossier.jpg`  | Page 2, en-tête du dossier Avenant 11         |
| `assets/photo-kine.jpg`     | Page 3, veille kiné                           |
| `assets/photo-domicile.jpg` | Page 3, « Sortir du piège de la double journée » |

Ne pas modifier : `portrait.png` (Célia de la Reberdière), `premium.png` (bannière Solution Premium),
`logo.png`, `wimi.png`, `ozzen.png`.

## Polices

Source Serif 4 et Source Sans 3 (licence SIL OFL), figées en fichiers statiques par
`tools/make_fonts.py` pour une intégration nette dans le PDF.
