let row = 16;
let col = 16;
let gridContainer = document.querySelector('#grid-container');
gridContainer.style.cssText = ('display: grid; width: 600px; height: 600px; grid-gap: 1px; background-color: burlywood; grid-template-columns: repeat('+ col +',auto); grid-template-rows: repeat('+ row +',auto)');
createGrid(row,col);
let gridElement = document.querySelectorAll('.grid-element');
gridElement.forEach(el => {
    el.addEventListener('mouseover', function ()  {
        el.style.cssText = ('background-color: white')})
});

function createGrid(row,col) {
    let htmlElements = "";
    for (let i=0; i<row*col; i++) {
        htmlElements += '<div class="grid-element"></div>';        
        gridContainer.innerHTML = htmlElements;        
    }    
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