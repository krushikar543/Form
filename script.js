
function submit(){
    var first = document.getElementById("first");
    // var last = document.getElementById("last");
    var gender = document.getElementById("gender");
    var country = document.getElementById("country");
    var phno = document.getElementById("phno");
    var email = document.getElementById("exampleFormControlInput1");
    var password = document.getElementById("pass");
    var pass_str = document.getElementById("password_feedback");
    var confirm_password = document.getElementById("con_pass");
    var error = document.getElementById("errors");
    var check = 0;
    error.innerHTML = "";
    error.classList.remove('errordiv');
    error.classList.remove('correctdiv');
 
    // console.log(error);
    if(first.value.length < 5){
        error.innerHTML += "UseName must have atleast 5 characters. <br>";
        first.classList.add('clicked');
    }
    else{
        first.classList.remove('clicked');
        check+=1;
    }


    if(country.value.length === 0){
        error.innerHTML += "Country field should not be left empty.<br>";
        country.classList.add('clicked');
    }
    else{
        country.classList.remove('clicked');
        check += 1;
    }

    if(phno.value.length !== 10){
        // alert("Phone Number must have 10 digits");
        error.innerHTML += "Phone Number must contain 10 digits.<br>";
        phno.classList.add('clicked');
    }
    else{
        phno.classList.remove('clicked');
        check+=1;
    }


    if(!email.value.includes("@")){
        // alert("Email Id should contain '@'. Please enter a valid Email Id.");
        error.innerHTML += "Email Id should contain '@'. Please enter a valid Email Id.<br>";
        email.classList.add("clicked");
    }
    else{
        email.classList.remove("clicked");
        check+=1;
    }

    


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
        pass_str.classList.add('pass_weak');
        pass_str.classList.remove('pass_strong');
        pass_str.innerHTML = "Your Password is Very Weak";
        break;
      case 1:
        pass_str.classList.add('pass_weak');
        pass_str.classList.remove('pass_strong');
        pass_str.innerHTML = "Your Password is Weak";
        break;
      case 2:
        pass_str.classList.add('pass_weak');
        pass_str.classList.remove('pass_strong');
        pass_str.innerHTML = "Your Password is Moderate";
        break;
      case 3:
        pass_str.classList.add('pass_strong');
        pass_str.classList.remove('pass_weak');
        pass_str.innerHTML = "Your Password is Strong";
        break;
      case 4:
        pass_str.classList.add('pass_strong');
        pass_str.classList.remove('pass_weak');
        pass_str.innerHTML = "Your Password is Very Strong";
        break;
    }
    


    if(password.value.length < 8){
        error.innerHTML += "Password should contain atleast 8 characters.<br>";
        password.classList.add('clicked');
    }

    else if(strength < 3){
        // alert("Avoid using easily predictable passwords.Plase change your password");
        error.innerHTML += "Your Password is weak. Please change your password.<br>";
        password.classList.add('clicked');
    }
    else{
        password.classList.remove('clicked');
        check+=1;
    }

    if(confirm_password.value !== password.value){
        // alert("Password must match with confirm password");
        error.innerHTML += "Confirm Password must match with Password.<br>";
        confirm_password.classList.add('clicked');
    }
    else{
        confirm_password.classList.remove('clicked');
        check+=1;
    }







    if(check === 6){
        first.value = "";
        country.value = "";
        phno.value = "";
        email.value = "";
        password.value = "";
        confirm_password.value = "";
        error.innerHTML = "Submitted !!!<br>Reload Page to make another submission.";
        error.classList.add('correctdiv');
    }
    else{
        error.classList.add('errordiv');
    }
}