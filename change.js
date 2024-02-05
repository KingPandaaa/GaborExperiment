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
    if(gab == 2 || gab == 5 || gab == 6 || gab == 10 || gab == 11) {
        correct = correct + 1;
    }
    document.getElementById("clearGabor" + gab).style.display = "none";
    gab = gab + 1;
    if(gab >= 11) {
        endExperiment();
    }
    else {
        document.getElementById("clearGabor" + gab).style.display = "block";
    }
}

function counterclockwise() {
    if(gab == 3 || gab == 4 || gab == 7 || gab == 8 || gab == 9) {
        correct = correct + 1;
    }
    document.getElementById("clearGabor" + gab).style.display = "none";
    gab = gab + 1;
    if(gab >= 11) {
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
