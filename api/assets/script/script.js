
const user = document.querySelector(".user");
const userinter = document.querySelector(".user_interface");
const search = document.querySelector(".search");
const contin = document.querySelector(".continer");
const navigat = document.querySelector(".continer");

let data = [];
let x = 0;
let y = 10;


function appendNewcards(brand,category,title,description,price,images,id,rating){
    const syrnum = document.createElement("p");
    syrnum.classList.add = 'syrnum';
    syrnum.innerText = `Product Serial Number ${id} `;
    
    const h2 = document.createElement("h2");
    h2.innerText = brand;

    const div1 = document.createElement("div");
    div1.classList.add = 'head';
    div1.appendChild(syrnum);
    div1.appendChild(h2);

    const div2 = document.createElement("div");
    div2.classList.add = 'imagereat';

    const star = document.createElement("span");
    star.classList.add = 'span2'
    star.innerText = rating;

    const image = document.createElement("img");
    image.classList.add = 'clickimg';
    image.src = images[0];

div2.appendChild(star);
div2.appendChild(image);

    const titl = document.createElement("h3");
    titl.classList.add = 'title';
    titl.innerText = title;

    const para = document.createElement("h4");
    para.classList.add = 'category';
    para.innerText = category;

const div3 = document.createElement("div");
div3.classList.add = 'mid';
div3.appendChild(titl);
div3.appendChild(para);

    const discrep = document.createElement("p");
    discrep.classList.add = 'discrep';
    discrep.innerText = description;

    const pric = document.querySelector("span");
    pric.classList.add = 'span1';
    pric.innerText = `${price} $`;

const div4= document.createElement("div");
div4.classList.add = 'disc';
div4.appendChild(div3);
div4.appendChild(discrep);
div4.appendChild(pric);

contin.appendChild(div1);
contin.appendChild(div2);
contin.appendChild(div4);
}
async function fetchcard(x,y){
    await fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((res) =>(data =res.products));
    for (let i = x; i < y; i++) {  
        const item = data[i];
        appendNewcards(item.brand, item.category, item.title, item.description, item.price, item.images[0], item.id,item.rating);
}
}


