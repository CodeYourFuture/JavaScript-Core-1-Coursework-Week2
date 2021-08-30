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
  let frequency = 87;
  let freqArry = [];
  do {
    freqArry.push(frequency);
    frequency++;
  } while (frequency <= 108);
  return freqArry;
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

 function isRadioStation(num) {
  if (num >= 87 && num <= 108) {
    return "true";
  } else {
    ("false");
  }
}

// `getStations` goes here

function getStations(number) {
  let result = isRadioStation(number);
  if (console.log(result) === "true") {
    return " it is a radio station";
  } else {
    return " it is not a radio station";
  }
}
console.log(getAllFrequencies());
console.log(getStations(40));
console.log(getStations(90));
console.log(getStations(180));

/*if (number >= 87 && number <= 108) {
    return " is a radio station";
  } else {
    return " is not a radio station";
  }*/

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
