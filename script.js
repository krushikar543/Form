function username_check(){
    var first = document.getElementById("first");
    var error = document.getElementById("error_name");
    if(first.value.length < 5){
        error.innerHTML = "UseName must have atleast 5 characters. <br>";
        first.classList.add('clicked');
    }
    else{
        first.classList.remove('clicked');
        error.innerHTML = "";
    }
}

function country_field(){
    var country = document.getElementById("country");
    var error = document.getElementById("error_country");
    if(country.value.length === 0){
        error.innerHTML = "Country field should not be left empty.<br>";
        country.classList.add('clicked');
    }
    else{
        country.classList.remove('clicked');
        error.innerHTML = "";
        
    }
    
}

function phno_cond(){
    var phno = document.getElementById("phno");
    var error = document.getElementById("error_phno");
    if(phno.value.length !== 10){
        error.innerHTML = "Phone Number must contain 10 digits.<br>";
        phno.classList.add('clicked');
    }
    else{
        phno.classList.remove('clicked');
        error.innerHTML = "";
    }
}

function email_check(){
    var email = document.getElementById("exampleFormControlInput1");
    var error = document.getElementById("error_email");
    if(!email.value.includes("@")){
        error.innerHTML = "Email Id should contain '@'. Please enter a valid Email Id.<br>";
        email.classList.add("clicked");
    }
    else{
        email.classList.remove("clicked");
        error.innerHTML = "";
    }

}

function pass_strength_check(){
    var password = document.getElementById("pass");
    var error = document.getElementById("error_pass");
    var errors = document.getElementById("feedback");

    var strength = 0;
    var regex = new Array();
    regex.push("[A-Z]");
    regex.push("[a-z]");
    regex.push("[0-9]");
    regex.push("[$@$!%*#?&]");
  
    for (var i = 0; i < regex.length; i++) {
      if (new RegExp(regex[i]).test(password.value)) {
        strength++;
      }
    }
    switch (strength) {
      case 0:
        error.classList.add('pass_weak');
        error.classList.remove('pass_strong');
        error.innerHTML = "Your Password is Very Weak";
        break;
      case 1:
        error.classList.add('pass_weak');
        error.classList.remove('pass_strong');
        error.innerHTML = "Your Password is Weak";
        break;
      case 2:
        error.classList.add('pass_weak');
        error.classList.remove('pass_strong');
        error.innerHTML = "Your Password is Moderate";
        break;
      case 3:
        error.classList.add('pass_strong');
        error.classList.remove('pass_weak');
        error.innerHTML = "Your Password is Strong";
        break;
      case 4:
        error.classList.add('pass_strong');
        error.classList.remove('pass_weak');
        error.innerHTML = "Your Password is Very Strong";
        break;
    }
    


    if(password.value.length < 8){
        errors.innerHTML = "Password should contain atleast 8 characters.<br>";
        password.classList.add('clicked');
    }

    else if(strength < 3){
        errors.innerHTML = "Your Password is weak. Please change your password.<br>";
        password.classList.add('clicked');
    }
    else{
        password.classList.remove('clicked');
        errors.innerHTML = "";
    }
}

function submit(){
    var first = document.getElementById("first");
    var gender = document.getElementById("gender");
    var country = document.getElementById("country");
    var phno = document.getElementById("phno");
    var email = document.getElementById("exampleFormControlInput1");
    var password = document.getElementById("pass");
    var pass_str = document.getElementById("password_feedback");
    var confirm_password = document.getElementById("con_pass");
    var error = document.getElementById("errors");
    error.innerHTML = "";
    error.classList.remove('errordiv');
    error.classList.remove('correctdiv');

    // error fields
    var error_name = document.getElementById("error_name");
    var error_country = document.getElementById("error_country");
    var error_phno = document.getElementById("error_phno");
    var error_email = document.getElementById("error_email");
    var error_pass = document.getElementById("feedback");
    var pass_str = document.getElementById("error_pass");

    var error_val = 0;
    if(error_name.innerHTML === "" && error_country.innerHTML === "" &&  error_phno.innerHTML === "" &&  error_email.innerHTML === "" &&  error_pass.innerHTML === ""){
        error_val += 1;
    }
    else{
        error.innerHTML += "Fill the Details correctly<br>";
        error.classList.add('errordiv');
    }


    if(confirm_password.value !== password.value){
        error.innerHTML += "Confirm Password must match with Password.<br>";
        confirm_password.classList.add('clicked');
        error.classList.add('errordiv');
    }
    else{
        error_val += 1;
    }
    if(error_val === 2){
        confirm_password.classList.remove('clicked');
        first.value = "";
        country.value = "";
        phno.value = "";
        email.value = "";
        password.value = "";
        confirm_password.value = "";
        pass_str.innerHTML = "";
        error.innerHTML = "Submitted !!!<br>Reload Page to make another submission.";
        error.classList.add('correctdiv');
        
    }

}