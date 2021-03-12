const ages = [12, 14, 16, 13, 17];
const ages1 = [15, 16, 12];
const ages2 = [25, 36, 22, 29];
const allAges = ages.concat(ages1).concat([5]).concat(ages2);
// console.log(allAges);
const allAges1 = [ages, ages1, 5, ages2];
// console.log(allAges1);

// esy system.Spread operator 
const allAges2 = [...ages, ...ages1, 5, ...ages2];
console.log(allAges2);

const business = 650;
const minister = 450;
const sochib = 250; 
// const maximum = Math.max(business, minister, sochib);
// console.log(maximum);
const takaPoisa = [650, 450, 250, 850]; //best way .
const maximum1 = Math.max(...takaPoisa);
console.log(maximum1);