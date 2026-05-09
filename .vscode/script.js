// Byter bild för ormarna
function bytOrmBild() {

    let ormBild1 = document.getElementById("ormbild1");

    if (ormBild1.src.includes("Anaconda.webp")) {

        ormBild1.src = "./bilder/Bushmaster.webp";
    }

    else if (ormBild1.src.includes("Bushmaster.webp")) {

        ormBild1.src = "./bilder/Water-snake.webp";
    }

    else {

        ormBild1.src = "./bilder/Anaconda.webp";
    }
}

// Byter bild för krokodilerna
function bytKrokodilBild() {

    let krokodilbild1 = document.getElementById("krokodilbild1");

    if (krokodilbild1.src.includes("Spetskrokodilen.webp")) {

        krokodilbild1.src = "./bilder/Pansarkrokodil.webp";
    }

    else if (krokodilbild1.src.includes("Pansarkrokodil.webp")) {

        krokodilbild1.src = "./bilder/Sötvattenskrokodil.webp";
    }

    else {

        krokodilbild1.src = "./bilder/Spetskrokodilen.webp";
    }
}

// Byter bildför ödlor
function bytOdlaBild() {

    let odlabild1 = document.getElementById("odlabild1");

    if (odlabild1.src.includes("Skogsödla.webp")) {

        odlabild1.src = "./bilder/Kameleont.webp";
    }

    else if (odlabild1.src.includes("Kameleont.webp")) {

        odlabild1.src = "./bilder/Sandödla.webp";
    }

    else {

        odlabild1.src = "./bilder/Kameleont.webp";
    }
}

// Byter bild för sköldpaddorna. Just denna är dock tagen på grund av att metoden som jag gjorde fungerade inte på den här, så då läste jag att man kunnde använda arrays istället
let sköldIndex = 0;
function bytSköldpaddaBild() {

    let img = document.getElementById("sköldpaddabild1");

    let bilder = [

        "./bilder/Landssköldpadda.webp",
        "./bilder/Havssköldpadda.webp",
        "./bilder/Cheloniamydas.webp"
    ];

    sköldIndex++;

    if (sköldIndex >= bilder.length) {

        sköldIndex = 0;
    }

    img.src = bilder[sköldIndex];
}

// Visar video om ormar
function spelaOrmVideo() {

    document.querySelector(".video-lada").style.display = "block";
}

// Visar video om krokodiler
function spelaKrokodilVideo() {

    document.querySelector(".video-lada").style.display = "block";
}

// Visar video om ödlor
function spelaÖdlaVideo() {

    document.querySelector(".video-lada").style.display = "block";
}

// Visar video om sköldpaddor
function spelaSköldpaddsVideo() {

    document.querySelector(".video-lada").style.display = "block";
}