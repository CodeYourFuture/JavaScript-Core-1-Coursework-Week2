function enough(cap, on, wait) {
  let empty = cap - on;
  if (empty >= wait) {
    return 0
  } else return empty
}



console.log(enough(50, 25, 35));