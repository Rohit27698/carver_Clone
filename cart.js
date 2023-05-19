var sample=[
  {
    "id": 3,
    "image": "https://cdn11.bigcommerce.com/s-icfw6t6sn3/images/stencil/380x380/products/699/3816/CarverBingPuckC72023_2Up__80529.1683034466.jpg?c=1",
    "description": "CARVER X BING 27.5, PUCK SURFSKATE COMPLETE C7 ",
    "price" :   285,
    "discount" : "6%off",
    "Description" : "Bing Copeland began surfing in 1949, at age 13, at the Manhattan Beach pier. Bing opened his first surf shop in the fall of 1959 with his friend Rick Stoner and became one of the major surfboard manufactures of the sixties and early seventy’s",
    "Truck_Option": "C7",
    "Truck_Color Option": "Raw",
    "Wheels": "70MM Concave Smoke 78A",
    "Bearings": "Built-In",
    "Grip_Tape": "Sugarcoat",
    "Hardware": "Stainless Steel",
    "Length": 37,
    "Width": 10.875,
    "Wheelbase": 21.25
  },
  {
    "id": 4,
    "image": "https://cdn11.bigcommerce.com/s-icfw6t6sn3/images/stencil/380x380/products/698/3813/CarverBingPuckCX2023_2Up__76670.1683034492.jpg?c=1",
    "description": "CARVER X BING 27.5 PUCK SURFSKATE COMPLETE CX",
    "price" :   270,
    "discount" : "18%off",
    "Description" : "Bing Copeland began surfing in 1949, at age 13, at the Manhattan Beach pier. Bing opened his first surf shop in the fall of 1959 with his friend Rick Stoner and became one of the major surfboard manufactures of the sixties and early seventy’s",
    "Truck_Option": "C7",
    "Truck_Color Option": "Raw",
    "Wheels": "70MM Concave Smoke 78A",
    "Bearings": "Built-In",
    "Grip_Tape": "Sugarcoat",
    "Hardware": "Stainless Steel",
    "Length": 37,
    "Width": 10.875,
    "Wheelbase": 21.25
  },
  {
    "id": 5,
    "image": "https://cdn11.bigcommerce.com/s-icfw6t6sn3/images/stencil/380x380/products/693/3787/CarverChrysalis2022_1000X1000__44396.1669068179.jpg?c=1",
    "description": "CARVER 29.5, CHRYSALIS SURFSKATE COMPLETE CX ",
    "price" :   250,
    "discount" : "35%off",
    "Description" : "Bing Copeland began surfing in 1949, at age 13, at the Manhattan Beach pier. Bing opened his first surf shop in the fall of 1959 with his friend Rick Stoner and became one of the major surfboard manufactures of the sixties and early seventy’s",
    "Truck_Option": "C7",
    "Truck_Color": "Raw",
    "Wheels": "70MM Concave Smoke 78A",
    "Bearings": "Built-In",
    "Grip_Tape": "Sugarcoat",
    "Hardware": "Stainless Steel",
    "Length": 37,
    "Width": 10.875,
    "Wheelbase": 21.25
  },
]
localStorage.setItem("cartProducts", JSON.stringify(sample))

document.querySelector("button").addEventListener("click", check);
var cart = JSON.parse(localStorage.getItem("cartProducts")) || [];

function getPrdouctCard(productName, productQty,discountPrice, productImage, index,proddis) {
  return `

  <div id="original">

      <div id="imageDiv">
         <img id="image" src="${productImage}" alt=""${productName}">
      </div>
      <div id="Main">
          <div id="Text">
              <div  id="nameDiv">
                  <h5 >${productName}</h5>
              </div>
              <div  id="priceDiv">
                  <h5>$${discountPrice*productQty}</h5>
              </div>
          </div>
          <div  id="discountDiv">
                  <h5 >Discount : ${proddis}</h4>
          </div>
          <div  id="btnDiv">
              <div  id="quantity">
                    Qty : <span class="productQty"><select onchange="updateQty(event, ${index})" style="border: none;outline: none;font-size: 15px;">
                      <option ${productQty === 1 ? "selected" : ""} value="1">1</option>
                      <option ${productQty === 2 ? "selected" : ""} value="2">2</option>
                      <option ${productQty === 3 ? "selected" : ""} value="3">3</option>
                      <option ${productQty === 4 ? "selected" : ""} value="4">4</option>
                      <option ${productQty === 5 ? "selected" : ""} value="5">5</option>
                   </select>
                   </span>
              </div>
              <div  id="delete">
                    <button onclick="delrow(${index})">REMOVE</button>
              </div>
          </div>
      </div>


  </div>`;


  
}

