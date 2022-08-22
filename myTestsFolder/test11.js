function getVillainName(birthday){
  const m = ["Evil","Vile","Cruel","Trashy","Despicable","Embarrassing","Disreputable","Atrocious","Twirling","Orange","Terrifying","Awkward"];
  const d = ["Mustache","Pickle","Hood Ornament","Raisin","Recycling Bin","Potato","Tomato","House Cat","Teaspoon","Laundry Basket"];
  
  function getFirstName(){
      if (birthday.getMonth() === 0) {
        return m[0];
      } else if (birthday.getMonth() === 1) {
        return m[1];
      } else if (birthday.getMonth() === 2) {
        return m[2];
      } else if (birthday.getMonth() === 3) {
        return m[3];  
      } else if (birthday.getMonth() === 4) {
        return m[4];   
      } else if (birthday.getMonth() === 5) {
        return m[5];
      } else if (birthday.getMonth() === 6) {
        return m[6];
      } else if (birthday.getMonth() === 7) {
        return m[7];
      } else if (birthday.getMonth() === 8) {
        return m[8];
      } else if (birthday.getMonth() === 9) {
        return m[9];
      } else if (birthday.getMonth() === 10) {
        return m[10];
      } else if (birthday.getMonth() === 11) {
        return m[11];
      } else return "Try Again"
    }
    function getBirthdate() {
        if (birthday.getDate() % 10 === 0) {
            return d[0];
        } else if (birthday.getDate() % 10 === 1) {
            return d[1];
        } else if (birthday.getDate() % 10 === 2) {
            return d[2];
        } else if (birthday.getDate() % 10 === 3) {
            return d[3];
        } else if (birthday.getDate() % 10 === 4) {
            return d[4];
        } else if (birthday.getDate() % 10 === 5) {
            return d[5];
        } else if (birthday.getDate() % 10 === 6) {
            return d[6];
        } else if (birthday.getDate() % 10 === 7) {
            return d[7];
        } else if (birthday.getDate() % 10 === 8) {
            return d[8];
        } else if (birthday.getDate() % 10 === 9) {
            return d[9];
        } else return "No Luck"
    }


 return "The " + getFirstName() +  " " + getBirthdate();
 
}

console.log(getVillainName(new Date("April 21")));