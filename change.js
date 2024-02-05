let gab = 2;
let correct = 0;
let correctS = "You got ";

function button1() {
    var x = document.getElementById("clearGabor1");
    x.style.display = "none";
    var y = document.getElementById("showGabor1");
    y.style.display = "none";
    document.getElementById("cw").style.display = "block";
    document.getElementById("ccw").style.display = "block";
    document.getElementById("head2").style.display = "none";
    document.getElementById("clearGabor2").style.display = "block";
  }

function clockwise() {
    switch(gab){
        case 2:
            correct++;
        case 5:
            correct++;
        case 6:
            correct++;
        case 8:
            correct++;
        
    document.getElementById("clearGabor" + gab).style.display = "none";
    gab = gab + 1;
    if(gab == 11) {
        endExperiment();
    }
    else {
        document.getElementById("clearGabor" + gab).style.display = "block";
    }
}

function counterclockwise() {
    switch(gab){
        case 3:
            correct++;
        case 4:
            correct++;
        case 7:
            correct++;
        case 8:
            correct++;
        case 9:
            correct++;
    document.getElementById("clearGabor" + gab).style.display = "none";
    gab = gab + 1;
    if(gab == 11) {
        endExperiment();
    }
    else {
        document.getElementById("clearGabor" + gab).style.display = "block";
    }

}

function endExperiment() {
    document.getElementById("cw").style.display = "none";
    document.getElementById("ccw").style.display = "none";
    document.getElementById("directions").style.display = "none";
    document.getElementById("finalScore").style.display = "block";
    document.getElementById("finalScore").innerHTML = "You got " + correct/(gab-2)*100 + "% correct";
}
