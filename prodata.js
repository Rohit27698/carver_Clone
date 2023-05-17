var Descdata = JSON.parse(localStorage.getItem('productDetail'))|| [];

display(Descdata) 

function display(Descdata){
document.getElementById("container").innerText = ""


Descdata.map((elem)=>{
  var imgDiv = document.createElement("div")
  imgDiv.id = "imgdiv"
  imgDiv.style.width = "60%";
  // imgDiv.style.boxShadow = " rgba(0, 0, 0, 0.24) 0px 3px 8px"

  let img = document.createElement("img")
  img.src = elem.image;
  img.style.height = "700px";
  img.style.width = "800px";

  
  let descriptionDiv = document.createElement("div")
  descriptionDiv.style.width = "40%"
  
  let description = document.createElement("p")
  description.textContent = elem.description;
  description.style.fontSize = "30px"
  // description.style.font-weight = "200";
  
  let price = document.createElement("p")
  price.textContent = "price:"+ elem.price;
  price.style.fontSize = "23px"

  let hr = document.createElement("hr")
  hr.style.border= "solid";
  
  let addbtn = document.createElement("button")
  addbtn.textContent = "Add to bag";
  // addbtn.style.fontSize = "50px"
  addbtn.setAttribute("id" , "addbtn");

  addbtn.style.background = "yellow"
  addbtn.style.width = "700px";
  addbtn.style.height = "50px"
  // addbtn.style.justifyContent= "center"
  
  // addbtn.setAttribute("id","cartbtn");
  addbtn.addEventListener("click",function(){
            addToCart(elem);
        })
  
  
  let Description = document.createElement("p")
  Description.textContent = elem.Description; 
  price.style.fontSize = "23px"
  
  let TruckOption =  document.createElement("p")
  TruckOption.textContent= "Truck Option : " +elem.Truck_Option;
  
  let Truck_Color =  document.createElement("p")
  Truck_Color.textContent= "Truck Color :"+ elem.Truck_Color;
  
  let Wheels =  document.createElement("p")
  Wheels.textContent=  "Wheels : " +elem.Wheels;
  
  let Bearings =  document.createElement("p")
  Bearings.textContent=  "Bearings : " +elem.Bearings;
  
  let Grip_Tape =  document.createElement("p")
  Grip_Tape.textContent=  "Grip_Tape : " + elem.Grip_Tape;
  
  let Hardware =  document.createElement("p")
  Hardware.textContent= "Hardware : "+ elem.Hardware;
  
  let Length =  document.createElement("p")
  Length.textContent=  "Length : " +elem.Length;
  
  let Width =  document.createElement("p")
  Width.textContent= "Width : " +elem.Width;
  
  let Wheelbase =  document.createElement("p")
  Wheelbase.textContent= "Wheelbase : " + elem.Wheelbase;
  
  
  descriptionDiv.append(description , price ,hr, addbtn ,Description , TruckOption,Truck_Color,Wheels, Bearings,Grip_Tape,Hardware,Length, Width,Wheelbase )
  imgDiv.append(img)
  
  container.append(imgDiv , descriptionDiv )
  
})
}
let cartdata = []

function addToCart(elem){
 cartdata.push(elem)
 localStorage.setItem('cartDetail' , JSON.stringify(cartdata))
//  window.location.href = "cart.html";

}


// let cartArray = JSON.parse(localStorage.getItem("cartItem")) || [];
// let count=0;
// function addToCart(products) {
//   count+=1;
//   if(count>1){
//     alert("Already added to Cart");
//     return;
//   }
//   cartArray.push(products);
//   localStorage.setItem("cartItem", JSON.stringify(cartArray));

// }
