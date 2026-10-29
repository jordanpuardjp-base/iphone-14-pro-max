"""Génère les polices statiques de la newsletter à partir des polices variables Source Serif 4 / Source Sans 3.

Chrome intègre les polices variables en Type 3 dans les PDF (rendu moins net à l'impression) :
on fige donc chaque graisse / taille optique utilisée dans un fichier statique.

Usage : python3 tools/make_fonts.py <dossier node_modules/@fontsource-variable> assets/fonts
"""
import sys
from pathlib import Path

from fontTools.ttLib import TTFont
from fontTools.varLib.instancer import instantiateVariableFont

src, out = Path(sys.argv[1]), Path(sys.argv[2])
serif = src / "source-serif-4/files/source-serif-4-latin-opsz-{}.woff2"
sans = src / "source-sans-3/files/source-sans-3-latin-wght-{}.woff2"

INSTANCES = [
    # (fichier de sortie, source, style, axes)
    ("hm-display-300.woff2", serif, "normal", {"wght": 300, "opsz": 32}),
    ("hm-display-600.woff2", serif, "normal", {"wght": 600, "opsz": 32}),
    ("hm-display-600-italic.woff2", serif, "italic", {"wght": 600, "opsz": 32}),
    ("hm-serif-400.woff2", serif, "normal", {"wght": 400, "opsz": 11}),
    ("hm-serif-400-italic.woff2", serif, "italic", {"wght": 400, "opsz": 11}),
    ("hm-serif-600.woff2", serif, "normal", {"wght": 600, "opsz": 12}),
    ("hm-serif-600-italic.woff2", serif, "italic", {"wght": 600, "opsz": 12}),
    ("hm-sans-400.woff2", sans, "normal", {"wght": 400}),
    ("hm-sans-400-italic.woff2", sans, "italic", {"wght": 400}),
    ("hm-sans-600.woff2", sans, "normal", {"wght": 600}),
    ("hm-sans-600-italic.woff2", sans, "italic", {"wght": 600}),
    ("hm-sans-700.woff2", sans, "normal", {"wght": 700}),
]

out.mkdir(parents=True, exist_ok=True)
for name, pattern, style, axes in INSTANCES:
    font = instantiateVariableFont(TTFont(str(pattern).format(style)), axes)
    font.flavor = "woff2"
    font.save(out / name)
    print(name)
