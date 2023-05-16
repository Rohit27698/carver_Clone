let url = `http://localhost:3000/posts`;

async function getdata(url){

try{
let res = await fetch (url);
let data = await res.json();

console.log(data);
display(data)
}catch(err){
    console.log("err");
}

}
getdata(url)

function display(data){
document.getElementById("container").innerText = ""

data.map((elem)=>{

let div = document.createElement("div")


let img = document.createElement("img")
img.src = elem.image;

let desc = document.createElement("p")
desc.textContent = elem.description;

let price = document.createElement("p")
price.textContent = elem.price;

let discount = document.createElement("p")
discount.textContent = elem.discount;

div.append(img , desc , price , discount);
container.append(div);

})

}


// SORT BY PRICE 
function sortPrice(){
    let sortPrice=document.getElementById("sorting").value;
    console.log(sortPrice);
    // let urs="";
    if(sortPrice=="lth"){

    urls=`http://localhost:3000/posts?_sort=price&_order=asc`;
    }
    else  if (sortPrice=="htl"){
     urls=`http://localhost:3000/posts?_sort=price&_order=desc`;
    }
    else{
      urls="http://localhost:3000/posts";
    }
    getdata(urls);
  }


// SORT BY DISCOUNT 

function sortDiscount(){

    let sortDiscount = document.getElementById("SortbyDiscount").value;
    console.log(sortDiscount);

    // if (sortdis=>10%) {
    //     urls = `http://localhost:3000/products?discount=10&discount_lte=15`
    // }

}

