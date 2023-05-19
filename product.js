// import navbar from "./navbar.js";

//     let navbarDiv = document.getElementById("navbar_div");
//     navbarDiv.innerHTML = navbar();





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

let desdiv=document.createElement('div')
desdiv.setAttribute('class', 'desdiv')

let desc = document.createElement("p")
desc.textContent = elem.description;
desc.setAttribute('class', 'pd')

let price = document.createElement("p")
price.textContent = "$ " +elem.price;
price.setAttribute('class', 'price')



let discount = document.createElement("p")
discount.textContent = elem.discount
desdiv.append(price, discount)

a.append(img , hr)
div.append(a ,desc, desdiv);
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

// function sortDiscount(urls){

//     let sortDiscount = document.getElementById("SortbyDiscount").value;
//     console.log(sortDiscount);

    // function sortDiscount(){
     const filterVal= document.getElementById("SortbyDiscount");
     filterVal.addEventListener("change",()=>{
      let selectVal=filterVal.value;
      let urlf1="http://localhost:3000/posts?discount="+selectVal+"&discount=100%off";
      console.log("val",selectVal)
        getdata(urlf1);
        console.log(urlf1);

     })
    

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



// }
// PAGINATION 
let page = 1;
let data = [];

const pegidata= async(page =1 , limit =9)=>{
try{
  let url = `http://localhost:3000/posts?_page=${page}&_limit=${limit}`;

   data = await fetch(url);
  data = await data.json();

  display(data);

}catch(err){
  console.log("err");
}

}

document.getElementById("prev").addEventListener("click" , prevfun)

function prevfun(){


  
  if (page ===1){
    alert("Page 1 .....!")
    return;
  }
  let pageNo = document.getElementById("pageNo");   
  pageNo.innerText = "";
  page-=1;
  pageNo.innerText = page;
  pegidata(page , 9)
}

document.getElementById("next").addEventListener("click" , nextfun)

function nextfun(){


  if (page === data.length){
    alert("Last Page ....!")
    return;
  }

  let pageNo = document.getElementById("pageNo");
  pageNo.innerText = "";
page +=1
pageNo.innerText = page;
pegidata(page , 9)

}


pegidata()



// DEBOUNCING

let timerId;

const searchdata = async () => {
  try {
    let searchInput = document.querySelector("search-input").value;
    let res = await fetch(`http://localhost:3000/posts&s=${searchInput}`);
    let data = await res.json();
    return data.Search;
  } catch (err) {
    console.log(err);
  }
}
display(data)

  const main = async () => {
    let datalist = await searchdata();
    if (datalist === undefined) {
      return false;
    }
    displayData(datalist);
  }
  
  const Debounce = (func, delay) => {
    if (timerId) {
      clearTimeout(timerId);
    }
  
    timerId = setTimeout(() => {
      func();
    }, delay);
  }



// debouncing ends 


let productdes=[]
function productDescription(elem){
  productdes.push(elem)
  localStorage.setItem('productDetail', JSON.stringify(productdes))
}

// function proDesc(posts){
//     localStorage.setItem("ProductDescription", JSON.stringify(posts));
//     window.location.href="prodata.html";
  
    // }

