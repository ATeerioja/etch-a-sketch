
const canvas = document.querySelector(".canvas");

for(var i = 0; i < 256; i++){
  const block = document.createElement("div");
  block.setAttribute("class", "block");
  block.addEventListener("mouseover", () => block.style.backgroundColor = "black");
  canvas.appendChild(block);
}


