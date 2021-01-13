function validateForm() {
    var firstName = document.forms["myForm"]["firstname"].value;
    var lastName = document.forms["myForm"]["lastname"].value;
    var email = document.forms["myForm"]["email"].value;
    var message = document.forms["myForm"]["subject"].value;

    var totalMessage = "";

    if (firstName == "") {
      totalMessage = "First name must be filled out. ";
    }
    if (lastName == ""){
        totalMessage += "Last name must be filled out. ";
    }
    if (email == "") {
        totalMessage += "Email must be entered. ";
    }
    if (message == ""){
        totalMessage += "A message must be entered. ";
    }

    if(totalMessage != ""){
        alert(totalMessage);
        return false;
    }
  }