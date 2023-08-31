let btn = document.getElementById("btn"),
    inputHeight = document.getElementById("inputHeight"),
    inputWeight = document.getElementById("inputWeight"),
    pixelCanvas = document.getElementById("pixelCanvas"),
    table = document.querySelector("table"),
    colorPicker = document.getElementById("colorPicker");

function init() {
  btn.addEventListener("click", function(event) {
  event.preventDefault();
  const getHeightValue = inputHeight.value;
  const getWeightValue = inputWeight.value;
  // Did not work event.clear();
  makeGrid(getHeightValue, getWeightValue);
});
}

init();

//set the tablepixelCanvas
function makeGrid(height, width) {
  for (let i = 0; i < height; i++) {
    let tr = document.createElement("TR");
        table.appendChild(tr);

    for(let t = 0; t < width; t++) {
      let td = document.createElement("TD");
          tr.appendChild(td);
          td.addEventListener("click", function (event) {
            this.style.backgroundColor = colorPicker.value;
            // changed td.style to this. style
          });
    }
  }
}
