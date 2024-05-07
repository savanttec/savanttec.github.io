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
  document.body.innerHTML = `
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

// Assign the function to the window object so it is globally available:
window.showBackpack = showBackpack;