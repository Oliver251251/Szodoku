let torzs = document.getElementById("main");
let tabla = [];

let tablaSzam = [];
let eredeti = [];

function GenerateTable() {
  for (let i = 0; i < 9; i++) {
    let tabla2 = [];
    let nagyMezo = document.createElement("div");
    nagyMezo.classList.toggle("nagyMezo");
    for (let j = 0; j < 9; j++) {
      let div = document.createElement("div");
      div.classList.toggle("mezo");
      div.innerHTML = tablaSzam[i][j] != 0 ? tablaSzam[i][j] : "";
      if (div.innerHTML == "") {
        div.addEventListener("click", function () {
          Click(div);
        });
      }

      nagyMezo.appendChild(div);
      tabla2.push(div);
    }
    torzs.appendChild(nagyMezo);

    tabla.push(tabla2);
  }
}

let solution = [];
function GetProblemAndAnswer() {
  fetch("https://sudoku-api.vercel.app/api/dosuku")
    .then((res) => res.json())
    .then((datas) => {
      console.log(datas.newboard.grids[0].value);
      console.log(datas.newboard.grids[0].solution);
      eredeti = datas.newboard.grids[0].value;
      tablaSzam = datas.newboard.grids[0].value;
      solution = datas.newboard.grids[0].solution;
      GenerateTable();
    });
}

function GenerateControl() {
  let nagyMezo = document.createElement("div");
  nagyMezo.classList.toggle("nagyMezo");
  nagyMezo.classList.toggle("controls");
  for (let i = 1; i < 10; i++) {
    let div = document.createElement("div");
    div.classList.toggle("mezo");
    div.innerHTML = i;
    div.addEventListener("click", function () {
      Valaszt(div);
    });
    nagyMezo.appendChild(div);
    controlDivsList.push(div);
  }
  controlDivsList[0].classList.toggle("clicked");
  document.getElementById("controlsDiv").appendChild(nagyMezo);
}

let place = 1;
let controlDivsList = [];
function Valaszt(params) {
  console.log(controlDivsList);
  for (let i = 0; i < controlDivsList.length; i++) {
    controlDivsList[i].classList.remove("clicked");
  }

  place = parseInt(params.innerHTML);
  params.classList.toggle("clicked");
  console.log(place);
}

function Click(element) {
  element.innerHTML = place;
}

function Ellenorzes() {
  let jo = 0;

  for (let i = 0; i < tablaSzam.length; i++) {
    for (let j = 0; j < tablaSzam[i].length; j++) {
      if (eredeti[i][j] == 0) {
        console.log(solution[i][j]);
        //console.log(parseInt(tabla[i][j].innerHTML));
        if (solution[j][i] == parseInt(tabla[i][j].innerHTML)) {
          tabla[i][j].classList.remove("rossz");
          tabla[i][j].classList.add("jo");
          jo++;
          continue;
        }

        tabla[i][j].classList.remove("jo");
        tabla[i][j].classList.add("rossz");
      }
    }
  }
  if (jo == solution.length) {
    alert("Gratulálunk, minden szám helyes!");
  }
}

GetProblemAndAnswer();
GenerateControl();
