const STANDARD_GRID_WIDTH = 16;
const STANDARD_GRID_HEIGHT = 16;

const GRID = document.querySelector('.grid');
function createGrid() {
    for(let i = 0; i < STANDARD_GRID_HEIGHT; i++) {
        for (let j = 0; j < STANDARD_GRID_WIDTH; j++) {
            let gridCell = document.createElement('div')
            gridCell.classList.add('grid-cell');
            GRID.appendChild(gridCell);
        }
    }
}

createGrid();

GRID.addEventListener('mouseover', e => {
    e.target.classList.add('hovered');
})

