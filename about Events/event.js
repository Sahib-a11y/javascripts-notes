// events
const one = document.getElementById("one")

// one = document.addEventListener('click' ,function(event){
//     // console.log( event.type)
// })

// timestamp
// timestamp date aur time deta hain , jee event start time and end time ptaa krnee ke liyee use hota hain 
// console.log(Date.now())

document.addEventListener("click", function(event) {
    console.log("Clicked Element:", event.target);
});

document.addEventListener("mouseover", function(event) {    //yeaa mouse ke event ko trackk krnee ke liyee use hota hain .
    console.log("Mouse moved to:", event.toElement);
});

document.addEventListener("click", function(event) {      // yeaa target hi traa kamm krtaa hain target or iske bich koi diff nahi hain.
    console.log("Clicked srcElement:", event.srcElement);
});

document.getElementById("one").addEventListener("click", function(event) {
    // console.log("Target:", event.target); // Jis element par click hua
    console.log("Current Target:", event.currentTarget); // Jis element par listener laga hai
});


document.addEventListener("mousemove" , function(e){   // yeaa mouse pointer ki position btati hain.
    console.log("click event X =" , e.clientX);   // yeaa left aur right ko effect krta hain.
    console.log("click event Y =" , e.clientY);  //yee up and down mein effect hotaaa hain.
    
})

document.addEventListener("mousemove",function(e){
    console.log('screen x',e.screenX)
    console.log('screen y',e.screenY)
})

document.addEventListener("mousemove",function(e){
    console.log('page x =',e.pageX);
    console.log("page y",e.pageY)
})

document.addEventListener("keydown", function(event) {
    console.log("Alt Key Pressed:", event.altKey);     //yeaa event keyboaed event  aur isme press key hui hain ja nahi je btata hain  alt ki.
    console.log("Ctrl Key Pressed:", event.ctrlKey);   //yeaa event keyboaed event  aur isme press key hui hain ja nahi je btata hain  ctrl ki
    console.log("shift key pressed:" , event.shiftKey);
    
});

document.addEventListener("keydown", function(event) {   // keycode jbb preess krte hain code usee button ka code detaa hain konsa key press hua
    console.log("Key Code:", event.keyCode);
});



