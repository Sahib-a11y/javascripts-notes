document.getElementById("images").addEventListener("click",function(e){
    console.log("clicked inside");
},false)

document.getElementById("owl").addEventListener("click",function(e){  //jbb hmm owl pe chick kree gee tp bubb;e ho ke ul pe jayee gaaa , iss bubble ohna khte hain
    console.log("owl clicked");
    // e.stopPropagation()  // jbb hmm yee event usee krte hainn to bubble ohna bndd ho jata hain.
},false)

// e.target.parentNode   => yee  element target value ke parent ko access krta hain. 

// removeIt.parentNode.removeChild(removeIt)  smjnaa hain sir se 
