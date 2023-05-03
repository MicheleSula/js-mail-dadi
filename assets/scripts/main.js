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
            document.querySelector("h3").classList.add('green-text');
            document.querySelector("h3").innerHTML = "Email corretta";
        } else {
            document.querySelector("h3").classList.add('red-text');
            document.querySelector("h3").innerHTML = "Email sbagliata";
        }
        
        setTimeout(() => {
            document.querySelector("h3").innerHTML = "";
            document.querySelector("h3").classList.remove('red-text');
            document.querySelector("h3").classList.remove('green-text');
        }, 1000);
    }
);


