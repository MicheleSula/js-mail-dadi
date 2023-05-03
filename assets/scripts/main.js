const mailUtente = ["simone@gmail.com", "agnese@gmail.com", "franco@gmail.com"];
const button = document.getElementById("button");

button.addEventListener("click",
    function emailCheck() {
        let emailInput = document.querySelector("input").value;
        let emailInputChecker = 0;
        console.log(emailInput);
        
        
        for (let i = 0; i < mailUtente.length; i++) {
            if (emailInput === mailUtente[i]) {
              emailInputChecker = 1;
            }
        }

        if (emailInputChecker === 1) {
            console.log("Element found");
        } else {
            console.log("Element not found");
        }
        
    }
);
