const STANDARD_GRID_SIZE = 16;
const GRID = document.querySelector('.grid');
const ROOT = document.querySelector(':root');

function createGrid(size) {
    clearGrid();
    resizeGrid(size);
    for(let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            let gridCell = document.createElement('div')
            gridCell.classList.add('grid-cell');
            GRID.appendChild(gridCell);
        }
    }

    GRID.addEventListener('mouseover', e => {
        if (e.target.classList.contains('grid-cell')) {
            e.target.classList.add('hovered');
        }
        e.stopPropagation();
    });
}

function clearGrid() {
    GRID.innerHTML = "";
}

function resizeGrid(size) {
    GRID.style.setProperty('--grid-cols', size);
    GRID.style.setProperty('--grid-rows', size);
}

createGrid(STANDARD_GRID_SIZE);

let resetGridBtn = document.querySelector('button.reset-grid');
resetGridBtn.addEventListener('click', () => {
    let gridSize = Number.parseInt(
        prompt("Please inform the desired grid size (up to 100)")
    );
    if (isNaN(gridSize)) {
        alert('Invalid input. Only integers are accepted.');
        return;
    }
    if (gridSize > 100 || gridSize < 1) {
        alert('Invalid input. The size should be between 1 and 100');
        return;
    }

    createGrid(gridSize);
})

