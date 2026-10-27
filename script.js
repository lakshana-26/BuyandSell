
const defaultProducts = [
    {
    id: 1,
    name: "iPhone 13",
    category: "Electronics",
    price: 25000,
    location: "Erode",
    description: "Apple iPhone 13 in good condition.",
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=800&q=80",
    seller: "Arun",
    sold: false
},



    {
        id: 2,
        name: "Wireless Headphones",
        category: "Electronics",
        price: 1800,
        location: "Erode",
        description: "Comfortable wireless headphones with good battery life.",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
        seller: "Priya",
        sold: false
    },

    {
        id: 3,
        name: "Wooden Study Table",
        category: "Furniture",
        price: 4500,
        location: "Tiruppur",
        description: "Strong wooden study table. Perfect for students.",
        image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80",
        seller: "Karthik",
        sold: false
    },
    {
    id: 4,
    name: "Wooden Chair",
    category: "Furniture",
    price: 1200,
    location: "Erode",
    description: "Comfortable wooden chair suitable for home and study use.",
    image: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=800&q=80",
    seller: "Priya",
    sold: false
},
    

    
    {
        id: 5,
        name: "Clean Code Book",
        category: "Books",
        price: 600,
        location: "Salem",
        description: "Useful programming book for beginners and developers.",
        image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=800&q=80",
        seller: "Rahul",
        sold: false
    },

    {
        id: 6,
        name: "Java Programming Book",
        category: "Books",
        price: 450,
        location: "Erode",
        description: "Beginner-friendly Java programming textbook.",
        image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=800&q=80",
        seller: "Divya",
        sold: false
    },

    {
        id: 7,
        name: "Honda Activa",
        category: "Vehicles",
        price: 55000,
        location: "Coimbatore",
        description: "Well-maintained scooter with good mileage.",
        image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=800&q=80",
        seller: "Vijay",
        sold: false
    },

    {
        id: 8,
        name: "Mountain Bicycle",
        category: "Vehicles",
        price: 8500,
        location: "Tiruppur",
        description: "Good condition mountain bicycle for daily use.",
        image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=800&q=80",
        seller: "Sanjay",
        sold: false
    },

    {
        id: 9,
        name: "College Backpack",
        category: "Others",
        price: 700,
        location: "Erode",
        description: "Spacious backpack suitable for college students.",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
        seller: "Nithya",
        sold: false
    },

    {
        id: 10,
        name: "Study Lamp",
        category: "Others",
        price: 900,
        location: "Coimbatore",
        description: "LED study lamp with adjustable brightness.",
        image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80",
        seller: "Aakash",
        sold: false
    }
];


let products =
    JSON.parse(localStorage.getItem("products"));

if (!products || products.length === 0) {
    products = defaultProducts;
} else {
    products = products.map(function(product) {
        const defaultProduct = defaultProducts.find(function(item) {
            return item.id === product.id;
        });

        if (defaultProduct) {
            product.image = defaultProduct.image;
        }

        return product;
    });
}

localStorage.setItem("products", JSON.stringify(products));

let messages =
    JSON.parse(localStorage.getItem("messages")) || [];



const homePage =
    document.getElementById("homePage");

const sellPage =
    document.getElementById("sellPage");

const detailsPage =
    document.getElementById("detailsPage");

const messagePage =
    document.getElementById("messagePage");

const purchasePage =
    document.getElementById("purchasePage");

const productList =
    document.getElementById("productList");

const productDetails =
    document.getElementById("productDetails");

const messageList =
    document.getElementById("messageList");


/* ================= START ================= */

displayProducts();


/* ================= SHOW HOME ================= */

function showHome() {

    homePage.classList.remove("hidden");

    sellPage.classList.add("hidden");

    detailsPage.classList.add("hidden");

    messagePage.classList.add("hidden");

    purchasePage.classList.add("hidden");

    displayProducts();
}


/* ================= SHOW SELL ================= */

function showSell() {

    homePage.classList.add("hidden");

    sellPage.classList.remove("hidden");

    detailsPage.classList.add("hidden");

    messagePage.classList.add("hidden");

    purchasePage.classList.add("hidden");
}


