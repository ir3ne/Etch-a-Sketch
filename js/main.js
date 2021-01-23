let gridSize = 20;
let gridBgColor = 'white';
let isDrawing = false;

const gridContainer = document.querySelector('.grid-container');
gridContainer.style.backgroundColor = gridBgColor;

const gridSizeControl = document.getElementById('gridsize');
const gridSizeControlLabel = document.getElementById('gridsize-label');
const gridSizeControlValue = gridSizeControl.getAttribute('value');
gridSizeControlLabel.textContent = gridSizeControlValue;

const cleanGridBtn = document.getElementById('clean-grid');

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
      this.style.backgroundColor = 'black';
    });
    gridItem.addEventListener('mousemove', function(e) {
      if (isDrawing === true) {
        this.style.backgroundColor = 'black';
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
  gridSizeControlLabel.textContent = gridSizeSelected;
  createGrid(gridSizeSelected);
  gridSize = gridSizeSelected;
});

cleanGridBtn.addEventListener('click', () => {
  let allGridItems = document.querySelectorAll('.grid-item');
  allGridItems.forEach(g => g.style.backgroundColor = '');
}) 