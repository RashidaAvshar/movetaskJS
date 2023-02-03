let land = document.querySelector(".box")
let point = document.querySelector(".point")
let landWidth = land.offsetWidth - 10;
let landHeight = land.offsetHeight - 10;
let pointWidth = point.offsetWidth;
let pointHeight = point.offsetHeight;
let topPos = 0;
let leftPos = 0;


document.body.addEventListener("keydown", (e) => {
    if(e.which == 37 && leftPos>0){
        leftPos -= 10;
    }
    if(e.which == 38 && topPos>0 ){
        topPos -= 10;
    }
    if(e.which == 39 && leftPos<landWidth - pointWidth){
        leftPos += 10;
    }
    if(e.which == 40 && topPos<landHeight-pointHeight){
        topPos += 10;
    }

    point.style.left = leftPos + "px"
    point.style.top = topPos + "px"    
})