// ============================================================
//  Kleiner Bilderschutz (Abschreckung, kein echter Schutz):
//  Rechtsklick / langes Drücken / Ziehen auf Bildern wird blockiert,
//  damit Fotos nicht mit einem Klick gespeichert werden können.
//  Wer den Quellcode öffnet, kommt trotzdem an die Dateien – deshalb
//  werden die Fotos beim Veröffentlichen zusätzlich verkleinert und
//  ohne Metadaten (GPS, Kamera, Datum) ausgeliefert.
// ============================================================
(function () {
  var isImage = function (t) {
    return t && t.closest && t.closest("img, image, svg, foreignObject");
  };
  document.addEventListener("contextmenu", function (e) {
    if (isImage(e.target)) e.preventDefault();
  });
  document.addEventListener("dragstart", function (e) {
    if (isImage(e.target)) e.preventDefault();
  });
})();
