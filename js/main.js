let gridSize = 20;
let gridBgColor = 'white';
let penColor = 'black';
let isDrawing = false;
let eraseDrawing = false;

const gridContainer = document.querySelector('.grid-container');
gridContainer.style.backgroundColor = gridBgColor;

const gridSizeControl = document.getElementById('gridsize');
const gridSizeControlLabel = document.getElementById('gridsize-label');
const gridSizeControlValue = gridSizeControl.getAttribute('value');
gridSizeControlLabel.textContent = `${gridSizeControlValue} x ${gridSizeControlValue}`;

const gridColor = document.getElementById('gridColor');
const penColorPicker = document.getElementById('penColor');
const cleanGridBtn = document.getElementById('clean-grid');
const eraseGridBtn = document.getElementById('erase-grid');

const createGrid = (gridSize = 20) => {
  gridContainer.innerHTML = '';
  gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

  for (let i = 0; i < gridSize ** 2; i++) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    gridContainer.appendChild(gridItem);
    gridItem.addEventListener('mousedown', function() {
      isDrawing = true;
      this.style.backgroundColor = !eraseDrawing ? penColor : '';
    });
    gridItem.addEventListener('mousemove', function() {
      if (isDrawing === true) {
        this.style.backgroundColor = !eraseDrawing ? penColor : '';
      }
    });
    gridItem.addEventListener('mouseup', function() {
      isDrawing = false;
    });
  }
}

createGrid();

gridSizeControl.addEventListener('change', (e) => {
  let gridSizeSelected = e.target.value;
  gridSizeControlLabel.textContent = `${gridSizeSelected} x ${gridSizeSelected}`;;
  createGrid(gridSizeSelected);
  gridSize = gridSizeSelected;
});

cleanGridBtn.addEventListener('click', () => {
  let allGridItems = document.querySelectorAll('.grid-item');
  allGridItems.forEach(g => g.style.backgroundColor = '');
}) 

let checkEraseAction = () => {
  eraseDrawing = !eraseDrawing;
  if(eraseDrawing) {
    eraseGridBtn.classList.add('active');
  } else {
    eraseGridBtn.classList.remove('active');
  }
}

let changeGridColor = function(e) {
  gridContainer.style.backgroundColor = e.target.value; 
}

let changePenColor = function(e) {
  penColor = e.target.value;
}

eraseGridBtn.addEventListener('click', checkEraseAction);

gridColor.addEventListener('input', changeGridColor);
penColorPicker.addEventListener('input', changePenColor);