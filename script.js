/*let menubar= document.querySelector('#menu-bar');
let mynav= document.querySelector('.navbar');
let searchbar= document.querySelector('#search-bar');
let searchform= document.querySelector('#search-form');


menubar.onclick= () =>{
    menubar.classList.toggle('fa-times');
    mynav.classList.toggle('active');
}
searchbar.onclick= () =>{
    searchform.classList.toggle('active');
}*/
let signupBtn= document.getElementById("signupBtn");
let signinBtn= document.getElementById("signinBtn");
let nameField= document.getElementById("nameField");
let title= document.getElementById("title");

signinBtn.onclick = function(){
    nameField.style.maxHeight="0";
    title.innerHTML="Sign In";
    signupBtn.classList.add("disable");
    signinBtn.classList.remove("disable");
}
    signupBtn.onclick = function(){
        nameField.style.maxHeight="60px";
        title.innerHTML="Sign Up";
        signupBtn.classList.remove("disable");
        signinBtn.classList.add("disable");

}
var dance = [];
  
  // Initial rendering of cart based on dance array
  
  function renderCart() {
    var cartContent = document.getElementById("cart");
    var cartHTML = "";
    dance.forEach(item => {
      cartHTML += `
      <div class="">
        <img src="${item.src}" alt="cart-img"/>
        <div class="">
          <div class="cart-product-title">${item.name} Dance</div>
          <div class="cart-price">$${(item.price / 100).toFixed(2)}</div>
        </div>
        <i class="fa fa-trash-alt cart-remove"></i>
      </div>`;
    });

    // Update the cart's content
    cartContent.innerHTML = cartHTML;
  
    // Update the total price
    var totalPrice = dance.reduce((total, item) => total + item.price, 0);
    var totalElement = document.querySelector(".total-price");
    totalElement.textContent = "$" + (totalPrice / 100).toFixed(2);
  }
// Function to add items to the cart
function addToCart(itemName,itemsrc, itemPrice) {
    const cartItems = document.getElementById("cart-items");
    const newItem = document.createElement("li");
    newItem.innerHTML=`
    <div class="cart-content">
    <div class="cart-box">
    <img src=${itemsrc} alt="cart-img" style="height:50px;width:50px;"/>
    <div class="detail-box">
      <div class="cart-product-title">${itemName}</div>
      <div class="cart-price">${itemPrice}</div>
    </div>
    <i class="fa fa-trash-alt cart-remove"></i>
  </div>
  </div>`;
  const removeButton = newItem.querySelector(".cart-remove");
  removeButton.addEventListener("click", () => {
    // Call the function to remove the item when the icon is clicked
    removeFromCart(newItem);
  });

   // newItem.innerHTML = `<img src=${itemsrc} >${itemName} - $${(itemPrice / 100).toFixed(2)}`;
    cartItems.appendChild(newItem);
  }
  // Function to remove the item from the cart
function removeFromCart(item) {
    const cartItems = document.getElementById("cart-items");
    cartItems.removeChild(item);
  }
  function AddToCart() {
    dance.push({  src: "cartimages/hiphop2cart.jpg",
    name: "HipHop",
    price: 10000 });
    renderCart(); // Call the renderCart() function to update the cart content
    console.log(dance);
  }
  
//cart
let cartIcon= document.querySelector("#cart-icon");
let cart= document.querySelector(".cart");
let closecart= document.querySelector("#close-cart");
//open cart
cartIcon.onclick=() =>{
    cart.classList.add("active");
};
closecart.onclick=() =>{
cart.classList.remove("active");
 };

 //cart working
 if(document.readyState=='loading'){
    document.addEventListener('DOMContentLoaded',ready);
 }else{
    ready();
 }
 //making function
 function ready(){
    //remove items from cart
    var removeCartButtons = document.getElementsByClassName('cart-remove');
    console.log(removeCartButtons);
    for(var i=0;i<removeCartButtons.length; i++){
        var button =removeCartButtons[i];
        button.addEventListener('click', removeCartItem);
    }
}
//remove items from cart
function removeCartItem(event){
    var buttonClicked=event.target;
    buttonClicked.parentElement.remove();
}
function ShowCart(){
    const name = document.querySelector(".cart");

    name.style.display="inline";
    var cartContent = document.getElementById("cart");
    var cartHTML = "";
    dance.forEach(item => {
      cartHTML += `
      <div class="cart-box">
        <img src="${item.src}" alt="cart-img"/>
        <div class="detail-box">
          <div class="cart-product-title">${item.name} Dance</div>
          <div class="cart-price">$${(item.price / 100).toFixed(2)}</div>
        </div>
        <i class="fa fa-trash-alt cart-remove"></i>
      </div>`;
    });

    // Update the cart's content
    cartContent.innerHTML = cartHTML;
  
    // Update the total price
    var totalPrice = dance.reduce((total, item) => total + item.price, 0);
    var totalElement = document.querySelector(".total-price");
    totalElement.textContent = "$" + (totalPrice / 100).toFixed(2);
}
function HideCart(){
    const name = document.querySelector(".cart");

    name.style.display="none";
}
/*
function Addtocart(CostumeId){
    const Items=[]
    var retrieveditems = localStorage.getItem('Items');
    if(retrieveditems!=null)
    {
        const Items2 = JSON.parse(retrieveditems);
        const index = Items2.indexOf(CostumeId);
        console.log(index);
        if (index !== -1) {//if item already in cart
            alert("Item Alreaady in cart");
            
        } else { //if item not in cart
                
            Items2.push(CostumeId)
            var ItemString = JSON.stringify(Items2);
            localStorage.setItem('Items', ItemString);
            console.log(Items2);
            alert("Added to cart");
            }
    
    }
    else{
        Items.push(CostumeId)
        var ItemString = JSON.stringify(Items);
        localStorage.setItem('Items', ItemString);
        console.log(Items);
        alert("Added to cart");
    }
    
    
}*/
