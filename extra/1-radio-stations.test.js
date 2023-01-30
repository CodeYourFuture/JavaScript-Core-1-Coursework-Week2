test("getAllFrequencies() returns all frequencies between 87 and 108", () => {
  expect(getAllFrequencies()).toEqual([
    87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104,
    105, 106, 107, 108,
  ]);
});

test("getStations() returns all the available stations", () => {
  expect(getStations()).toEqual(getAvailableStations());
});
