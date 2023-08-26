let grid = [];
let container = {};
let selectedColor = "#800080";
let mouseDown = 0;

window.onload = setup;

function setup()
{
    const resetbtn = document.getElementById("reset-btn");
    const colorbtn = document.getElementById("color");

    colorbtn.value = selectedColor;

    resetbtn.addEventListener("click", onClickResetBtn);
    colorbtn.addEventListener("input", onColorChangedButton);

    setupMouseEvent();
    setupGrid();
}

function setupMouseEvent()
{
    document.body.onmousedown = function() { 
    ++mouseDown;
    }
    document.body.onmouseup = function() {
    --mouseDown;
    }
}

function setupGrid()
{
    container = document.getElementById("container");
    
    for (var x = 0; x< 16; x++)
    {
        for (var y = 0; y < 16; y++)
        {
            const square = document.createElement('div');
            square.classList.add('grid-item');
            square.setAttribute('draggable', 'false');
            container.appendChild(square);

            square.addEventListener('mouseenter', drawHover);
            grid.push(square);
        }
    }
}

function drawHover(e)
{
    if (mouseDown === 0)
    {
        return;
    }

    e.target.style.backgroundColor = selectedColor;
}

function onClickResetBtn(e)
{
    resetGrid();
}

function onColorChangedButton(e)
{
    selectedColor = e.target.value;
}

function resetGrid()
{
    for (var i = 0; i < grid.length; i++)
    {
        grid[i].style.backgroundColor = "#FFFFFF"
    }
}