/* ================= SHOW MESSAGES ================= */

function showMessages() {

    homePage.classList.add("hidden");

    sellPage.classList.add("hidden");

    detailsPage.classList.add("hidden");

    messagePage.classList.remove("hidden");

    purchasePage.classList.add("hidden");

    displayMessages();
}


/* ================= ADD PRODUCT ================= */

function addProduct() {

    const name =
        document.getElementById("productName").value.trim();

    const category =
        document.getElementById("productCategory").value;

    const price =
        document.getElementById("productPrice").value;

    const location =
        document.getElementById("productLocation").value.trim();

    const description =
        document.getElementById("productDescription").value.trim();

    const image =
        document.getElementById("productImage");

    const seller =
        document.getElementById("sellerName").value.trim();


    /* CHECK EMPTY FIELDS */

    if (
        name === "" ||
        category === "" ||
        price === "" ||
        location === "" ||
        description === "" ||
        seller === "" ||
        image.files.length === 0
    ) {

        alert("Please fill all fields");

        return;
    }


    /* READ IMAGE */

    const reader = new FileReader();


    reader.onload = function(event) {

        const newProduct = {

            id: Date.now(),

            name: name,

            category: category,

            price: Number(price),

            location: location,

            description: description,

            image: event.target.result,

            seller: seller,

            sold: false

        };


        products.unshift(newProduct);


        localStorage.setItem(
            "products",
            JSON.stringify(products)
        );


        alert("Product posted successfully!");


        /* CLEAR FORM */

        document.getElementById("productName").value = "";

        document.getElementById("productCategory").value = "";

        document.getElementById("productPrice").value = "";

        document.getElementById("productLocation").value = "";

        document.getElementById("productDescription").value = "";

        document.getElementById("productImage").value = "";

        document.getElementById("sellerName").value = "";


        showHome();

    };


    reader.readAsDataURL(image.files[0]);
}


/* ================= DISPLAY PRODUCTS ================= */

function displayProducts(list = products) {

    productList.innerHTML = "";


    if (list.length === 0) {

        productList.innerHTML =
            "<p>No products found.</p>";

        return;
    }


    list.forEach(function(product) {

        let card = "";


        card +=
            '<div class="product-card">';


        card +=
            '<img src="' +
            product.image +
            '" alt="Product">';


        card +=
            '<div class="product-info">';


        card +=
            "<h3>" +
            product.name +
            "</h3>";


        card +=
            '<p class="price">₹' +
            product.price +
            "</p>";


        card +=
            '<p class="location">📍 ' +
            product.location +
            "</p>";


        card +=
            '<p class="description">' +
            product.description +
            "</p>";


        if (product.sold) {

            card +=
                '<p class="sold">SOLD</p>';

        } else {

            card +=
                '<button class="view-btn" ' +
                'onclick="viewProduct(' +
                product.id +
                ')">' +
                "View Details" +
                "</button>";

        }


        card +=
            "</div>";


        card +=
            "</div>";


        productList.innerHTML += card;

    });
}


/* ================= VIEW PRODUCT ================= */

function viewProduct(productId) {

    const product =
        products.find(function(product) {

            return product.id === productId;

        });


    if (!product) {

        alert("Product not found");

        return;
    }


    homePage.classList.add("hidden");

    sellPage.classList.add("hidden");

    detailsPage.classList.remove("hidden");

    messagePage.classList.add("hidden");

    purchasePage.classList.add("hidden");


    let details = "";


    details +=
        '<div class="details-box">';


    details +=
        '<img src="' +
        product.image +
        '" alt="Product">';


    details +=
        '<div class="details-content">';


    details +=
        "<h2>" +
        product.name +
        "</h2>";


    details +=
        '<p class="details-price">₹' +
        product.price +
        "</p>";


    details +=
        "<p><strong>Category:</strong> " +
        product.category +
        "</p>";


    details +=
        "<p><strong>Location:</strong> " +
        product.location +
        "</p>";


    details +=
        "<p><strong>Description:</strong><br>" +
        product.description +
        "</p>";


    details +=
        '<div class="seller-box">';


    details +=
        "<strong>Seller:</strong> " +
        product.seller;


    details +=
        "</div>";


    if (product.sold) {

        details +=
            '<p class="sold">This product is SOLD</p>';

    } else {

        details +=
            '<div class="detail-buttons">';


        details +=
            '<button class="contact-btn" ' +
            'onclick="contactSeller(' +
            product.id +
            ')">' +
            "Contact Seller" +
            "</button>";


        details +=
            '<button class="buy-btn" ' +
            'onclick="buyProduct(' +
            product.id +
            ')">' +
            "Buy Now" +
            "</button>";


        details +=
            "</div>";
    }


    details +=
        "</div>";


    details +=
        "</div>";


    productDetails.innerHTML = details;
}


