
const header = document.getElementById('header');
if( header != null) {
    header.innerHTML = `
    <div id="overlay-menu" class="overlay" style="display: none;">
        <div class="menu-container">
            <div class="menu-item" onclick="location.href='index.html'">
                <div><h5>Home</h5></div>                   
            </div>
            <div class="menu-item" onclick="location.href='search-result.html'">
                <div><h5>Products</h5></div>              
            </div>
            <div class="menu-item">
                <div><h5>About Us</h5></div>               
            </div>
            <div class="menu-item">
                <div><h5>Account Profile</h5></div>                
            </div>
        </div>
    </div>
    <div id="overlay-search" class="overlay">
        <div class="overlay-search-container">
            <div class="icon-close" onclick="overlay_off_search()"></div>
            <div class="search">
                <input type="text" placeholder="Search" class="search-input ibm-plex-serif-regular">
                <button class="search-button" onclick="location.href='search-result.html'"><i class="icon-search-white"></i></button>
            </div>
        </div>
    </div>
    <div class="header-container">
        <div class="icon-menu" onclick="overlay_menu()"></div>
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
            <div class="icon-search" onclick="overlay_on_search()"></div>
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