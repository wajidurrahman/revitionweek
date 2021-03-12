// function getFullName(fastName, lastName) {
//     const fullName = fastName +' '+ lastName;
//     return fullName;
// }
// const name = getFullName('Hanif', 'Poribohon');
// console.log(name);


// function getFullName(fastName, lastName) {
//     console.log(arguments);
//     let fullName = '';
//     for (let i = 0; i < arguments.length; i++) {
//         const namePart = arguments[i];
//         fullName = fullName +" "+ namePart;
//     }
//     return fullName;
// }
// const name = getFullName('omuk', 'sonket', 'bin', 'Hanif', 'sonket', 'Poribohon');
// console.log(name);


function getFullName(fastName, lastName) {
    let fullName = '';
    const result = [...arguments].join(' ');
    for (let i = 0; i < arguments.length; i++) {
        const namePart = arguments[i];
        fullName = fullName +' '+ namePart;
    }
    return fullName;
}
const name = getFullName('omuk', 'sonket', 'bin', 'Hanif', 'sonket', 'Poribohon');
console.log(name);

//Wh arguments ... like array object. fun vitore take.