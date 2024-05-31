
const header = document.getElementById('header');
if( header != null) {
    header.innerHTML = `
    <div class="header-container">
        <div class="icon-menu"></div>
        <div class="logo" onclick="location.href='index.html'">
            <p class="logo-row-1">Stefmar<p>
            <p class="logo-row-2">Pet Care</p>
        </div>
        <div class="header-categories">
            <h6><a href="index.html">Home</a></h4>
            <h6><a href="search-result.html">Products</a></h4>
            <h6>About Us</h4>
        </div>
        
        <div class="header-icons">
            <div class="search">
                <input type="text" placeholder="Search" class="search-input ibm-plex-serif-regular">
                <button class="search-button" onclick="location.href='search-result.html'"><i class="icon-search-white"></i></button>
            </div>
            <div class="icon-search"></div>
            <div class="icon-login"></div>
            <div class="icon-shopcart" onclick="location.href='shop-cart.html'"></div>
        </div>
    </div>
    `      
}

const footer = document.getElementById('footer');
if( footer != null) {
    footer.innerHTML = `
    <div class="footer-container">
        <div>
            <h6 style="text-align:center">Contact</h4>
            <p>Pet Shop Sydney <br> 517 Bunnerong Rd, Matraville<br> 2036, Sydney, NSW, Australia <br>Tel: 1300 139 756</p>
        </div>
        <div>
            <h6 style="text-align:center">Deliveries & Returns</h4>
            <p>Deliveries & Returns</p>
            <p>Privacy Notice</p>
            <p>Conditions & Terms</p>
        </div>
        <div>
            <h6 style="text-align:center">Follow Our Social Media</h4>
            <div class="footer-icons">
                <i class="icon-facebook"></i>
                <i class="icon-X"></i>
            </div>
        </div>
    </div>
    <p class="copyright">Copyright © 2024 Stefmar Pet Care</p>
    `      
}

const featured = document.getElementById('featuredProducts');

if( featured != null) {
    featured.innerHTML = `
    
    <div class="product-featured">
        <img src="images/product(2).jpg" alt="Sashas Blend Joint Health Powder 250g" class="product-img">
        <h5 class="price">$73.99</h6>
        <p>Sashas Blend Joint Health Powder 250g</p>
    </div>
    <div class="product-featured">
        <img src="images/products(1).jpg" alt="API Accu Clear 120ml" class="product-img">
        <h5 class="price">$15.99</h6>
        <p>API Accu Clear 120ml</p>
    </div>
    <div class="product-featured">
        <img src="images/product(9).jpg" alt="Kazoo Classic Soft Walking Harnesse" class="product-img">
        <h5 class="price">$30.99</h6>
        <p>Kazoo Classic Soft Walking Harnesse</p>
    </div>
    <div class="product-featured">
        <img src="images/product(10).jpg" alt="Euro Groom Curved Slicker Brush Soft" class="product-img">
        <h5 class="price">$30.99</h6>
        <p>Euro Groom Curved Slicker Brush Soft</p>
    </div>
    <div class="product-featured">
        <img src="images/product(16).jpg" alt="Advantage Dog 4-10Kg Medium" class="product-img">
        <h5 class="price">$64.99</h6>
        <p>Advantage Dog 4-10Kg Medium</p>
    </div>
    <div class="product-featured">
        <img src="images/product(17).jpg" alt="DogsLife Dog Grooming Wipes" class="product-img">
        <h5 class="price">$19.99</h6>
        <p>DogsLife Dog Grooming Wipes</p>
    </div>
    <div class="product-featured">
        <img src="images/product(5).jpg" alt="Maxpro Pet Deodorant Strawberry 150ml" class="product-img">
        <h5 class="price">$16.99</h6>
        <p>Maxpro Pet Deodorant Strawberry 150ml</p>
    </div>
    <div class="product-featured">
        <img src="images/product(14).jpg" alt="Supervite Gold Active Kangaroo" class="product-img">
        <h5 class="price">$64.99</h6>
        <p>Supervite Gold Active Kangaroo</p>
    </div>
    <div class="product-featured">
        <img src="images/product(20).jpg" alt="Advance Dog Adult Large Breed Ageing Chicken" class="product-img">
        <h5 class="price">$134.99</h6>
        <p>Advance Dog Adult Large Breed Ageing Chicken 2</p>
    </div>
    <div class="product-featured">
        <img src="images/product(21).jpg" alt="BB Dog Bed 60x48 Bliss Lounger Medium" class="product-img">
        <h5 class="price">$99.99</h6>
        <p>BB Dog Bed 60x48 Bliss Lounger Medium</p>
    </div>
    
    `      
}

/**
 * Changes the quatity of a product (in product page)
 */
const decrement = document.getElementById('decrement');

if(decrement != null){
    decrement.addEventListener('click', function(){
        let n = Number(document.getElementById('quantity').innerHTML);
        if(n > 1){
            document.getElementById('quantity').innerHTML = n-1;
        }
    }); 
}


const increment = document.getElementById('increment');

if(increment != null){
    increment.addEventListener('click', function(){
        let n = Number(document.getElementById('quantity').innerHTML);
        n = n+1;
        document.getElementById('quantity').innerHTML = n;
    }); 
}

/**Increases the decreases the quantity of ordered items and changes the 
 * total price accordingly
 */

const decrement1 = document.getElementById('decrement-1');

if(decrement1 != null){
    decrement1.addEventListener('click', function(){
        let n = Number(document.getElementById('quantity-1').innerHTML);
        if(n > 1){
            document.getElementById('quantity-1').innerHTML = n-1;
            let a = document.getElementById("total").innerHTML;
            a = Number(a.substring(8));
            a = a-87.99;
            document.getElementById("total").innerHTML = "Total: $" + parseFloat(a).toFixed(2);
        }
    }); 
}


