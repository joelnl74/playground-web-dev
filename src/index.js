let grid = [];
let container = {};

window.onload = setup;

function setup()
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
        }
    }
}

function drawHover(e)
{
    e.target.style.backgroundColor = " #800080";
}
