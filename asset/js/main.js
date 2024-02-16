var header = "";
header = `
 <nav class="navbar navbar-expand-lg bg-body-tertiary p-3 " data-bs-theme="dark">
            <a class="navbar-brand" href="index.html"><i class="fa-brands fa-amazon fs-2 "></i><b>mazon</b>.in</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item nav-underline">
                        <a class="nav-link" aria-current="page" href="index.html">Home</a>
                    </li>
                    <li class="nav-item nav-underline ">
                        <a class="nav-link" href="about.html">About</a>
                    </li>
                    <li class="nav-item nav-underline">
                        <a class="nav-link" href="contact.html">Contact</a>
                    </li>
                    <li class="nav-item nav-underline  dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Dropdown
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                    </li>
                </ul>
                <div class="container">
                    <form class="d-flex" role="search">
                        <input class="form-control me-2 text-bg-light" type="search" placeholder="Search" aria-label="Search">&nbsp&nbsp
                        <button class="btn btn-warning  px-5  " type="submit">Search</button>&nbsp&nbsp&nbsp&nbsp
                        <div class="">
                        <span class="text-white+">1</span>
                            <a href="cart.html" class="nav-link border border-light text-bg-light   border-1 px-3 py-3 rounded-3 btn   "><i
                                    class="fa-solid fa-cart-plus"></i></a>
                        </div>
                    </form>
                </div>
            </div>
        </nav>
 `
document.getElementById('header').innerHTML = header;
var products = [

  { img: "asset/images/1.avif", name: "Formal-Shirt", dise: " Lorem ipsum dolor sit dignissimos?", price: "$234", offer: "$200", Limited: "Limited Time Offer" ,btn:"Add to Cart" },
  { img: "asset/images/2.avif", name: "Blazer-Gray", dise: " Lorem ipsum dolor sit dignissimos?", price: "$290", offer: "$250", Limited: "Limited Time Offer" ,btn:"Add to Cart" },
  { img: "asset/images/3.jpg", name: "Formal", dise: " Lorem ipsum dolor sit dignissimos?", price: "$304", offer: "$260", Limited: "Limited Time Offer" ,btn:"Add to Cart" },
  { img: "asset/images/4.avif", name: "Texito-Blazer", dise: " Lorem ipsum dolor sit dignissimos?", price: "$400", offer: "$290", Limited: "Limited Time Offer" ,btn:"Add to Cart" },
  { img: "asset/images/5.avif", name: "Casual-Blazer", dise: " Lorem ipsum dolor sit dignissimos?", price: "$240", offer: "$150", Limited: "Limited Time Offer" ,btn:"Add to Cart" },
  { img: "asset/images/6.avif", name: "Checks-Blazer", dise: " Lorem ipsum dolor sit dignissimos?", price: "$240", offer: "$150", Limited: "Limited Time Offer" ,btn:"Add to Cart" },
  { img: "asset/images/1.avif", name: "Formal-Shirt", dise: " Lorem ipsum dolor sit dignissimos?", price: "$234", offer: "$200", Limited: "Limited Time Offer" ,btn:"Add to Cart" },
  { img: "asset/images/2.avif", name: "Blazer-Gray", dise: " Lorem ipsum dolor sit dignissimos?", price: "$290", offer: "$250", Limited: "Limited Time Offer" ,btn:"Add to Cart" },
  { img: "asset/images/3.jpg", name: "Formal", dise: " Lorem ipsum dolor sit dignissimos?", price: "$304", offer: "$260", Limited: "Limited Time Offer" ,btn:"Add to Cart" },
  { img: "asset/images/4.avif", name: "Texito-Blazer", dise: " Lorem ipsum dolor sit dignissimos?", price: "$400", offer: "$290", Limited: "Limited Time Offer" ,btn:"Add to Cart" },
  { img: "asset/images/5.avif", name: "Casual-Blazer", dise: " Lorem ipsum dolor sit dignissimos?", price: "$240", offer: "$150", Limited: "Limited Time Offer" ,btn:"Add to Cart" },
  { img: "asset/images/6.avif", name: "Checks-Blazer", dise: " Lorem ipsum dolor sit dignissimos?", price: "$240", offer: "$150", Limited: "Limited Time Offer" ,btn:"Add to Cart" }
]

var productHtml = "";
products.forEach((products) => {
  productHtml += ` <div class=" col-md-2 text-center ">
                <div class="card">
                <div class="cards">
                    <div class="overflow-hidden">
                        <img src="${products.img}" class="pr object-fit-cover" height="300px"alt="">
                    </div>
                    <h3>${products.name} </h3>
                    <p class="text-secondary fs-5">${products.dise}</p>
                    <h4 class="text-success   ">${products.price}</h4>
                    <button class="btn btn-danger">${products.btn}</button>
                     <span class="text-danger fs-4 fw-bold  ">${products.offer}}</span><span class="offer text-bg-danger ">${products.Limited}</span>
                </div>
            </div>
            
        </div>`
});
document.getElementById('cadr-list').innerHTML = productHtml;

