// ** task->1 **

let btn1 =document.querySelector(".center1 button");
let p=document.querySelector(".center1 p");
let a=true
btn1.addEventListener("click",()=>{
if (a){
    p.innerHTML="welcome";
    a=false
}
else{
    p.innerHTML="Hello"
    a=true;
} 
})

// ** task->2 **

let btn =document.querySelector("#center2 button");
let sqr=document.querySelector("#center2 .sqr");
let count=0
btn.addEventListener("click",()=>{
  if(count==0){
      sqr.style.backgroundColor="red";
    count++}
    else if(count==1){
        sqr.style.backgroundColor="green";
    count++
    }
    else if(count==2){
        sqr.style.backgroundColor="blue";
    count++
    }
    else{
        sqr.style.backgroundColor="red";
    count=0;
    }

})

// ** task->3 **
let btn2=document.querySelector(".center1 #btn-1")
let box =document.querySelector(".center1 #box")
let visible=true
btn2.addEventListener("click",()=>{
    if(visible){
        box.style.visibility="hidden"
        btn2.innerHTML="Show"
        visible=false
    }
    else{
        box.style.visibility="visible"
        btn2.innerHTML="Hide"
        visible=true
    }
})


// ** task->4 **
let rl=document.querySelector(".center1 .btns #rl")
let rr=document.querySelector(".center1 .btns #rr")
let box1=document.querySelector("#box1")
let angle=0

rl.addEventListener("click",()=>{
    angle--
    box1.style.transform="rotate("+angle*45+"deg)"
})

rr.addEventListener("click",()=>{
    angle++
    box1.style.transform="rotate("+angle*45+"deg)"
})

// ** task->5 **
let addi=document.querySelector(".center1 .btns #addi")
let sub=document.querySelector(".center1 .btns #subs")
let num=document.querySelector(".center1 h1")
let count1=0

addi.addEventListener("click",()=>{

    num.innerHTML=++count1
})
sub.addEventListener("click",()=>{
if(count1>0){
    num.innerHTML=--count1
}
})


// ** task->6 **
let b1=document.querySelector(".center2 #b1")
let body=document.querySelector(".center2")
let dis=true
b1.addEventListener("click",()=>{
   if(dis){
    body.style.backgroundColor="white"
    dis=false
   }
   else{
    body.style.backgroundColor="black"
    dis=true
   }
})


// ** task->7 **
let input=document.querySelector(".page1 .center1 #input")
let p1 = document.querySelector(".page1 .center1 #p")

input.addEventListener("input",()=>{
    p1.innerHTML=input.value
})

// ** task->8 **
let bx=document.querySelector(".page1 .center1 .bxn")
bx.addEventListener("mouseenter",()=>{
bx.style.backgroundColor="crimson"
})
bx.addEventListener("mouseleave",()=>{
bx.style.backgroundColor="lawngreen"
    })

// ** task->9 **
let bxn2=document.querySelector(".page1 .center1 #bxn2")
let p3=document.querySelector(".page1 .center1 #p3")

bxn2.addEventListener("click",()=>{
    p3.innerHTML="Button Clicked"
})

// ** task->10 **

let but1=document.querySelector(".page1 .center1 #but1")
let but2=document.querySelector(".page1 .center1 #but2")
let but3=document.querySelector(".page1 .center1 #but3")
let red=document.querySelector(".page1 .center1 #red")
let yellow=document.querySelector(".page1 .center1 #yellow")
let green=document.querySelector(".page1 .center1 #green")


but1.addEventListener("click",()=>{
    red.style.backgroundColor="red";
     yellow.style.backgroundColor="black";
    green.style.backgroundColor="black";
})
but2.addEventListener("click",()=>{
 red.style.backgroundColor="black";
     yellow.style.backgroundColor="yellow";
    green.style.backgroundColor="black";})
but3.addEventListener("click",()=>{
 red.style.backgroundColor="black";
     yellow.style.backgroundColor="black";
    green.style.backgroundColor="green";})