function getVillainName(birthday){
  const m = ["Evil","Vile","Cruel","Trashy","Despicable","Embarrassing","Disreputable","Atrocious","Twirling","Orange","Terrifying","Awkward"];
  const d = ["Mustache","Pickle","Hood Ornament","Raisin","Recycling Bin","Potato","Tomato","House Cat","Teaspoon","Laundry Basket"];
  
  function getFirstName(){
      if (birthday.includes("January")) {
        return m[0];
      } else if (birthday.includes("February")) {
        return m[1];
      } else if (birthday.includes("March")) {
        return m[2];
      } else if (birthday.includes("April")) {
        return m[3];  
      } else if (birthday.includes("May")) {
        return m[4];   
      } else if (birthday.includes("June")) {
        return m[5];
      } else if (birthday.includes("July")) {
        return m[6];
      } else if (birthday.includes("August")) {
        return m[7];
      } else if (birthday.includes("September")) {
        return m[8];
      } else if (birthday.includes("October")) {
        return m[9];
      } else if (birthday.includes("November")) {
        return m[10];
      } else if (birthday.includes("December")) {
        return m[11];
      } else return "Try Again"
    }
    function getBirthdate() {
        if (birthday.charAt(birthday.length -1) === "0") {
            return d[0];
        } else if (birthday.charAt(birthday.length -1) === "1") {
            return d[1];
        } else if (birthday.charAt(birthday.length -1) === "2") {
            return d[2];
        } else if (birthday.charAt(birthday.length -1) === "3") {
            return d[3];
        } else if (birthday.charAt(birthday.length -1) === "4") {
            return d[4];
        } else if (birthday.charAt(birthday.length -1) === "5") {
            return d[5];
        } else if (birthday.charAt(birthday.length -1) === "6") {
            return d[6];
        } else if (birthday.charAt(birthday.length -1) === "7") {
            return d[7];
        } else if (birthday.charAt(birthday.length -1) === "8") {
            return d[8];
        } else if (birthday.charAt(birthday.length -1) === "9") {
            return d[9];
        } else return "No Luck"
    }


 return "The " + getFirstName() +  " " + getBirthdate();
 
}

console.log(getVillainName("October 17"))