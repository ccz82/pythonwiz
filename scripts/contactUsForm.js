// Retrieve the form data from the URL query parameters
const params = new URLSearchParams(window.location.search);
const username = params.get("name");
const email = params.get("email");
const subject = params.get("subject");
const message = params.get("message");

// Display the form data on the response page
const formNameAndEmail = document.getElementById("formNameAndEmail");
formNameAndEmail.innerText = `Hi ${username}, with provided email address ${email}. We have received your contact form with these details below:`;

const formSubject = document.getElementById("formSubject");
formSubject.innerText = `Subject: ${subject}`;

const formMessage = document.getElementById("formMessage");
formMessage.innerText = message;
