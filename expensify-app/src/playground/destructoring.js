// // Object Destructor

// const person = {
//     // name: 'Marc',
//     age: 25,
//     location: {
//         city: 'Amsterdam',
//         temp: 20
//     }
// };

// const { name: firstName = 'Anonymous', age } = person;
// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//     console.log(city, temperature);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { title, author } = book;
// const { name: publisherName = 'Self-Published' } = book.publisher;
// console.log(publisherName);

// // Array Destructor

const address = ['1299 S Juniper Street', 'Philadelphia', , '19147'];

const [, city, state = 'New York'] = address;

console.log(`You are in ${state} ${city}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [itemName, , costMedium] = item;
console.log(`A medium ${itemName} costs ${costMedium}`)