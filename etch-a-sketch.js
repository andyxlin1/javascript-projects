let isMousedown = false;
let gridCon = document.getElementById("gridCon");
let reset = document.getElementById('reset');
createGrid(16);
function createGrid(gridDim) {
 for (let i = 0; i < gridDim; i++) {
     let row = document.createElement("div");
     row.classList.add("grid-row");
     
     for (let j = 0; j < gridDim; j++) {
         let square = document.createElement("div");
         square.classList.add("grid-square");
         row.appendChild(square);
     }
     gridCon.appendChild(row);
    }
 let allSquares = document.querySelectorAll(".grid-square");   

 allSquares.forEach(addChangeColor);
}

 function addChangeColor(square) {
     square.addEventListener('mousedown', function(e) {
         isMousedown = true;
     });
     square.addEventListener('mouseup', function(e) {
         isMousedown = false;
     }) 
     square.addEventListener('mousemove', function(e) {
         if (isMousedown) {
             this.style.backgroundColor = 'blue';
         }
     })

 }

 function clear (e) {
     e.preventDefault();
    let gridDim = prompt('Enter a number. What would you like the height and width of the grid to be?');
    let removeGrids = document.querySelectorAll('.grid-row');
    
    removeGrids.forEach(isGrid => {
    gridCon.removeChild(isGrid);

    });
    createGrid(gridDim);
 }
 reset.addEventListener('click',clear);