const increment1 = document.getElementById('increment-1');

if(increment1 != null){
    increment1.addEventListener('click', function(){
        let n = Number(document.getElementById('quantity-1').innerHTML);
        n = n+1;
        document.getElementById('quantity-1').innerHTML = n;
        let a = document.getElementById("total").innerHTML;
        a = Number(a.substring(8));
        a = a+87.99;
        document.getElementById("total").innerHTML = "Total: $" + parseFloat(a).toFixed(2);
    }); 
}

const decrement2 = document.getElementById('decrement-2');

if(decrement2 != null){
    decrement2.addEventListener('click', function(){
        let n = Number(document.getElementById('quantity-2').innerHTML);
        if(n > 1){
            document.getElementById('quantity-2').innerHTML = n-1;
            let a = document.getElementById("total").innerHTML;
            a = Number(a.substring(8));
            a = a-33.99;
            document.getElementById("total").innerHTML = "Total: $" + parseFloat(a).toFixed(2);
        }
    }); 
}

const increment2 = document.getElementById('increment-2');

if(increment2 != null){
    increment2.addEventListener('click', function(){
        let n = Number(document.getElementById('quantity-2').innerHTML);
        n = n+1;
        document.getElementById('quantity-2').innerHTML = n;
        let a = document.getElementById("total").innerHTML;
        a = Number(a.substring(8));
        a = a+33.99;
        document.getElementById("total").innerHTML = "Total: $" + parseFloat(a).toFixed(2);
    }); 
}
/*---------------------------------------------------------------------------------------*/

/**
 * Changes the colour and text of "add to cart" button
 */
const button = document.getElementById('button');

if(button != null){
    button.addEventListener('click', function(){
        let text = button.innerHTML;
        let state1 = 'Add to cart';
        let state2 = 'Added to cart'
        if(text.localeCompare(state2) == 0){
            button.style.backgroundColor = '#D2145E';
            button.innerHTML = state1;
        }else if(text.localeCompare(state1) == 0){
            button.style.backgroundColor = '#0FAC0C'
            button.innerHTML = state2;
        }
    });
}


/**
 * Changes the colour and text of receipt request button
 */
const receipt = document.getElementById("receipt-request");

if(receipt != null){
    receipt.addEventListener("click", function(){
        let text = receipt.innerHTML;
        if(text.localeCompare("Click here to get receipt") == 0){
            receipt.style.backgroundColor = '#0FAC0C';
            receipt.innerHTML = "Receipt sent to your Email";
        }
    })
}

/**
 * Controls hide and show of product detail 
 */

const detail = document.getElementById("button-detail");

if(detail != null){
    detail.addEventListener("click", function(){
        let description = document.getElementById("description")
        let state = description.style.display;
        if(state == "none"){
            document.getElementById("description").style.display = "inline-block";
            document.getElementById("hidden").style.display = "none";
            document.getElementById("shown").style.display = "inline-block";
        }else if(state == "inline-block"){
            document.getElementById("description").style.display = "none";
            document.getElementById("shown").style.display = "none";
            document.getElementById("hidden").style.display = "inline-block";
        }
    })
}

/**
 * Payment detail Validation
 */

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
function validate_form(){
    let input = document.forms["payment-form"]
    if(isNaN(input["card-number"].value) || input["card-number"].value.length != 16){
        alert("Invalid input. \n Card number must be a numerical value.")
        return
    }
    let expiry = input["expiry-date"].value;
    if(expiry[2] != "/"){
        alert("Invalid input. \n Please enter expiry date in the format mm/yy.")
        return
    }
    let m = expiry.substring(0, 2);
    let y = expiry.substring(3,5);   
    if(isNaN(m) || isNaN(y)){
        alert("Invalid input. \n Please enter expiry date in the format mm/yy.")
        return
    }else if(Number(m)>12 || Number(m) <= 0){
        alert("Invalid input. \nAllowed input for month is 1 to 12")
        return
    }else if(Number(y)<24){
        alert("Invalid input. \n The card is already expired.")
        return
    }
    if(isNaN(input["postal-code"].value)){
        alert("Invalid input. \n Postal code must be a numerical value.")
        return
    }
    if(isNaN(input["CVV"].value) || input["CVV"].value.length != 3){
        alert("Invalid input \n CVV must be a three digit value.")
        return
    }
    if(emailRegex.test(input["email-address"].value.toLowerCase()) == 0){
        alert("Invalid input \n Please enter a valid email address.")
        return
    }

    window.location.href = "confirmation.html";
    return false;
}

/**
 * Deletes products from shopping cart
 */

const buttonDelete1 = document.getElementById("delete-1");

if(buttonDelete1 != null){
    buttonDelete1.addEventListener("click", function(){
        document.getElementById("product-1").style.display = "none";
        let a = document.getElementById("total").innerHTML;
        a = Number(a.substring(8));
        a = a-87.99;
        document.getElementById("total").innerHTML = "Total: $" + parseFloat(a).toFixed(2);
    })  
}

const buttonDelete2 = document.getElementById("delete-2");

if(buttonDelete2 != null){
    buttonDelete2.addEventListener("click", function(){
        document.getElementById("product-2").style.display = "none";
        let a = document.getElementById("total").innerHTML;
        a = Number(a.substring(8));
        a = a-33.99;
        document.getElementById("total").innerHTML = "Total: $" + parseFloat(a).toFixed(2);
    })
}
