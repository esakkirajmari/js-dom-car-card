let car=[{
    name:"CAR",
    head:"Mercedez Benz c300 2022",
    image1:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQGac0c6OheFIwLrHudU0JbRQ7q16CEJu6aPGiwxxv&s",
    image2:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR07raRTVqHYWM4yjoMhcWrWIZ5KHlinKEVDR_h6VCLqUZWaqKIfHjNknXTzWxWbkdYvJw&usqp=CAU",
    image3:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDqT4w2Bxqns1A5uxDQHydgEixmAySMgVBAQiseKfY1C_SY1Q7Gagq8TvQoAi2dwAaHn8&usqp=CAU",
    mileage:"Milegae:4,000 miles",
    fuel:"Fuel:25mpg",
    safety:"safety:",
    color:"pick a color",
    amount:"$134,450",
    amount1:"$140,500",
}];

let cont=document.querySelector(".container");

let cards=document.createElement("div");
cards.classList.add("row");
cont.appendChild(cards);

car.forEach(e=>{
    let star=document.createElement("div");
    star.classList.add("col");
    cards.appendChild(star);

    let star1=document.createElement("div");
    star1.classList.add("col-cards");
    star.appendChild(star1);

    let img=document.createElement("img");
    img.src=e.image1;
    star1.appendChild(img);

    let star2=document.createElement("div");
    star2.classList.add("col-cards-1");
    star1.appendChild(star2);

    let star3=document.createElement("span")
    star3.innerHTML=e.name;
    star3.classList.add("car")
    star2.appendChild(star3);

    let star4=document.createElement("h2")
    star4.innerHTML=e.head;
    star2.appendChild(star4);

    let star5=document.createElement("div");
    star5.classList.add("col-2");
    star2.appendChild(star5);

    let icon=document.createElement("i");
    icon.setAttribute("class","fa fa-car");
    star5.appendChild(icon);

    let star6=document.createElement("span");
    star6.innerHTML=e. mileage;
    star5.appendChild(star6)

    let star7=document.createElement("div");
    star7.classList.add("col-3");
    star2.appendChild(star7);

    let icon1=document.createElement("i");
    icon1.setAttribute("class","bi bi-fuel-pump-fill");
    star7.appendChild(icon1);

    let star8=document.createElement("span");
    star8.innerHTML=e. fuel;
    star7.appendChild(star8);

    let star9=document.createElement("div");
    star9.classList.add("col-4");
    star2.appendChild(star9);

    let icon3=document.createElement("i");
    icon3.setAttribute("class","fa fa-shield");
    star9.appendChild(icon3);

    let star10=document.createElement("span");
    star10.classList.add("s")
    star10.innerHTML=e. safety;
    star9.appendChild(star10);

    let star11=document.createElement("i");
    star11.setAttribute("class","fa fa-star")
    star9.appendChild(star11);

    let star12=document.createElement("i");
    star12.setAttribute("class","fa fa-star")
    star9.appendChild(star12);

    let star13=document.createElement("i");
    star13.setAttribute("class","fa fa-star")
    star9.appendChild(star13);

    let star14=document.createElement("i");
    star14.setAttribute("class","fa fa-star")
    star9.appendChild(star14);

    let star21=document.createElement("i");
    star21.setAttribute("class","fa fa-star")
    star9.appendChild(star21);

    let star15=document.createElement("p");
    star15.innerHTML=e. color;
    star2.appendChild(star15);

    let button1=document.createElement("button");
    let button2=document.createElement("button");
    let button3=document.createElement("button");

    star2.appendChild(button1);
    star2.appendChild(button2);
    star2.appendChild(button3);

    button1.style.background="red";
    button2.style.background="yellow";
    button3.style.background="brown";

    let star16=document.createElement("span");
    star16.innerHTML=e. amount;
    star16.classList.add("a-1")
    star2.appendChild(star16);

    let star17=document.createElement("span");
    star17.innerHTML=e. amount1;
    star17.classList.add("a-2")
    star2.appendChild(star17);

    let star18=document.createElement("div");
    star18.classList.add("col-4");
    star2.appendChild(star18);

    let button4=document.createElement("button");
    button4.classList.add("button-4");
    button4.innerHTML=`<i class="fa fa-shopping-cart" aria-hidden="true"></i>`+"Add to Cart";
    star18.appendChild(button4);



    button1.addEventListener("click",function(){
        img.src=e.image1;
        star3.style.backgroundColor="red";
    });
    button2.addEventListener("click",function(){
        img.src=e.image2;
        star3.style.backgroundColor="yellow";
    });
    button3.addEventListener("click",function(){
        img.src=e.image3;
        star3.style.backgroundColor="brown";
    });
    
    
})
