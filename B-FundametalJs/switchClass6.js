// num = 5
// if (num > 1000){}
// else if (num === 100){}
// else if (num === 50){}
// else if (num === 20){}
// else if (num === 10){}
// else if (num === 5){}
// else if (num === 0){}
// else {}

// ............................................

num = 1000;
switch(num){
    case 1000:
        console.log('I am 1000');
        // break;
    case 100:
        console.log('! am 100');
        // break;
    case 20:
    case 10:    
        console.log('I am either 10 or 10');
        // break;
    default:
        console.log(`I don't know who you are!`);   
}

// ................................................

const expr = 'Papayas';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}

// .................................................

switch (expr) {
    case 'Oranges':
      console.log('Oranges are $0.59 a pound.');
      break;
    case 'Apples':
      console.log('Apples are $0.32 a pound.');
      break;
    case 'Bananas':
      console.log('Bananas are $0.48 a pound.');
      break;
    case 'Cherries':
      console.log('Cherries are $3.00 a pound.');
      break;
    case 'Mangoes':
    case 'Papayas':
      console.log('Mangoes and papayas are $2.79 a pound.');
      break;
    default:
      console.log('Sorry, we are out of ' + expr + '.');
  }
  
  console.log("Is there anything else you'd like?");

// ..........................

  var foo = 0;
switch (foo) {
  case -1:
    console.log('negative 1');
    break;
  case 0: // foo is 0 so criteria met here so this block will run
    console.log(0);
    // NOTE: the forgotten break would have been here
  case 1: // no break statement in 'case 0:' so this case will run as well
    console.log(1);
    break; // it encounters this break so will not continue into 'case 2:'
  case 2:
    console.log(2);
    break;
  default:
    console.log('default');
}

// ....................................................

var foo = 5;
switch (foo) {
  case 2:
    console.log(2);
    break; // it encounters this break so will not continue into 'default:'
  default:
    console.log('default')
    // fall-through
  case 1:
    console.log('1');
}

// ....................................................

var Animal = 'Giraffe';
switch (Animal) {
  case 'Cow':
  case 'Giraffe':
  case 'Dog':
  case 'Pig':
    console.log('This animal will go on Noah\'s Ark.');
    break;
  case 'Dinosaur':
  default:
    console.log('This animal will not.');
}

// ......................................................

var foo = 1;
var output = 'Output: ';
switch (foo) {
  case 0:
    output += 'So ';
  case 1:
    output += 'What ';
    output += 'Is ';
  case 2:
    output += 'Your ';
  case 3:
    output += 'Name';
  case 4:
    output += '?';
    console.log(output);
    break;
  case 5:
    output += '!';
    console.log(output);
    break;
  default:
    console.log('Please pick a number from 0 to 5!');
}

// ............................................

const action = 'say_hello';
switch (action) {
  case 'say_hello':
    let message = 'hello Friend';
    console.log(message);
    break;
  case 'say_hi':
    let messages = 'hi';
    console.log(messages);
    break;
  default:
    console.log('Empty action received.');
    break;
}

// ............................................

const actionA = 'say_hello';
switch (actionA) {
  case 'say_hello': { // added brackets
    let message0 = 'hello Sir';
    console.log(message0);
    break;
  } // added brackets
  case 'say_hi': { // added brackets
    let message1 = 'hi';
    console.log(message1);
    break;
  } // added brackets
  default: { // added brackets
    console.log('Empty action received.');
    break;
  } // added brackets
}