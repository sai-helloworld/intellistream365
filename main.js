// var data = {
//   1: {
//     image_link: "/images/product-1.jpg",
//     name: "ZEBRONICS OPTIMUS Gaming Keyboard & Mouse Combo, Braided Cable USB, Upto 3600 DPI, 6 Buttons, High Resolution Sensor, Multicolor LED, Dedicated Macro Keys, 117 Keys (Black)",
//     rating: "4.5",
//     price: "849",
//     mrp: "1200",
//     discount: "(30%)",
//     delivery: "FREE delivery",
//   },
//   2: {
//     image_link: "/images/product-1.jpg",
//     name: "ZEBRONICS OPTIMUS Gaming Keyboard & Mouse Combo, Braided Cable USB, Upto 3600 DPI, 6 Buttons, High Resolution Sensor, Multicolor LED, Dedicated Macro Keys, 117 Keys (Black)",
//     rating: "4.0",
//     price: "399",
//     mrp: "1200",
//     discount: "(30%)",
//     delivery: "FREE delivery",
//   },
// };

// for (let key in data) {
//   if (data.hasOwnProperty(key)) {
//     console.log(data[key]);
//   }
// }
// function createProductElement(product) {
//   const productDiv = document.createElement("div");
//   productDiv.className = "product";

//   const img = document.createElement("img");
//   img.className = "image";
//   img.src = product.image_link;
//   img.alt = "image";

//   const productDescDiv = document.createElement("div");
//   productDescDiv.className = "product-desc";

//   const productNameDiv = document.createElement("div");
//   productNameDiv.className = "product-name";
//   productNameDiv.textContent = product.name;

//   const productRatingDiv = document.createElement("div");
//   productRatingDiv.className = "product-rating";
//   productRatingDiv.textContent = `${product.rating}/5`;

//   const productPricingDiv = document.createElement("div");
//   productPricingDiv.className = "product-pricing";
//   productPricingDiv.innerHTML = `<sup>₹</sup>${product.price}`;

//   const productDeliveryDiv = document.createElement("div");
//   productDeliveryDiv.className = "product-delivery";
//   productDeliveryDiv.textContent = product.delivery;

//   const productOptionsDiv = document.createElement("div");
//   productOptionsDiv.className = "product-options";
//   productOptionsDiv.align = "center";
//   productOptionsDiv.textContent = "See Details";

//   const productMrpDiv = document.createElement("div");
//   productMrpDiv.innerHTML = `M.R.P: ₹<s>${product.mrp}</s>`;

//   const productDiscount = document.createElement("div");
//   productDiscount.textContent = product.discount;

//   productDescDiv.appendChild(productNameDiv);
//   productDescDiv.appendChild(productRatingDiv);
//   productDescDiv.appendChild(productPricingDiv);

//   productPricingDiv.appendChild(productMrpDiv);
//   productPricingDiv.appendChild(productDiscount);

//   productDescDiv.appendChild(productDeliveryDiv);
//   productDescDiv.appendChild(productOptionsDiv);
//   productDiv.appendChild(img);
//   productDiv.appendChild(productDescDiv);

//   return productDiv;
// }

// function populateProductList(data) {
//   const productList = document.getElementById("product-list");
//   Object.values(data).forEach((product) => {
//     const productElement = createProductElement(product);
//     productList.appendChild(productElement);
//   });
// }

// // Populate the product list on page load
// document.addEventListener("DOMContentLoaded", () => {
//   populateProductList(data);
// });

// Function to fetch the JSON data
async function fetchJSON() {
  try {
    // Fetch the JSON file
    const response = await fetch("exp.json");

    // Check if the response is okay
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    // Parse the JSON data
    const data = await response.json();

    // Populate the product list with the fetched data
    populateProductList(data);
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
}

// Function to create a product element
function createProductElement(product) {
  const productDiv = document.createElement("div");
  productDiv.className = "product";

  const img = document.createElement("img");
  img.className = "image";
  img.src = product.image_link;
  img.alt = "image";

  const productDescDiv = document.createElement("div");
  productDescDiv.className = "product-desc";

  const productNameDiv = document.createElement("div");
  productNameDiv.className = "product-name";
  productNameDiv.textContent = product.name;

  const productRatingDiv = document.createElement("div");
  productRatingDiv.className = "product-rating";
  productRatingDiv.textContent = `${product.rating}/5`;

  const productPricingDiv = document.createElement("div");
  productPricingDiv.className = "product-pricing";
  productPricingDiv.innerHTML = `<sup>₹</sup>${product.price}`;

  const productDeliveryDiv = document.createElement("div");
  productDeliveryDiv.className = "product-delivery";
  productDeliveryDiv.textContent = product.delivery;

  const productOptionsDiv = document.createElement("div");
  productOptionsDiv.className = "product-options";
  productOptionsDiv.align = "center";
  productOptionsDiv.textContent = "See Details";

  const productMrpDiv = document.createElement("div");
  productMrpDiv.innerHTML = `M.R.P: ₹<s>${product.mrp}</s>`;

  const productDiscountDiv = document.createElement("div");
  productDiscountDiv.textContent = product.discount;

  productDescDiv.appendChild(productNameDiv);
  productDescDiv.appendChild(productRatingDiv);
  productDescDiv.appendChild(productPricingDiv);

  productPricingDiv.appendChild(productMrpDiv);
  productPricingDiv.appendChild(productDiscountDiv);

  productDescDiv.appendChild(productDeliveryDiv);
  productDescDiv.appendChild(productOptionsDiv);
  productDiv.appendChild(img);
  productDiv.appendChild(productDescDiv);

  return productDiv;
}

// Function to populate the product list
function populateProductList(data) {
  const productList = document.getElementById("product-list");
  Object.values(data).forEach((product) => {
    const productElement = createProductElement(product);
    productList.appendChild(productElement);
  });
}

// Populate the product list on page load
document.addEventListener("DOMContentLoaded", () => {
  fetchJSON();
});
