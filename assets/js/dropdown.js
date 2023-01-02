function openvideos(){
    document.getElementById("videos").style.display = "block";
    document.getElementById("openvideos").style.display = "none";
    document.getElementById("closevideos").style.display = "block";
    closeeqip();
}
function closevideos(){
    document.getElementById("videos").style.display = "none";
    document.getElementById("openvideos").style.display = "block";
    document.getElementById("closevideos").style.display = "none";
}
function openeqip(){
    document.getElementById("equipment").style.display = "block";
    document.getElementById("openequip").style.display = "none";
    document.getElementById("closeequip").style.display = "block";
    closevideos();
}
function closeeqip(){
    document.getElementById("equipment").style.display = "none";
    document.getElementById("openequip").style.display = "block";
    document.getElementById("closeequip").style.display = "none";
}