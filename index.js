let USERS_DB = [];

function validate(isSubmit) {
	let firstName = document.getElementById('first-name').value
	let lastName = document.getElementById('last-name').value
	let email = document.getElementById('email').value
	let password = document.getElementById('password').value
	let confirmPassword = document.getElementById('confirm-password').value
    let agreeAns = document.getElementById('t-and-c').checked
    
	    let error = [];
		if(firstName.length >= 3) {
			document.getElementById('first-name-valid').style.display = 'block'
			document.getElementById('first-name-invalid').style.display = 'none'
            error.push(false)
		} else {
			document.getElementById('first-name-invalid').style.display = 'block'
			document.getElementById('first-name-valid').style.display = 'none'
		}
	
		if(lastName.length >= 3) {
			document.getElementById('last-name-valid').style.display = 'block'
			document.getElementById('last-name-invalid').style.display = 'none'
            error.push(false)
		} else {
			document.getElementById('last-name-invalid').style.display = 'block'
			document.getElementById('last-name-valid').style.display = 'none'
		}
	
		if (
			email.includes("@") && 
			email.includes(".") && 
			email.indexOf("@") > 0 &&
			email.substr(email.lastIndexOf('.') + 1).length >= 2
		) {
			document.getElementById("email-valid").style.display = "block";
			document.getElementById("email-invalid").style.display = "none";
            error.push(false)
		} else {
			document.getElementById("email-invalid").style.display = "block";
			document.getElementById("email-valid").style.display = "none";
		}

		if (password.includes("@") || password.includes("$") || password.includes("#") && 
            password.length >= 8 && password.length !== 0) {
			document.getElementById('password-valid').style.display = 'block'
			document.getElementById('password-invalid').style.display = 'none'
            error.push(false)
		} else {
			document.getElementById('password-invalid').style.display = 'block'
			document.getElementById('password-valid').style.display = 'none'
		}
      
        if(password !== confirmPassword) {
            document.getElementById('confirm-password-invalid').style.display = 'block'
            
        } else {
            document.getElementById('confirm-password-invalid').style.display = 'none'
            error.push(false)
        }
        if(agreeAns) {
            document.getElementById("invalid-msg").style.display = "none"
            error.push(false);
        } else {
            document.getElementById("invalid-msg").style.display = "block"
           
        }
        console.log("Submit is: "+ isSubmit)
        console.log("error is:"+ error.length && isSubmit)
        if(error.length == 6) {
        let userDetails = {
          firstName,
          lastName,
          email,
          password,
        }
            USERS_DB.push(userDetails)
            alert('Your details have been saved successfully!')
            document.getElementById('sign-up-form').reset()
            console.log(USERS_DB)
        }
    }