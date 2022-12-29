function text(words) {
    let o = document.getElementById("un"),
        t = document.getElementById("text"),
        waite = false,
        visible = true,
        charCounter = 1,
        x = 1, i=0; 
window.setInterval(() => {
    if (charCounter === 0 && waite === false){
        waite = true;
        t.innerHTML = words[0].substring(0, charCounter);
        window.setTimeout(function(){
            let useWord = words.shift();
            words.push(usedWord);
            x = 1;
            charCounter += x;
            waite = false;
            
        }, 500);
    } else if (charCounter === words[i].length + 1 && waite === false) {
        waite = true;
        window.setTimeout(function() {
            x = -1;
            charCounter += x;
            waite = false;
            
        }, 500);
        if(words[i].length===charCounter) i++;
    } else if (waite === false){
        t.innerHTML = words[i].substring(0, charCounter);
        charCounter += x;
    }
}, 120);

window.setInterval(() => {
    if(visible === true) {
        o.className = "un hidden";
        visible = false;
    } else {
        o.className = "un";
        visible = true;
    }
}, 400)
}

text(["HTML", "CSS", "JavaScript"])
