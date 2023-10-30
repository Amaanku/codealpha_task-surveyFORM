emailjs.init("YOUR_USER_ID");
document.addEventListener("DOMContentLoaded", function () {
    const surveyForm = document.getElementById("pollution-survey-form");
    const submitButton = document.getElementById("submit-button");

    surveyForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const city = document.getElementById("city").value;
        const firstName = document.getElementById("first-name").value;
        const lastName = document.getElementById("last-name").value;
        const age = document.getElementById("age").value;
        const email = document.getElementById("email").value;
        const pollutionLevel = document.getElementById("pollution-level").value;
        const comments = document.getElementById("comments").value;

       
        const emailData = {
            to_email: "recipient@example.com", 
            from_name: `${firstName} ${lastName}`,
            city: city,
            age: age,
            email: email,
            pollution_level: pollutionLevel,
            comments: comments,
        };

        emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", emailData)
            .then(function(response) {
                console.log("Email sent:", response);
                alert("Survey submitted successfully!");
                surveyForm.reset();
            }, function(error) {
                console.error("Email not sent:", error);
                alert("Failed to submit the survey. Please try again later.");
            });
    });
});