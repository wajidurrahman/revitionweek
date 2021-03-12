function welcomeGuest(name) {
    console.log(name);  
}
const actorName1 = 'Tom Hanks';
welcomeGuest(actorName1);

//  
function welComeGuest(name, greetHandler) {
    greetHandler(name)
}
const actorName = 'Tom Hanks';

function greetMorning(name) {
    console.log('Good Morning', name);
}

function greetAfternoon(name) {
    console.log('Good evening', name);
}
welComeGuest(actorName, greetMorning);
welComeGuest('Kabila', greetAfternoon);
welComeGuest('Shahin Vai', function(name){
    console.log('Special Welcome', name);
});

// example.. callback function.
function handleClick() {
    console.log('someone click me');
}
// document.getElementById('click').addEventListener('click', handleClick);

// document.getElementById('fastItem').addEventListener('click', function(){
//     console.log('click me again');
// });