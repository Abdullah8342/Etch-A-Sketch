// Accessing Html Elements
const container = document.querySelector('.container');
const btn = document.querySelector('.numberOfBox');
// End Accessing Html Elements

// Current Screen Size & Calculation

const widthOfBox = ((window.innerWidth) * (0.80)) / 16;
const heightOfBox = ((window.innerHeight) / 16) - 15;

// End calculation

// Genrating Color combinations
function colorCombination() {
    let Red = (Math.random() * 225).toFixed(1);
    let Green = (Math.random() * 225).toFixed(1);
    let Blue = (Math.random() * 225).toFixed(1);
    let Alpha = (Math.random()).toFixed(1);
    return `rgba(${Red},${Green},${Blue},${Alpha})`;
}

// End Genrating Color combinations


// 16 x 16 Grid square
let divArray = [];

function Grid(NumberOfGrid) {
    for(let x = 0;x < NumberOfGrid;x++) {
        let div = document.createElement('div');
        container.appendChild(div);
        div.style.width = `${widthOfBox}px`;
        div.style.height = `${heightOfBox}px`;
        div.style.border = '1px solid black';
        divArray.push(div);
    }
    mouseOver();
}


// End 16 x 16 Grid square

// Mouse Hover

function mouseOver() {
    divArray.forEach((div) => {
        div.addEventListener('mouseover', () => {
            let rgba = colorCombination();
            div.style.backgroundColor = rgba;
        });
    });
}

// End Mouse Hover


btn.addEventListener('click', () => {
    let boxPerSide = prompt('number of squares per side: ');
    if (boxPerSide === undefined){
        let TB = 16 * 16;
        Grid(TB);
    }
    else if(boxPerSide < 100){
        let TB = boxPerSide * boxPerSide;
        Grid(TB);
    }
});


Grid(256);

