

//should output: “Don't forget to PRACTICE CODING!
function lastTask(tasks) {
    console.log(tasks);
   return tasks[tasks.length -1];
}
let tasks = ['do the dishes', 'take out garbage', 'practice coding'];
console.log(lastTask(tasks).toUpperCase());