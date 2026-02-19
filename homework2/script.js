let btn=document.querySelector(".page1 button")
let center=document.querySelector(".page1 .center1")
let img1=document.querySelector(".page1 .center1 .img")
let title=document.querySelector(".page1 .center1 .box .title")
let details=document.querySelector(".page1 .center1 .box .details")
let fn=document.querySelector(".page1 .center1 .box .details .fn")
let sp=document.querySelector(".page1 .center1 .box .details .sp")
let age=document.querySelector(".page1 .center1 .box .details .age")


let name1=[
    {
        name:"Thor",
        fullName:"Thor Odinson",
        Specialty:"The Strongest",
        Age:1000,
        img:"https://i.pinimg.com/736x/5f/64/d5/5f64d50a1a87df901f00ae9da3ed5f89.jpg",
        color:"#2dedf7"
    },
    {
        name:"Captain America",
        fullName:"Steave Roger",
        Specialty:"Captain",
        Age:70,
        img:"https://i.pinimg.com/736x/9f/fd/b4/9ffdb4d3ee45159de924a66ae419638f.jpg",
        color:"#202c3e"
    },
    {
        name:"Iron Man",
        fullName:"Tony Stark",
        Specialty:"The Smartest",
        Age:56,
        img:"https://i.pinimg.com/736x/4e/c2/66/4ec2662183d3c787d5fdc76aa4a78f29.jpg",
        color:"#471f1e"
    },
    {
        name:"Black Widow",
        fullName:"Natasha Romanoff",
        Specialty:"The Spy",
        Age:25,
        img:"https://i.pinimg.com/1200x/9c/da/6f/9cda6f14770b489195d53707eef07475.jpg",
        color:"#1b0606"
    },
    {
        name:"Hulk",
        fullName:"Bruce Banner",
        Specialty:"The Craziest",
        Age:50,
        img:"https://i.pinimg.com/736x/13/58/c1/1358c16891b237a3718db9f808039e8b.jpg",
        color:"#67cf4a"
    },
]



btn.addEventListener("click",()=>{
    let random= Math.floor(Math.random()*name1.length)

    img1.innerHTML = "";
    title.innerHTML = "";
    sp.innerHTML = "";
    fn.innerHTML = "";
    age.innerHTML = "";

    let img=document.createElement("img");
    img.setAttribute('src',name1[random].img)
    img.style.height="200px"
    img.style.objectFit="contain"
    img.style.margin="20px"
    img.style.marginLeft="30px"
    img.style.borderRadius="5px"
    img1.appendChild(img)

    let h1=document.createElement("h1")
    h1.innerHTML=name1[random].name
    h1.style.color=name1[random].color
    title.append(h1)

    let d1=document.createElement("h4")
    d1.innerHTML="Specialty: "+name1[random].Specialty
    d1.style.fontSize="1.2rem"
    d1.style.color="#939393"
    sp.append(d1)

    let d2=document.createElement("h4")
    d2.innerHTML="Full Name: "+name1[random].fullName
    d2.style.fontSize="1.2rem"
    d2.style.color="#939393"
    fn.append(d2)
    let d3=document.createElement("h4")
    d3.innerHTML="Age: "+name1[random].Age
    d3.style.fontSize="1.2rem"
    d3.style.color="#939393"
    age.append(d3)

    center.style.boxShadow="0px 0px 20px "+name1[random].color;
    document.querySelector(".page1 .center1").style.visibility="visible"
    document.querySelector(".page1 .center1 .ver").style.visibility="visible"
})
