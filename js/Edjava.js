//NOTE: THINGS I WANT TO DO
/*1. change color on button click (if else statement?) = interactivity!
  2. animate something, put on ABOUT page = using jquery NOT CSS!!
*/
//Prompt on input!!
function subscribeprompt(){
    var a= prompt("Heya wanna be a film maker!");
    
if (a =="yes"){
    document.querySelector(".button_1").innerHTML="Too bad this site's fake!";
}
else if (a =="no")
{document.querySelector(".button_1").innerHTML="Well then why are you here?";
}
else('');
{document.querySelector(".button_1").innerHTML="Too bad this site's fake!";
}
}

document.querySelector(".button_1").addEventListener("click", subscribeprompt);
//==============================================//
//COLOR CHANGE ON CLICK
/*function color(){
var x = Math.round(Math.random() * 255);
var y = Math.round(Math.random() * 255);
var z = Math.round(Math.random() * 255);
var bg = "background:rgb ("+x+" , "+y+" , "+z+");"; 
var element = document.getElementsByClassName("bgcolor");
element.style = bg;
}; 
document.querySelector(".button_2").addEventListener("click", "color");*/


//ALTERNATE COLOR CLICKER
    var color=["#ff7f11", "#9b0070", "#fbd004", "#00ce39", 
    "#D7241B", "#2D778B", "#2D8B45, #051C3B;"];
    var i=0;
    document.querySelector(".button_2").addEventListener("click",
    function(){
        i= i < color.length ? ++i : 0;
        document.querySelector(".bgcolor").style.background = color[i]
        document.querySelector(".bgcolor2").style.background = color[i]
        document.querySelector(".bgcolor3").style.background = color[i]
    })
//ANIMATE WHEN CLICKED

$(".animate3").click(function(){
  $(".free3").animate({
    left: '250px',
    opacity: '0.5',
    height: '150px',
    width: '150px',
    fontSize: '3em',
  });
});

$(".animate2").click(function(){
  $(".free2").animate({
    left: '250px',
    opacity: '0.5',
    height: '150px',
    width: '150px',
    fontSize: '3em',
  });
});

$(".animate1").click(function(){
  $(".free1").animate({
    left: '250px',
    opacity: '0.5',
    height: '150px',
    width: '150px',
    fontSize: '3em',
  });
});
