// function smallEnough(a, limit){
//     const withinTheLimit = a.filter(element => element <= limit);
//     if (withinTheLimit.length === a.length) return true;
//     else return false
// }



function smallEnough(a, limit){
    let newArr = [];
    for (let i = 0; i < a.length; i++){
        if (a[i] <= limit) {
            newArr.push(a[i]);
        }
    }
    return newArr.length === a.length;
}

console.log(smallEnough([2,34,3,22,354,22], 1000));