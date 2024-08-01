const body=document.getElementById("body");
const div1=document.getElementsByClassName("div1")[0];
const button=document.getElementsByClassName("button")[0];
console.log(button)

body.addEventListener ("mousemove",(event)=>{
    console.log(event)
    let x=event.clientX;
    let y=event.clientY;
    div1.style.left=x-80+"px";
    div1.style.top=y-80+"px";

    
});
button.addEventListener("click",(event)=>{
    console.log(event);
    div1.style.boxShadow=`0 0 0 0 white`;
    div1.style.transitionDuration="5s";
    div1.style.border="0 solid black";
})
