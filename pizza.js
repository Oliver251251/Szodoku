function Fecccss(params) {
  fetch("https://chess.sulla.hu/chess")
    .then((res) => res.json())
    .then((datas) => {
      datas.forEach((element) => {
        Divek(element);
      });
    });
}

let adatok = {
  id: 69,
  name: "Garry Kasparov",
  birth_date: "1963-04-13",
  world_ch_won: 0,
  profile_url: "https://hu.wikipedia.org/wiki/Garry_Kasparov&quot;",
  image_url: "https://www.sulla.hu/Kasparov.jpg&quot",
};

function Fets(params) {
  fetch("https://chess.sulla.hu/chess",{
    method: "POST",
    body: adatok,

  })
    .then((res) => {
      if (res) {
        return fetch("https://chess.sulla.hu/chess");
      }
    })
    .then((res) => res.json())
    .then((datas) => {
      datas.forEach((element) => {
        Divek(element);
      });
    });
}

function Divek(element) {
  let test = document.getElementById("test");
  let div = document.createElement("div");
  div.classList.add("card");
  let divv = document.createElement("div");
  divv.classList.add("card-body");
  divv.innerHTML = "ID: " + element.id + "<br>";
  divv.innerHTML += "Name: " + element.name + "<br>";
  divv.innerHTML += "birth_date: " + element.birth_date + "<br>";
  divv.innerHTML += "world_ch_won: " + element.world_ch_won + "<br>";
  divv.innerHTML += "profile_url: " + element.profile_url + "<br>";
  divv.innerHTML += `<img src="${element.image_url}"/>`;
  div.appendChild(divv);
  test.appendChild(div);
}
