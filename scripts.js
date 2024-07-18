const canvas = document.querySelector(".canvas");
const button = document.querySelector("#canvasButton");

button.addEventListener("click", buttonPress)

function buttonPress() {
  let size = prompt("How many pixels on canvas", "16");
  if(Number(size)) {
    let blocksPerWidth = Number(size);
    canvasConstructor(blocksPerWidth);
  } else {
    buttonPress();
  }
}

function canvasConstructor(blockNum) {
  //Canvas width is 960px
  //Calculation for the width of an individual block
  const blockSize = (Math.sqrt((Math.pow(960, 2)) / (Math.pow(blockNum, 2))));
  console.log(canvas.childElementCount)
  
  while(canvas.childElementCount > 0) {
    for(child of canvas.childNodes) {
      canvas.removeChild(child);
    }
  }

  for(var i = 0; i < (blockNum*blockNum); i++){
    const block = document.createElement("div");
    block.setAttribute("class", "block");
    block.style.height = `${blockSize}px`;
    block.style.width = `${blockSize}px`;
    block.addEventListener("mouseover", () => block.style.backgroundColor = "black");
    canvas.appendChild(block);
  }
}