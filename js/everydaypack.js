import Backpack from "./classes.js";

const websiteOriginalMessage = "Hello!!";

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
          </ul>
      </article>
  </main>
  `;
  
  
  if(document.getElementById("demo").innerHTML === websiteOriginalMessage) {
    document.getElementById("demo").innerHTML = content;
  } else {
    document.getElementById("demo").innerHTML = `${websiteOriginalMessage}`
  }
}

function updateDemo() {
   
 
  const websiteNewMessage = "This is a test website.";

  if(document.getElementById("demo").innerHTML === websiteOriginalMessage) {
    document.getElementById("demo").innerHTML = `${websiteNewMessage}`;
  } else {
    document.getElementById("demo").innerHTML = `${websiteOriginalMessage}`
  }
  
}

// Assign the functions to the window object so they are globally available:
window.showBackpack = showBackpack;
window.updateDemo = updateDemo;