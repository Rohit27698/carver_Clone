



function display(){
document.getElementById("container").innerText = ""

var imgDiv = document.createElement("div")

let img = document.createElement("div")
img.src = image;

let descriptionDiv = document.createElement("div")

let description = document.createElement("p")
description.textContent = description;

let price = document.createElement("p")
price.textContent = price;

let addbtn = document.createElement("button")
addbtn.textContent = "Add to bag";

addbtn.addEventListener("click", ()=>{
  addToCart(item);
})


let Description = document.createElement("p")
Description.textContent = Description; 

let TruckOption =  document.createElement("p")
TruckOption.textContent= Truck_Option;

let Truck_Color =  document.createElement("p")
Truck_Color.textContent= Truck_Color;

let Wheels =  document.createElement("p")
Wheels.textContent= Wheels;

let Bearings =  document.createElement("p")
Bearings.textContent= Bearings;

let Grip_Tape =  document.createElement("p")
Grip_Tape.textContent= Grip_Tape;

let Hardware =  document.createElement("p")
Hardware.textContent= Hardware;

let Length =  document.createElement("p")
Length.textContent= Length;

let Width =  document.createElement("p")
Width.textContent=Width;

let Wheelbase =  document.createElement("p")
Wheelbase.textContent=Wheelbase;


descriptionDiv.append(description , price , addbtn ,Description , TruckOption,Truck_Color,Wheels, Bearings,Grip_Tape,Hardware,Length, Width,Wheelbase )
imgDiv.append(img)

container.append(descriptionDiv ,imgDiv )


}

display()


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
