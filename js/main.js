let gridSize = 20;
let gridBgColor = '#fafafa';

const gridContainer = document.querySelector('.grid-container');
gridContainer.style.backgroundColor = gridBgColor;

const createGrid = () => {
  gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

  for (let i = 0; i < gridSize ** 2; i++) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    gridContainer.appendChild(gridItem);
  }
}

createGrid();