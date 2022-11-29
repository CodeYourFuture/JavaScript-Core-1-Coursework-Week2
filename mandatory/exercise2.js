function checkUserName(userName, userType) {
    if (userType === "admin" || "manager") {
      return "Username valid"
    }
    if (userName[0] === userName[0].toUpperCase() && userName.length > 5 && userName < 10) {
      return "Username valid";
    } else {
        return "Username invalid";
      }
    }
  

  console.log(checkUserName(1, "guest"));
