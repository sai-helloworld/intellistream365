// Define the function to fetch and read the JSON file
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

    // Get the container element to display products
    const productsContainer = document.getElementById("products");

    // Iterate over each product in the JSON data
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        const product = data[key];

        // Create a product element
        const productElement = document.createElement("div");
        productElement.className = "product";

        // Add product details to the product element
        productElement.innerHTML = `
          <img src="${product.image_link}" alt="${product.name}">
          <h2>${product.name}</h2>
          <p>Rating: ${product.rating}</p>
          <p>Price: ₹${product.price}</p>
          <p>MRP: ₹${product.mrp}</p>
          <p>Discount: ${product.discount}</p>
          <p>Delivery: ${product.delivery}</p>
        `;

        // Append the product element to the container
        productsContainer.appendChild(productElement);
      }
    }
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
}

// Call the function to fetch and read the JSON file
fetchJSON();
