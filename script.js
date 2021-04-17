let row = 16;
let col = 16;
let button = document.getElementById('button');
let gridContainer = document.querySelector('#grid-container');
function setGrid(row,col) {
    gridContainer.style.cssText = ('display: grid; width: 600px; height: 600px; grid-gap: 1px; background-color: burlywood; grid-template-columns: repeat('+ col +',auto); grid-template-rows: repeat('+ row +',auto)');
}
createGrid(row,col);
button.addEventListener('click', function() {
    console.log("aw aw");
    row = document.getElementById('row').value;
    col = document.getElementById('col').value;
    console.log([row,col]);
    createGrid(row,col);
})

function createGrid(row,col) {
    setGrid(row,col);
    let htmlElements = "";
    gridContainer.innerHTML = "";
    for (let i=0; i<row*col; i++) {
        htmlElements += '<div class="grid-element"></div>';        
        gridContainer.innerHTML = htmlElements;        
    }       
    let gridElement = document.querySelectorAll('.grid-element'); 
    gridElement.forEach(el => {
        el.addEventListener('mouseover', function ()  {
            el.style.cssText = ('background-color: white')})
    });
    console.log("aw");
}
//object.addEventListener("mouseover", myScript);

// var element  = document.createElement("style");
// element.id = "myStyleId" ; // so you can get and alter/replace/remove later
// element.innerHTML = ".myClass {color:" + color + ";}" ; // css rule
// var header = document.getElementsByTagName("HEAD")[0] ;
// header.appendChild(element) ;
// ====================================================
// var style = document.createElement('style');
// style.type = 'text/css';
// style.innerHTML = '.cssClass { color: #F00; }';
// document.getElementsByTagName('head')[0].appendChild(style);

// document.getElementById('someElementId').className = 'cssClass';