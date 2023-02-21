function start() {

    var news = document.getElementById("artiklar");
    var items = lager.artiklar.herrar;
    for (var i = 0; i < items.length; i++) {
        var h5 = document.createElement("h1");
        h5.innerHTML = items[i].namn;
        news.appendChild(h5);
        var p = document.createElement("p");
        p.innerHTML = items[i].bild;
        news.appendChild(p);

    }
}

