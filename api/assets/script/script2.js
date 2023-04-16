    const contant = document.querySelector(".contant");
    const btn1 = document.querySelector(".interface1");
    const btn2 = document.querySelector(".interface2");
    const btn3 = document.querySelector(".interface3");
    const user = document.querySelector(".navigation_options")
    let data = [];
    function appendNewcard(id,img,title,description,rating,brand,price,category) {  
    const idp = document.createElement("span")
    idp.classList.add = ("serial")
    idp.innerText = `Product Serial Number /${id}`

    const imge = document.createElement("img");
    imge.classList.add("img");
    imge.src = img;
    ////
    const ti = document.createElement("h1");
    ti.classList.add("h1");
    ti.innerText =title;
    ////
    const catego = document.createElement("span");
    catego.classList.add("h1");
    catego.innerText =category;
    ////
    const parag = document.createElement("p");
    parag.classList.add("h1");
    parag.innerText =brand;
    ////
    const descrip = document.createElement("p");
    descrip.classList.add("p");
    descrip.innerText =description ;
    ////
    const pri = document.createElement("p");
    pri.classList.add("price");
    pri.innerText = `price : ${price}$`;
    ////
    const rating1 = document.createElement("div");
    rating1.classList.add("rating");
    ////
    const rat = document.createElement("p");
    rat.classList.add("rat");
    rat.innerText = `${rating}/5`;
    ////
    rating1.appendChild(rat);
    ////
    let continer = document.createElement("div");
    continer.classList.add("card");
    ////
    const Add = document.createElement("button");
    Add.innerText= "Add to cart";
    Add.classList.add("ADD");
    ////
    const buyDiv = document.createElement("div")
    buyDiv.classList.add("buydiv");
    ////
    buyDiv.appendChild(Add);
    ////
    const headDiv = document.createElement("div");
    headDiv.classList.add("headDiv");
    headDiv.appendChild(idp);
    headDiv.appendChild(catego);
    ////
    const imgDiv = document.createElement("div");
    imgDiv.classList.add("imgDiv");
    imgDiv.appendChild(rating1);
    imgDiv.appendChild(imge);
    ////
    const bodyDiv = document.createElement("div");
    bodyDiv.classList.add("bodyDiv");
    bodyDiv.appendChild(ti);
    bodyDiv.appendChild(parag);
    ////
    continer.appendChild(headDiv);
    continer.appendChild(imgDiv);
    continer.appendChild(bodyDiv);
    ////
    continer.appendChild(descrip);
    continer.appendChild(pri);
    continer.appendChild(buyDiv);
    contant.appendChild(continer);
    
}
    async function fetchProuduct(st ,en) {
    await fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((res) => (data=res.products));
    for (let i = st; i < en; i++) {  
        const item = data[i];
        appendNewcard(item.id,item.images[0] , item.title , item.description , item.rating , item.brand , item.price , item.category); 
}}
    function firrt10(st,en) {
    fetchProuduct(st , en);
}
    firrt10(st=0,en=10);

    btn1.addEventListener('click' , () => {
        contant.innerHTML = "";
    st = 0;
    en = 10;
    firrt10(st , en);
});

btn2.addEventListener('click' , () => {
    contant.innerHTML = "";
if( st == 0 & en === 10 )
    {
    st += 10;
    en += +10;
    firrt10(st , en);
} 
if( st == 20 & en == 30 ){
    st -= 10;
    en -= 10;
    firrt10( st , en )}
});

btn3.addEventListener('click' , () => {
    contant.innerHTML = "";
if( st == 10 & en == 20 ){
    st += 10;
    en += 10;
    firrt10(st , en);
};
if( st==0 & en==10 ){
    st += 20;
    en += 20;
    console.log("if32");
    firrt10( st , en );
}});

// const seartch = document.querySelector(".search input");
// async function seartchwhenteyp(){
//     contant.innerHTML = "";
//     navigation_options.style.visibility = "hidden";
//     const writeing = seartch.value.toUpperCase();
//     const back = document.createElement("button");
//     back.innerText="Back"
//     back.classList.add("back");
//     contant.appendChild(back);
//     back.addEventListener('click' ,  () =>{
//         contant.innerHTML = "";
//         seartch.value = ""; 
//     navigation_options.style.visibility = "visible";
//     fetchProuduct( 0 , 10 );
// });
//     await fetchProuduct()
//     for (let i = 0; i < data.length; i++) {
//     const item = data[i];
//     if(item.title.toUpperCase().indexOf(writeing) > -1 || item.brand.toUpperCase().indexOf(writeing) > -1 || item.category.toUpperCase().indexOf(writeing) > -1){
//         appendNewcard(item.images[0] , item.title , item.description , item.rating , item.brand , item.price , item.category); 
// }}}


