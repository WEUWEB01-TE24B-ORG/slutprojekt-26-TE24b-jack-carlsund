function bytBild()
{
    let bild = document.getElementById("ormbild1");

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