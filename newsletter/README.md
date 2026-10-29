# Newsletter HelpMed DOM — Édition spéciale N° 01

Mise en page HTML (`index.html`) imprimée en PDF A4 de 4 pages (`newsletter.pdf`).

## Regénérer le PDF

```
node build.js
```

Le script affiche le débordement de chaque page (0 = tout tient dans la page).

## Photos

Les emplacements photo recadrent automatiquement l'image sans la déformer :

| Fichier                     | Emplacement                                      | Source (licence Pexels)                                                                 |
| --------------------------- | ------------------------------------------------ | --------------------------------------------------------------------------------------- |
| `assets/photo-une.jpg`      | Page 1, photo de une                             | [Kampus Production, n° 7551667](https://www.pexels.com/photo/woman-assisting-elderly-man-7551667/) |
| `assets/photo-dossier.jpg`  | Page 2, en-tête du dossier Avenant 11            | [cottonbro studio, n° 5721555](https://www.pexels.com/photo/a-person-getting-his-hand-bandaged-5721555/) |
| `assets/photo-kine.jpg`     | Page 3, veille kiné                              | Yan Krukau, n° 5793895 (même série que [5793904](https://www.pexels.com/photo/a-woman-lying-on-the-therapy-bed-5793904/)) |
| `assets/photo-domicile.jpg` | Page 3, « Sortir du piège de la double journée » | [Antoni Shkraba, n° 7345465](https://www.pexels.com/photo/a-woman-in-yellow-shirt-using-a-stethoscope-on-a-man-in-a-white-shirt-7345465/) |

Licence Pexels : usage commercial autorisé, sans attribution obligatoire (un crédit discret figure en page 4).
Ne pas présenter les personnes photographiées comme clientes ou ambassadrices de HelpMed DOM.

Ne pas modifier : `portrait.png` (Célia de la Reberdière), `premium.png` (bannière Solution Premium),
`logo.png`, `wimi.png`, `ozzen.png`.

## Polices

Source Serif 4 et Source Sans 3 (licence SIL OFL), figées en fichiers statiques par
`tools/make_fonts.py` pour une intégration nette dans le PDF.