const couponHTML = `
<div id="Offer">    
      <div style="text-align: center;">
        <div id="trp">
          <p> Coupons <i class="fa fa-info-circle"></i></p>
        </div>
        <input placeholder="Enter Coupon Code" type="text" id="promo">
        <button onclick="check()">Apply</button>
      </div> <br>
    </div>
`;


function updateQty(event, position) {
  var cart = JSON.parse(localStorage.getItem("cartProducts")) || [];
  cart.forEach((item, index) => {
    if (index === position) {
      item.productQty = parseInt(event.target.value);
    }
  });
  localStorage.setItem("cartProducts", JSON.stringify(cart))
  displayCart(cart);
  caltotal(cart);
  displayCartItemsCount(cart);
}
var itemscount = localStorage.getItem("countitem")
function displayCartItemsCount(cart) {
  var cartItemsCount = cart && cart.length;
  var cartCountValue = "";
  if (cartItemsCount === 1) {
    cartCountValue = " 1 item";

  } else if (cartItemsCount > 1) {
    cartCountValue = " " + cartItemsCount + " items";

  }
  document.getElementById("per").innerHTML = cartCountValue;
  localStorage.setItem("countitem", cartCountValue)
}
function displayCart(cart) {
  document.querySelector("#bagItems").innerHTML = "";
  cart.map(function (elem, index) {
    var card = getPrdouctCard(elem.description, elem.productQty || 1, elem.price, elem.image, index,elem.discount);
    var div = document.createElement("div");
    div.innerHTML = card;
    document.querySelector("#bagItems").append(div);
  });
  if (cart && cart.length) {
    var couponDiv = document.createElement("div")

    couponDiv.innerHTML = couponHTML;
    document.querySelector("#bagItems").append(couponDiv);
  }
}

function delrow(index) {
  var cart = JSON.parse(localStorage.getItem("cartProducts")) || [];
  cart = cart.filter((item, i) => i !== index);
  localStorage.setItem("cartProducts", JSON.stringify(cart))
  displayCart(cart);
  caltotal(cart);
  displayCartItemsCount(cart);
  if (cart.length === 0) {
    document.getElementById("grandTotalParent").style.display = "none";
    document.getElementById("child").style.display = "block";
    var offerElement = document.getElementById("Offer");
    if (offerElement)
      offerElement.style.display = "none";
  }
}
var pert = localStorage.getItem("cartvalue");
function caltotal() {
  var cart = JSON.parse(localStorage.getItem("cartProducts")) || [];
  var carval = 0;
  for (var i = 0; i < cart.length; i++) {
    carval += parseInt(cart[i].price) * (cart[i] && cart[i].productQty || 1);

  }
  document.getElementById("grandTotalPrice").textContent = carval;
  document.getElementsByClassName("productPrice").textContent = carval;

  localStorage.setItem("cartvalue", carval);

}


function check() {
  var cart = JSON.parse(localStorage.getItem("cartProducts")) || [];
  var total = 0;
  cart.forEach((item) => {
    total = total + Number(item.price);
  });
  var ch = document.getElementById("promo").value;
  if (ch == "skateboard30" || ch == "akash30" || ch == "tijare30" || ch == "skate30") {
    var temp = document.createElement("p");
    temp.setAttribute("class", "krp");
    alert(temp = " 30% off applied");
    //  document.getElementById("Offer").append(temp);
    var change = (total * 3) / 10;
    document.getElementById("grandTotalPrice").textContent = total - change;
  }
}

// for calling cart
function showMyCart() {
  var cart = JSON.parse(localStorage.getItem("cartProducts")) || [];
  var offerElement = document.getElementById("Offer");
  if (cart && cart.length > 0) {
    document.getElementById("child").style.display = "none";
    document.getElementById("grandTotalParent").style.display = "block";
    if (offerElement)
      document.getElementById("Offer").style.display = "block";
  } else {
    document.getElementById("grandTotalParent").style.display = "none";
    document.getElementById("child").style.display = "block";
    if (offerElement)
      document.getElementById("Offer").style.display = "none";
  }
  var cartelements = document.getElementsByClassName("nykkacart");
  for (let i = 0; i < cartelements.length; i++) {
    var element = cartelements[i];
    if (element.style.display === "block") {
      element.style.display = "none";
      document.querySelector(".nykaacartinnerdiv").style.display = "none";
    } else {
      displayCartItemsCount(cart);
      caltotal(cart)
      displayCart(cart);
      element.style.display = "block";
      if (element.id === "nykaacartdiv") {
        setTimeout(() => {
          document.querySelector(".nykaacartinnerdiv").style.display = "block";
        }, 1000);
      }
    }
  };
}
document.querySelector("#checkout").addEventListener("click", function () {
  window.location.href = "address.html";
})