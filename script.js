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

/**
 * Increases the decreases the quantity of ordered items and changes the 
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

var delete_count = 0;
function delete_cart(val){
    let product = [document.getElementById("product-1"), document.getElementById("product-2")];
    let price = [87.99, 33.99];

    product[val].style.display = "none";
    let a = document.getElementById("total").innerHTML;
    a = Number(a.substring(8));
    document.getElementById("total").innerHTML = "Total: $" + parseFloat(a-price[val]).toFixed(2);
    delete_count += 1;

    if(delete_count == product.length){
       document.getElementById("shop-cart").style.display = "none";
        document.getElementById("no-product-cart").style.display = "block"; 
    }   
}

/**
 * Shows and hides overlay elements
 */

function overlay_on_search() {
    if(document.getElementById("overlay-search") != null){
        if(document.getElementById("overlay-menu").style.display == "block"){
            document.getElementById("overlay-menu").style.display = "none";
        }
        if(document.getElementById("overlay-filter") !=null){
            if(document.getElementById("overlay-filter").style.display == "block"){
                document.getElementById("overlay-filter").style.display = "none";
            }
        }
        document.getElementById("overlay-search").style.display = "block";
    }
}
  
function overlay_off_search() {
    if(document.getElementById("overlay-search") != null){
        document.getElementById("overlay-search").style.display = "none";    
    }
}

function overlay_menu() {
    let overlay = document.getElementById("overlay-menu");
    if(overlay != null){
        if(overlay.style.display == "none"){
            if(document.getElementById("overlay-search").style.display == "block"){
                document.getElementById("overlay-search").style.display = "none";
            }
            if(document.getElementById("overlay-filter") != null){
                if(document.getElementById("overlay-filter").style.display == "block"){
                    document.getElementById("overlay-filter").style.display = "none";
                }
            }
            overlay.style.display = "block";
        }else if(overlay.style.display == "block"){
            overlay.style.display = "none";
        }
    }
}

function filter_overlay(){
    let filter_item = document.getElementById("filter").innerHTML;
    document.getElementById("filter-overlay").innerHTML = filter_item;
    
    if(document.getElementById("overlay-search").style.display == "block"){
        document.getElementById("overlay-search").style.display = "none";
    }
    if(document.getElementById("overlay-menu").style.display == "block"){
        document.getElementById("overlay-menu").style.display = "none";
    }

    if(document.getElementById("overlay-filter").style.display == "block"){
        document.getElementById("overlay-filter").style.display = "none";
    }else{
        document.getElementById("overlay-filter").style.display = "block";
    }
}

/**
 * Switches the product image in product page
 */
function switch_image_1(val){
    let images = ["images/product(18).jpg", "images/product(18)-2.jpg"]
    let product_img = document.getElementById("product").src;

    let i;
    for(i = 0; i < images.length; i++){
        if(product_img.includes(images[i])){
            break;
        }
    }

    document.getElementById("product").src = images[(i+val+images.length)%images.length];
}

function switch_image_2(val){
    let images = ["images/product(15).jpg", "images/happy_dog_product.webp"]
    let product_img = document.getElementById("product").src;

    let i;
    for(i = 0; i < images.length; i++){
        if(product_img.includes(images[i])){
            break;
        }
    }

    document.getElementById("product").src = images[(i+val+images.length)%images.length];
}



