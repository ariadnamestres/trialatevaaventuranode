let readlineSync = require("readline-sync");

const preguntes = [
  {
    text: "Bon dia, avui serà un dia maravellós, queda't amb mi i t'explicaré una historieta, et vols quedar?",
    si: 1,
    no: 5,
  },
  {
    text: `Et trobes en mig d'Alella, si vols continuar, ves al nord`,
    nord: 2,
    sud: 1,
  },
  {
    text: "Desprès de caminar una mica has aconseguit arribar al BOSQUET D'ALLELLA. \nAl NORD hi ha LA PUJADA MORTAL, al SUD hi ha el MAR, atreveix-te a pujar",
    "Pujo la muntanya": 3,
    "no pujo": 1,
  },
  {
    text: `Has fet la PUJADA MORTAL, ets un bon caminant i has arribat al CAMI DEL MIG. \nAl NORD hi ha L'ERMITA DE SANT MATEU, al SUD hi ha EL BOSQUET DE NOU.`,
    nord: 4,
    sud: 2,
  },
  {
    text: "Desprès de molt caminar has arribat a l'ermita de SANT MATEU. \n Felicitats és un bon caminant. FI ",
  },
  {
    text: "Quina pena, adéu  ",
  },
  {
    text: "Estàs en la platja, gaudeix. Adéu  ",
  },
];

let acabar = false;
let resposta = false;
let index = 0;

function Localitzacio() {
  return console.log(preguntes[index].text);
}

function Triar() {
  return (resp = readlineSync.question());
}

function NoExisteix() {
  return (resp = readlineSync.question(
    "Ei la preg no existeix, pots tornar a donar una resposta vàlida? \n"
  ));
}

while (!acabar) {
  Localitzacio();
  if (index === 4 || index === 5 || index === 6) {
    acabar = true;
  } else {
    resposta = Triar();
    while (!preguntes[index][resposta]) {
      resposta = NoExisteix();
    }
    index = preguntes[index][resposta];
  }
}
