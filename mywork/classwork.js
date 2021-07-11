const studentNames = ["Dharma", "Omer", "Maya", "Gulnihal", "Dom", "Khadar", "Maha"];
const otherNames = ["David", "Ali", "Joe"];

const allNames = studentNames.concat(otherNames);

allNames.sort();

function checkNames(array, name) {
    if (array.includes(name)) {
        return `${name} is sitting table with ${array}`;
    }
    return `${name} is not sitting table with ${array}`;
}


// const selectedNames = allNames.slice(1, 4);
console.log(checkNames(studentNames, "khadar"));