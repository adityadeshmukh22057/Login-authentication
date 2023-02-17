function login() {
    // Get the values of the username and password input fields
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Check if the username and password are correct
    if (username === "myusername" && password === "mypassword") {
      // If they are correct, redirect the user to the home page
      window.location.href = "home.html";
    } else {
      // If they are incorrect, show an error message
      alert("Incorrect username or password");
    }
  }
  