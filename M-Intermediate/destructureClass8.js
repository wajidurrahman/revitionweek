// const person = {
//     name:'Jack William',
//     age: 17,
//     job:'facebook',
//     gfName:'Ema Watson',
//     address:'Kochu Khet',
//     phone:'01717112211',
//     friends:['Tom hancks', 'Tom cruise', 'Tom Yarn']
// }
// const gfNameJante = person.gfName;
// const phoneNum = person.phone;

// console.log(gfNameJante, phoneNum);

const person = {
    name:'Jack William',
    age: 17,
    job:'facebook',
    gfName:'Ema Watson',
    address:'Kochu Khet',
    phone:'01717112211',
    friends:['Tom hancks', 'Tom cruise', 'Tom Yarn']
}
const {phone, gfName} = person;
// console.log(gfName, phone);

const friends = ['Sakib Khan', 'Arma Khan', 'Salman Khan', 'Sharuk Khan'];
const [nextFriend, ...restFriend] = friends;
// console.log(restFriend);

const complexObject = {
    name: 'abc',
    info: {
        address: 'kola bagan',
        leader: 'Tiger'
    }
}

const {leader} = complexObject.info;
console.log(leader);