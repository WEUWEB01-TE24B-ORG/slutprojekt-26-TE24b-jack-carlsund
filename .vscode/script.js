function bytOrmBild()
{
    let ormBild1 = document.getElementById("ormbild1");

    if (ormBild1.src.includes("Anaconda.jpg"))
    {
        ormBild1.src = "./bilder/Bushmaster.jpg";
    }
    else if(ormBild1.src.includes("Bushmaster.jpg"))
    {
        ormBild1.src = "./bilder/Water-snake.jpg"
    }
    else
    {
        ormBild1.src = "./bilder/Anaconda.jpg"
    }
}



function bytKrokodilBild()
{
    let krokodilbild1 = document.getElementById("krokodilbild1");

    if (krokodilbild1.src.includes("Spetskrokodilen.jpg"))
    {
        krokodilbild1.src = "./bilder/Pansarkrokodil.jpg";
    }
    else if(krokodilbild1.src.includes("Pansarkrokodil.jpg"))
    {
        krokodilbild1.src = "./bilder/Sötvattenskrokodil.jpg"
    }
    else
    {
        krokodilbild1.src = "./bilder/Spetskrokodilen.jpg"
    }
}
function bytOdlaBild() {
    let odlabild1 = document.getElementById("odlabild1");

    // Vi kollar både .jpg och .JPG för att vara säkra
    if (odlabild1.src.includes("./bilder/Skogsödla.jpg")) {
        odlabild1.src = "./bilder/Kameleont.jpg";
    } 
    else if (odlabild1.src.includes("Kameleont.jpg")) {
        odlabild1.src = "./bilder/Sandödla.jpg";
    } 
    else {
        odlabild1.src = "./bilder/Kameleont.jpg"; // Se till att detta matchar din fil
    }
}
function bytSköldpaddaBild() {
    let sköldpaddabild1 = document.getElementById("sköldpaddabild1");

    // 1. Kolla om vi har landsköldpaddan (första bilden)
    if (sköldpaddabild1.src.includes("Landssköldpadda.jpg")) {
        sköldpaddabild1.src = "./bilder/Havssköldpadda.JPG";
    } 
    // 2. Kolla om vi har havssköldpaddan (andra bilden)
    // VIKTIGT: Här måste det vara .JPG med stora bokstäver om det är så i HTML
    else if (sköldpaddabild1.src.includes("Havssköldpadda.JPG")) {
        sköldpaddabild1.src = "./bilder/Cheloniamydas.JPG";
    } 
    // 3. Om det är Cheloniamydas (tredje bilden), gå tillbaka till början
    else {
        sköldpaddabild1.src = "./bilder/Landssköldpadda.jpg";
    }
}

    
function spelaOrmVideo()
{
    document.querySelector(".video-lada").style.display = "block"
}
function spelaKrokodilVideo()
{
    document.querySelector(".video-lada").style.display = "block"
}

function spelaÖdlaVideo()
{
    document.querySelector(".video-lada").style.display = "block"
}
function spelaSköldpaddsVideo()
{
    document.querySelector(".video-lada").style.display = "block"
}
