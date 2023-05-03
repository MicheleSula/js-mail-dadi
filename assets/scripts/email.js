// E-mail check

// Array with e-mails
const mailUtente = ["simone@gmail.com", "agnese@gmail.com", "franco@gmail.com"];

// Button selector
const emailButton = document.getElementById("email-button");

// Onclick function
emailButton.addEventListener("click",
    function () {
        
        // Get value from input
        let emailInput = document.querySelector("input").value;

        // Variable to check input
        let emailInputChecker = 0;
        
        // For cicle
        for (let i = 0; i < mailUtente.length; i++) {
            if (emailInput === mailUtente[i]) {
              emailInputChecker = 1;
            }
        }

        // If input === 1 correct output message else wrong output message
        if (emailInputChecker === 1) {
            document.querySelector("h3").classList.add('green-text');
            document.querySelector("h3").innerHTML = "Email corretta";
        } else {
            document.querySelector("h3").classList.add('red-text');
            document.querySelector("h3").innerHTML = "Email sbagliata";
        }
        
        // Time-out for correct and wrong output message
        setTimeout(() => {
            document.querySelector("h3").innerHTML = "";
            document.querySelector("h3").classList.remove('red-text');
            document.querySelector("h3").classList.remove('green-text');
        }, 1000);
    }
);