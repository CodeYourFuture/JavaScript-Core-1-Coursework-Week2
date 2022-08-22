/**
 * Finding a radio station, and a good one, can be hard manually.
 * Let's use some code to help us build a program that helps us scan
 * the radio waves for some good music.
 */

/**
 * First, let's create a function that creates a list of all the frequencies.
 * Call this function `getAllFrequencies`.
 *
 * This function should:
 * - Create an array  starting at 87 and ending in 108
 * - Should return this array to use in other functions
 */

// `getAllFrequencies` goes here
function getAllFrequencies() {
  let frequencies = [];
  for (let i = 87; i <=108; i++) { // the solution has created two extra varialbles the start and finish frequences, I have simply used the border frequency integers inside the function, as I gather this is not really advisable as it makes my code less readable and might lead to confusion down the line
      frequencies.push(i);
  }
  return frequencies;
}

/**
 * Next, let's write a function that gives us only the frequencies that are radio stations.
 * Call this function `getStations`.
 *
 * This function should:
 * - Get the available frequencies from `getAllFrequencies`
 * - There is a helper function called isRadioStation that takes an integer as an argument and returns a boolean.
 * - Return only the frequencies that are radio stations.
 */
// `getStations` goes here
// function isRadioStation(num) {
//   if (getAllFrequencies().includes(num)) {
//        return true;  
//   }
//   return false;
// }

function getStations() {
    return getAllFrequencies().filter(isRadioStation); //The solution has used a function with a for loop to select the available frequences, I have found a solution with a .filter() method that works as well 
    // I have strugled and tried to create a for loop that iterates through the getAllFrequences(), then compares it with available stations and thats where I failed, just to find that there is a simple JS method to do all the work
}
/*
 * ======= TESTS - DO NOT MODIFY =======
 * Note: You are not expected to understand everything below this comment!
 */

function getAvailableStations() {
  // Using `stations` as a property as defining it as a global variable wouldn't
  // always make it initialized before the function is called
  if (!getAvailableStations.stations) {
    const stationCount = 4;
    getAvailableStations.stations = [];
    while (getAvailableStations.stations.length < stationCount) {
      let randomFrequency = Math.floor(Math.random() * (108 - 87 + 1) + 87);
      if (!getAvailableStations.stations.includes(randomFrequency)) {
        getAvailableStations.stations.push(randomFrequency);
      }
    }
    getAvailableStations.stations.sort(function (frequencyA, frequencyB) {
      return frequencyA - frequencyB;
    });
  }

  return getAvailableStations.stations;
}

function isRadioStation(frequency) {
  return getAvailableStations().includes(frequency);
}

test("getAllFrequencies() returns all frequencies between 87 and 108", () => {
  expect(getAllFrequencies()).toEqual([
    87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104,
    105, 106, 107, 108,
  ]);
});

test("getStations() returns all the available stations", () => {
  expect(getStations()).toEqual(getAvailableStations());
});
