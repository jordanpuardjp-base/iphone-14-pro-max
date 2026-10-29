// Typographie française : apostrophes, points de suspension, espaces insécables.
(function () {
  var NB = "\u00a0", FINE = "\u202f";
  var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  var node;
  while ((node = walker.nextNode())) {
    if (node.parentNode.nodeName === "SCRIPT") continue;
    node.nodeValue = node.nodeValue
      .replace(/'/g, "\u2019")
      .replace(/\.\.\./g, "\u2026")
      .replace(/«\s*/g, "«" + FINE)
      .replace(/\s*»/g, FINE + "»")
      .replace(/\s+:/g, NB + ":")
      .replace(/\s+([;!?])/g, FINE + "$1")
      .replace(/(\d)\s+(%|€)/g, "$1" + NB + "$2");
  }
})();
