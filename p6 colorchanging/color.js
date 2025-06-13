// generate color 

const raandomcolor = function(){
    const hex  = "0123456789ABCDEF"
    let color ="#";

    for( let i=0; i<6 ; i++){
        color += hex[Math.floor(Math.random()*16)]
    }
    return color;
};

console.log(raandomcolor());

let interval;

const startcolorchanging = function () {
    if(!interval){
        interval = setInterval(changecolor,1000)
    }
    function changecolor(){
        document.body.style.backgroundColor = raandomcolor();
    }
}

const stoptchangingcolor = function(){
    clearInterval(interval) 
    interval = null;  //ye null isliye lgaya hain jb interval ka kaam ho gyaa ho too bdd mein naa chle (start click krne pe) => memory ko free ho jati isee lgane se 
}

document.querySelector('#start').addEventListener('click', startcolorchanging);

document.querySelector('#stop').addEventListener('click',stoptchangingcolor);