/* ================= CONTACT SELLER ================= */

function contactSeller(productId) {

    const product =
        products.find(function(product) {

            return product.id === productId;

        });


    if (!product) {
        return;
    }


    let message = prompt(
        "Enter your message to " +
        product.seller
    );


    if (message === null) {
        return;
    }


    message = message.trim();


    if (message === "") {

        alert("Please enter a message");

        return;
    }


    const newMessage = {

        id: Date.now(),

        seller: product.seller,

        buyer: "Buyer",

        product: product.name,

        amount: product.price,

        text: message

    };


    messages.push(newMessage);


    localStorage.setItem(
        "messages",
        JSON.stringify(messages)
    );


    alert("Message sent to seller successfully!");

}


/* ================= SHOW MESSAGES ================= */

function displayMessages() {

    messageList.innerHTML = "";


    if (messages.length === 0) {

        messageList.innerHTML =
            "<p>No messages yet.</p>";

        return;
    }


    messages.forEach(function(message) {

        let messageHTML = "";


        messageHTML +=
            '<div class="message">';


        messageHTML +=
            "<strong>" +
            message.buyer +
            "</strong>";


        messageHTML +=
            "<p>Product: " +
            message.product +
            "</p>";


        messageHTML +=
            "<p>Amount: ₹" +
            message.amount +
            "</p>";


        messageHTML +=
            "<p>Message: " +
            message.text +
            "</p>";


        messageHTML +=
            "</div>";


        messageList.innerHTML += messageHTML;

    });
}


/* ================= BUY PRODUCT ================= */

function buyProduct(productId) {

    const product =
        products.find(function(product) {

            return product.id === productId;

        });


    if (!product) {
        return;
    }


    if (product.sold) {

        alert("This product is already sold");

        return;
    }


    const confirmBuy =
        confirm(
            "Buy " +
            product.name +
            " for ₹" +
            product.price +
            "?"
        );


    if (!confirmBuy) {
        return;
    }


    /* MAKE PRODUCT SOLD */

    product.sold = true;


    localStorage.setItem(
        "products",
        JSON.stringify(products)
    );


    /* CREATE SELLER MESSAGE */

    const newMessage = {

        id: Date.now(),

        seller: product.seller,

        buyer: "Buyer",

        product: product.name,

        amount: product.price,

        text:
            "New purchase received. " +
            "Product bought for ₹" +
            product.price

    };


    messages.push(newMessage);


    localStorage.setItem(
        "messages",
        JSON.stringify(messages)
    );


    alert(
        "Purchase successful!\n" +
        "Amount: ₹" +
        product.price
    );


    showHome();
}


/* ================= SEARCH ================= */

function searchProducts() {

    const search =
        document
        .getElementById("searchInput")
        .value
        .toLowerCase()
        .trim();


    const result =
        products.filter(function(product) {

            return (
                product.name
                    .toLowerCase()
                    .includes(search) ||

                product.category
                    .toLowerCase()
                    .includes(search) ||

                product.location
                    .toLowerCase()
                    .includes(search)
            );

        });


    displayProducts(result);
}


/* ================= FILTER ================= */

function filterProducts(category) {

    if (category === "All") {

        displayProducts(products);

        return;
    }


    const result =
        products.filter(function(product) {

            return product.category === category;

        });


    displayProducts(result);
}