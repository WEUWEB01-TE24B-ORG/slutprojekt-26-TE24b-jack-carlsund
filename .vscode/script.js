function bytOrmBild()
{
    let ormBild1 = document.getElementById("ormbild1");

    if (bild.src.includes("Anaconda.jpg"))
    {
        bild.src = "./bilder/Bushmaster.jpg";
    }
    else if(bild.src.includes("Bushmaster.jpg"))
    {
        bild.src = "./bilder/Water-snake.jpg"
    }
    else
    {
        bild.src = "./bilder/Anaconda.jpg"
    }
}



function bytKrokodilBild()
{
    let krokodilbild1 = document.getElementById("krokodilbild1");

    if (bild.src.includes("Spetskrokodilen.jpg"))
    {
        bild.src = "./bilder/Pansarkrokodil.jpg";
    }
    else if(bild.src.includes("Pansarkrokodil.JPG"))
    {
        bild.src = "./bilder/Sötvattenskrokodil.jpg"
    }
    else
    {
        bild.src = "./bilder/Spetskrokodilen.jpg"
    }
}


function spelaVideo()
{
    document.querySelector(".video-lada").style.display = "block"
}

