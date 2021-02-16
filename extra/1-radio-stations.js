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

function getAllFrequencies() {
  let startVal = 87;
  let endVal = 108 + 1;
  let arr = Array.from({ length: endVal - startVal }, function (_, i) {
    return (i = startVal++);
  });
  console.log(arr);
  return arr;
}

/**
 * Next, let's write a function that gives us only the frequencies that are radio stations.
 * Call this function `getStations`.
 *
 * This function should:
 * - Get the available frequencies from `getAllFrequencies`
 * - There is a helper function called isRadioFrequency that takes an integer as an argument and returns a boolean.
 * - Return only the frequencies that are radio stations.
 */

//!IMPORTANT
// I'm not understanding what You want here?  getAllFrequencies() return only radio frequencies so base on what I can do filter?
const radioAll = getAllFrequencies();

function getStations(avaStation = getAvailableStations()) {
  return avaStation
    .filter((item) => radioAll.includes(item))
    .sort((frequencyA, frequencyB) => frequencyA - frequencyB);
}

// function getStations() {
//   const set = new Set(getAllFrequencies());
//   //compare console log
//   console.log("getAvailableStations(): " + getAvailableStations());
//   const arrr = new Array(4)
//     .fill(undefined)
//     .map(function () {
//       return Math.floor(Math.random() * (108 - 87 + 1) + 87);
//     })
//     .sort(function (frequencyA, frequencyB) {
//       return frequencyA - frequencyB;
//     });
//   console.log(`includes from helper function + ${arrr}`);

//   console.log(
//     "it is here: " +
//       [...set]
//         .filter((item) => !isNaN(item))
//         .sort(function (frequencyA, frequencyB) {
//           return frequencyA - frequencyB;
//         })
//   );
//   // return [...set]
//   //   .filter((item) => !isNaN(item))
//   //   .sort(function (frequencyA, frequencyB) {
//   //     return frequencyA - frequencyB;
//   //   });
//   return getAvailableStations();
// }

function isRadioFrequency(int) {
  return getAllFrequencies().includes(int);
}

/* ======= TESTS - DO NOT MODIFY ======= */

function getAvailableStations() {
  // Using `stations` as a property as defining it as a global variable wouldn't
  // always make it initialized before the function is called
  if (!getAvailableStations.stations) {
    const stationCount = 22;
    getAvailableStations.stations = new Array(stationCount)
      .fill(undefined)
      .map(function () {
        return Math.floor(Math.random() * (108 - 87 + 1) + 87);
      })
      .sort(function (frequencyA, frequencyB) {
        return frequencyA - frequencyB;
      });
  }

  return getAvailableStations.stations;
}

function isRadioStation(frequency) {
  return getAvailableStations().includes(frequency);
}

const assert = require("assert");

function test(testName, fn) {
  try {
    fn();
    console.log(`\n✅ ${testName}: PASS`);
  } catch (error) {
    console.log(
      `\n❌ ${testName}: FAIL (see details below)\n\n${error.message}`
    );
  }
}

test("getAllFrequencies() returns all frequencies between 87 and 108", function () {
  const frequencies = getAllFrequencies();

  assert.deepStrictEqual(frequencies, [
    87,
    88,
    89,
    90,
    91,
    92,
    93,
    94,
    95,
    96,
    97,
    98,
    99,
    100,
    101,
    102,
    103,
    104,
    105,
    106,
    107,
    108,
  ]);
});

test("getStations() returns all the available stations", () => {
  const stations = getStations();
  assert.deepStrictEqual(stations, getAvailableStations());
});
