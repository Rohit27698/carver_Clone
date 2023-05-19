const signupForm = document.querySelector("form");
      
      signupForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const firstnameInput = this.elements.firstname;
        const lastnameInput = this.elements.lastname;
        const emailInput = this.elements.email;
        const passwordInput = this.elements.password;



        
      
        let accounts = JSON.parse(localStorage.getItem("account-data")) || [];
      
        if (accounts.find((account) => account.email === emailInput.value)) {
           document.querySelector("#error").textContent=" * Email already registered!"
          return;
        }
      
        const newAccount = {
          firstname: firstnameInput.value,
          lastname: lastnameInput.value,
          email: emailInput.value,
          password: passwordInput.value,
        };
      
        accounts.push(newAccount);
      
        localStorage.setItem("account-data", JSON.stringify(accounts));
        alert=("Account created successfully!");
      
        firstnameInput.value = "";
        lastnameInput.value = "";
        emailInput.value = "";
        passwordInput.value = "";
        alert=("Account created successfully!");
        window.location.href = "login.html";
      });