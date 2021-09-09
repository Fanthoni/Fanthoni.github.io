$(document).ready(function(){
    const todayDate = new Date();
    const year = todayDate.getFullYear();

    document.getElementById("footer").innerHTML = "Ferrel Anthoni © " + year;
});