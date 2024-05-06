import Backpack from "./classes.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false
);

function update() {
  let websiteMessage = "This is a test website.";
  document.getElementById("demo").innerHTML = `${websiteMessage}`;
 
}


