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
div.setAttribute("id" , "detaildiv")

let a=document.createElement('a')
// a.href='prodata.html';
a.setAttribute("href" , "prodata.html")
a.id='anchor'
a.addEventListener('click', function(){
  productDescription(elem)
})

let img = document.createElement("img")
img.src = elem.image;


let hr = document.createElement("hr")
hr.style.border= "3px solid rgb(23, 22, 22);";

let desc = document.createElement("p")
desc.textContent = elem.description;

let price = document.createElement("p")
price.textContent = elem.price;

let discount = document.createElement("p")
discount.textContent = elem.discount;

a.append(img , hr)
div.append(a , desc , price , discount);
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

function sortDiscount(urls){

    let sortDiscount = document.getElementById("SortbyDiscount").value;
    console.log(sortDiscount);

    // function sortDiscount(){
    function filter1(){
        let urlf1="http://localhost:3000/posts?discount_gte=0&discount_lte=20";
        getdata(urlf1);
      }
      function filter2(){
        let urlf2="http://localhost:3000/posts?discount_gte=20&discount_lte=30";
        getdata(urlf2);
      }
      function filter3(){
        let urlf3="http://localhost:3000/posts?discount_gte=30&discount_lte=40";
        getdata(urlf3);
      }
    // }  
    // sortDiscount()

    // if (sortDiscount>=10%) {
    //     urls = `http://localhost:3000/products?discount=10&discount_lte=20`
    //     getdata(urls)
    // }
    // if (sortDiscount>=10%) {
    //     urls = `http://localhost:3000/products?discount=10&discount_lte=20`
    //     getdata(urls)
    // }
    // if (sortDiscount>=10%) {
    //     urls = `http://localhost:3000/products?discount=10&discount_lte=20`
    //     getdata(urls)
    // }



}


let productdes=[]
function productDescription(elem){
  productdes.push(elem)
  localStorage.setItem('productDetail', JSON.stringify(productdes))
}

// function proDesc(posts){
//     localStorage.setItem("ProductDescription", JSON.stringify(posts));
//     window.location.href="prodata.html";
  
    // }

