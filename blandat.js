function skapaArtikel(vara) {
    const artikel = document.createElement("a");
    artikel.className = 'kläderMönster';
    artikel.href = "vara.html?vara=" + vara.namn + "&pris=" + vara.pris + "&bild=" + vara.bild + "&märke=" + vara.märke;
    const img = document.createElement('img');
    img.className = 'kläder';
    img.src = vara.bild;
    artikel.appendChild(img);
    const beskrivning = document.createElement('div');
    beskrivning.className = 'beskrivning';
    artikel.appendChild(beskrivning);
    const marke = document.createElement('p');
    marke.innerHTML = vara.märke;
    beskrivning.appendChild(marke);
    const namn = document.createElement('h4');
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

function kop() {
    alert("TACK FÖR DITT KÖP");
}

function startVara() {
    const queryString = document.location.search;
    const params = new URLSearchParams(queryString)
    const bilden = params.get("bild");
    const märket = params.get("märke");
    const namnet = params.get("vara");
    const priset = params.get("pris");
    const artikelBild = document.createElement("div");
    artikelBild.className = "bildSidan";
    const imgDiv = document.createElement("div");
    imgDiv.className = "bildPosition";
    artikelBild.appendChild(imgDiv);
    const img = document.createElement("img");
    img.className = "kläderMönsterVara";
    img.src = bilden;
    imgDiv.appendChild(img);
    const artikelBeskrivning = document.createElement("div");
    artikelBeskrivning.className = "beskrivningSida";
    const beskrivningPosition = document.createElement("div");
    beskrivningPosition.className = "beskrivningPosition";
    const marke = document.createElement("p");
    marke.innerHTML = märket;
    beskrivningPosition.appendChild(marke);
    const namn = document.createElement("h4");
    namn.innerHTML = namnet;
    beskrivningPosition.appendChild(namn);
    const pris = document.createElement("h3");
    pris.innerHTML = priset;
    beskrivningPosition.appendChild(pris);
    const storlek = document.createElement("select");
    const storlekS = document.createElement("option");
    storlekS.innerHTML = "S";
    storlek.appendChild(storlekS);
    const storlekM = document.createElement("option");
    storlekM.innerHTML = "M";
    storlek.appendChild(storlekM);
    const storlekL = document.createElement("option");
    storlekL.innerHTML = "L";
    storlek.appendChild(storlekL);
    beskrivningPosition.appendChild(storlek);
    artikelBeskrivning.appendChild(beskrivningPosition);
    sidorPosition = document.getElementById("sidorPosition");
    sidorPosition.appendChild(artikelBild);
    sidorPosition.appendChild(artikelBeskrivning);
}