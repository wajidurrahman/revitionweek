var teaLine = ['kalam', 'Balam', 'Salam'];

// (array potom take element bad dew jonno ... .shift array shas take bad dew ke ... .pop)
teaLine.shift();
console.log(teaLine);

// (array potome Element add kora ke... .unshift array shes add korte ... .push)
teaLine.unshift('Palam');
console.log(teaLine);

// (array Element tik take .slice kore akti onsho kate niy jay)
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
var part = animals.slice(2);
console.log(part);
console.log(animals.slice(2, 4));
console.log(animals.slice(1, 5));

// (array Element item ke cate koto bokoto korte ... .splice  )
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
console.log(months);