const gridContainer = document.getElementById("gridContainer");
const btnElement = document.querySelector("button");

btnElement.addEventListener('click',createGrid);


function createGrid (){
    while(gridContainer.firstChild){
    gridContainer.removeChild(gridContainer.firstChild);
    }
    for(let row=0; row<16; row++){
        const row = gridContainer.appendChild(document.createElement('div'));  
        for(let column=0; column<16; column++){
            const box = row.appendChild(document.createElement('div'));
            box.className = 'box';
        }    
    }

}

gridContainer.addEventListener('mouseover',(objetive)=>{
    const hoveredSquare = objetive.target;
    hoveredSquare.style.backgroundColor = "black"
})