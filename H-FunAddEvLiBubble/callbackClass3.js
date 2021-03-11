function explain_callback(name, age, task) {
    console.log('Hello', name);
    console.log('Your age', age);
    task();
}

function wash_hand() {
    console.log('wash hand with soap');
}

function takeShower() {
    console.log('Take shower');
}

function scrollFacebook() {
    console.log(`scroll facebook but don't like any post`);
}

explain_callback("Sogir Uddin", 17, wash_hand);
explain_callback("Jogir Uddin", 13, takeShower);
explain_callback('Mogir Uddin', 21, scrollFacebook);