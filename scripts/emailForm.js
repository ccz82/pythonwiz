// Retrieve the form data from the URL query parameters
const params = new URLSearchParams(window.location.search);
const email = params.get("email");

// Display the form data on the response page
const emailElement = document.getElementById("email");
emailElement.innerText = `Your email is ${email}!`;
