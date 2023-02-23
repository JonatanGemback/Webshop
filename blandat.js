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

function startVara() {
    const queryString = document.location.search;
    const params = new URLSearchParams(queryString)

    const bilden = params.get("bild");
    const märket = params.get("märke");
    const namnet = params.get("namn");
    const priset = params.get("pris");

    const artikel = document.createElement("div");
    artikel.className = "bildSidan";
    const imgDiv = document.createElement("div");
    imgDiv.className = "bildPosition";
    artikel.appendChild(imgDiv);
    const img = document.createElement("img");
    img.className = "kläderMönsterVara";
    img.src = bilden;
    imgDiv.appendChild(img);
    const beskrivningSida = document.createElement("div");
    beskrivningSida.className = "beskrivningSidan";
    artikel.appendChild(beskrivningSida);
    const beskrivning = document.createElement("div");
    beskrivning.className = "beskrivningPosition";
    beskrivningSida.appendChild(beskrivning);
    const marke = document.createElement("p");
    marke.innerHTML = märket;
    marke.appendChild(beskrivning);
    const namn = document.createElement("h4");
    namn.innerHTML = namnet;
    namn.appendChild(beskrivning);
    const pris = document.createElement("h3");
    pris.innerHTML = priset;
    pris.appendChild(beskrivning);
    const knapp = document.createElement("select");
    knapp.appendChild(beskrivning);
    const storlekS = document.createElement("option");
    storlekS.appendChild(knapp);
    const storlekM = document.createElement("option");
    storlekM.appendChild(knapp);
    const storlekL = document.createElement("option");
    storlekL.appendChild(knapp);
    const storlekXL = document.createElement("option");
    storlekXL.appendChild(knapp);

    sidorPosition = document.getElementById("sidorPosition");
    sidorPosition.appendChild(artikel);

}
/*
function skapaArtikelVara() {
    const artikel = document.createElement("div");
    artikel.className = "bildSidan";
    const imgDiv = document.createElement("div");
    imgDiv.className = "bildPosition";
    artikel.appendChild(imgDiv);
    const img = document.createElement("img");
    img.className = "kläderMönsterVara";
    imgDiv.appendChild(img);
    const beskrvningSida = document.createElement("div");
    beskrvningSida.className = "beskrivningSidan";
    const beskrivning = document.createElement("div");
    beskrivning.className = "beskrivningPosition";
    beskrivning.appendChild(beskrvningSida);
    const marke = document.createElement("p");
    marke.appendChild(beskrivning);
    const namn = document.createElement("h4");
    namn.appendChild(beskrivning);
    const pris = document.createElement("h3");
    pris.appendChild(beskrivning);
    const knapp = document.createElement("select");
    knapp.appendChild(beskrivning);
    const storlekS = document.createElement("option");
    storlekS.appendChild(knapp);
    const storlekM = document.createElement("option");
    storlekM.appendChild(knapp);
    const storlekL = document.createElement("option");
    storlekL.appendChild(knapp);
    const storlekXL = document.createElement("option");
    storlekXL.appendChild(knapp);

}*/

/*      <div id="bildSidan">
            <div id="bildPosition">
                <img src="img/brunJacka.jpg" class="kläderMönsterVara">
            </div>
        </div>
        <div id="beskrivningSidan">
            <div id="beskrivningPosition">
                <p>Jack & Jones</p>
                <h4>Brun Jacka</h4>
                <h3>$70</h3>
            </div>
        </div>*/