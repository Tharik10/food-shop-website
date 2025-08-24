/* Slide Show */

var img=document.getElementById("img")
var images = ['Slide/2.jpg', 'Slide/3.jpg', 'Slide/4.jpg', 'Slide/5.jpg', 'Slide/1.jpg']

var x=0

function slide()
{
    if(x<images.length)
    {
        x=x+1
    }
    else{
        x=1
    }
    img.innerHTML="<img src="+images[x-1]+">"
}
setInterval(slide,2000)


/*  side-nav*/
var sidenavbar = document.querySelector(".side-navbar")

function sidenav()
{
    sidenavbar.style.top="0"
}

function closebutton() {
    sidenavbar.style.top = "-100%"
} 

/* Menu */

var insidebuttoncolor = document.querySelector(".inside-menu-containers")

function bagcolor(event) {
    event.target.style.backgroundColor="black"
}


/* Book form */

function book()
{
    alert("Book Table Successfully")
}