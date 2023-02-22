function skapaArtikel(vara) {
    const artikel = document.createElement("a");
    artikel.className = 'kläderMönster';
    artikel.href = "vara.html?vara=" + vara.namn + "&pris=" + vara.pris;
    const img = document.createElement('img');
    img.className = 'kläder';
    img.src = vara.bild;
    artikel.appendChild(img);
    const beskrivning = document.createElement('div');
    beskrivning.className = 'beskrivning';
    artikel.appendChild(beskrivning);
    const marke = document.createElement('p');
    marke.className = 'märke';
    marke.innerHTML = vara.märke;
    beskrivning.appendChild(marke);
    const namn = document.createElement('h4');
    namn.className = 'kläderNamn';
    namn.innerHTML = vara.namn;
    beskrivning.appendChild(namn);
    const pris = document.createElement('h3');
    pris.innerHTML = vara.pris;
    beskrivning.appendChild(pris);
    return artikel;
}

function skapaArtiklar(items, div) {
    for (var i = 0; i < items.length; i++) {
        div.appendChild(skapaArtikel(items[i]));
    }
}

function start() {
    skapaArtiklar(lager.artiklar.herrar, document.getElementById("herrar"));
    skapaArtiklar(lager.artiklar.damer, document.getElementById("damer"));
    skapaArtiklar(lager.artiklar.barn, document.getElementById("barn"));
}