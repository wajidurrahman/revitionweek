// console.log(2032 / 4);

/*const year = 3566;
let remainder = year % 4;
if (remainder == 0){
    console.log('Your year is a Leap Year');
} else {
    console.log("Your year not is a Leap Year");
}*/

// function vitor console.log diba chack korte hole
// no hoy return kore diba.
function isLeapYear(year){
    const remainder = year % 4;
    if (remainder == 0){
        return true;
    } else {
        return false;
    }
}