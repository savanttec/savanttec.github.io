import Backpack from "./classes.js";

const originalContent = "Hello!";

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
  const content = `
  <main>
      <article>
          <h1>${everydayPack.name}</h1>
          <ul>
              <li>Volume: ${everydayPack.volume}</li>
              <li>Color: ${everydayPack.color}</li>
              <li>Number of Pockets: ${everydayPack.pocketNum}</li>
              <li>Left Strap Length: ${everydayPack.strapLength.left}</li>
              <li>Right Strap Length: ${everydayPack.strapLength.right}</li>
          </ul>
      </article>
  </main>
  `;
  
  if(document.getElementById("demo").innerHTML === originalContent){
    document.getElementById("demo").innerHTML = content;
  } else {
    document.getElementById("demo").innerHTML = `${originalContent}`
  }
}

function updateDemo() {
  const newContent = "This is a test website.";

  if(document.getElementById("demo").innerHTML === originalContent) {
    document.getElementById("demo").innerHTML = `${newContent}`;
  } else {
    document.getElementById("demo").innerHTML = `${originalContent}`
  }
  
}

// Assign the functions to the window object so they are globally available:
window.showBackpack = showBackpack;
window.updateDemo = updateDemo;
