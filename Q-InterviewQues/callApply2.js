// step 1...
// const normalPerson = {
//     firstName: 'Rahim',
//     lastName: 'Uddin',
//     salary: 15000,
//     getFullName: function() {
//         console.log(this.firstName, this.lastName);
//     }
// }
// console.log(normalPerson.firstName);

// step 2...
const normalPerson = {
    firstName: 'Rahim',
    lastName: 'Uddin',
    salary: 15000,
    getFullName: function() {
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount){
        this.salary = this.salary - amount;
        return this.salary;
    }
}
normalPerson.chargeBill(150);
normalPerson.chargeBill(3000);
console.log(normalPerson.salary);