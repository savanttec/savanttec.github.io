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

function showBackpack() {
  document.getElementById("demo").innerHTML = `
  <main>
      <article>
          <h1>${everydayPack.name}</h1>
          <ul>
              <li>Volume: ${everydayPack.volume}</li>
              <li>Color: ${everydayPack.color}</li>
          </ul>
      </article>
  </main>
  `;
}

function updateDemo() {
   
  let websiteMessage = "This is a test website.";
  document.getElementById("demo").innerHTML = `${websiteMessage}`;
  
  alert("Hi");
}

// Assign the functions to the window object so they are globally available:
window.showBackpack = showBackpack;
window.updateDemo = updateDemo;