
window.addEventListener("scroll", function(){
    let offset = window.pageYOffset;
    if(offset > 50){
        this.document.getElementById("header").style.backgroundColor = "black";
        this.document.getElementById("header").style.color = "white";
        this.document.querySelector(".user a").style.color ='white'
        const a = document.querySelectorAll(".menubar a")
        a.forEach(element => {
            element.style.color = 'white';
        });
    }
    if(offset <= 50){
        this.document.getElementById("header").style.backgroundColor = "transparent";
        this.document.getElementById("header").style.color = "black";
        this.document.querySelector(".user a").style.color ='black'
        const a = document.querySelectorAll(".menubar a")
        a.forEach(element => {
            element.style.color = 'black';
        });
    }
})

function regEventShowScroll(e){
    var locationE = e.getClientRects()[0]
    var heightScreen = window.innerHeight;
    if(!(locationE.bottom < 0 || locationE.top > heightScreen)){
        e.classList.add("open");
    }else{
        e.classList.remove("open");
    }
}
var ElementAnimation = document.querySelectorAll(".show-when-sroll");
function checkAnimation(){
    ElementAnimation.forEach(element => { 
        regEventShowScroll(element)
    });
}
window.onscroll = checkAnimation
