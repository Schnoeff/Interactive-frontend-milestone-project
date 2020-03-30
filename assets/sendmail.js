function sendMail(contactForm) {
    emailjs.send("gmail", "SeasideRetreats", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "enquiry": contactForm.enquiry.value
    })
    .then(
        function(response) {
            console.log("Success", response);
        },
        function(error) {
            console.log("Error", error);
        }
    );
    return false;  
}
