// Pour menu déroulant

function recette(fruit) {
  if (fruit == "rien") {
    document.getElementById("infoFruit").classList.remove("special");
    document.getElementById("infoFruit").textContent="";
  }
  else {
    document.getElementById("infoFruit").classList.add("special");
    if (fruit == "V") {
    document.getElementById("infoFruit").textContent="moi, morte (mais revive)";
    } 
    if (fruit == "Jackie") {
    document.getElementById("infoFruit").textContent="mon ami, mort";
    }
    if (fruit == "T-bug") {
    document.getElementById("infoFruit").textContent="une runner, morte";
    }
    if (fruit == "Dexter Deshawn") {
      document.getElementById("infoFruit").textContent="un gros porc, mort";
      }
  }
}