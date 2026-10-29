# Newsletter HelpMed DOM — Édition spéciale N° 01

Deux versions A4 du même numéro, avec la même charte :

| Source          | PDF                      | Contenu                                                                 |
| --------------- | ------------------------ | ----------------------------------------------------------------------- |
| `index.html`    | `newsletter-4-pages.pdf` | Une, dossier Avenant 11, vigilance + kiné + analyse, Premium + contact  |
| `index-2p.html` | `newsletter-2-pages.pdf` | Page 1 : édito, dossier, vigilance, kiné. Page 2 : analyse, Premium, contact |

Styles et typographie communs : `assets/theme.css` (couleurs, polices, éléments partagés) et
`assets/typo.js` (apostrophes, espaces insécables à la française).

## Regénérer les PDF

```
node build.js
```

Le script affiche le débordement de chaque page (0 = tout tient dans la page).

## Photos

Les cadres photo recadrent l'image sans jamais la déformer.

| Fichier                     | 4 pages                    | 2 pages                    | Source (licence Pexels)                                                                 |
| --------------------------- | -------------------------- | -------------------------- | --------------------------------------------------------------------------------------- |
| `assets/photo-une.jpg`      | Page 1, une                | —                          | [Kampus Production, n° 7551667](https://www.pexels.com/photo/woman-assisting-elderly-man-7551667/) |
| `assets/photo-dossier.jpg`  | Page 2, dossier Avenant 11 | Page 1, dossier Avenant 11 | [cottonbro studio, n° 5721555](https://www.pexels.com/photo/a-person-getting-his-hand-bandaged-5721555/) |
| `assets/photo-kine.jpg`     | Page 3, veille kiné        | Page 1, veille kiné        | Kampus Production, n° 7551622 (même séance que 7551667) |
| `assets/photo-domicile.jpg` | Page 3, double journée     | Page 2, double journée     | Antoni Shkraba, n° 7345459 (même séance que [7345465](https://www.pexels.com/photo/a-woman-in-yellow-shirt-using-a-stethoscope-on-a-man-in-a-white-shirt-7345465/)) |

Licence Pexels : usage commercial autorisé, sans attribution obligatoire (un crédit discret figure en dernière page).
Ne pas présenter les personnes photographiées comme clientes ou ambassadrices de HelpMed DOM.

Ne pas modifier : `portrait.png` (Célia de la Reberdière), `premium.png` (bannière Solution Premium),
`logo.png`, `wimi.png`, `ozzen.png`.

## Polices

Source Serif 4 et Source Sans 3 (licence SIL OFL), figées en fichiers statiques par
`tools/make_fonts.py` pour une intégration nette dans le PDF.
