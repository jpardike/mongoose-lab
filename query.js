const db = require("./models");

const apple = {
  name: 'Apple',
  founded: 'April 1, 1976',
  employees: 2,
  active: false,
  products: ['computers'],
  CEO: {
    name: 'Steve Jobs',
    age: 21,
  },
};

const google = {
  name: 'Google',
  founded: 'September 4, 1998',
  employees: 57100,
  active: true,
  products: ['search', 'maps', 'email'],
  CEO: {
    name: 'Larry Page',
    age: 43,
  },
};


//  Created Apple

// db.Company.create(apple, (error, createdCompany) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(createdCompany);
//   }
//   process.exit();
// });

// Created Google

// db.Company.create(google, (error, createdCompany) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(createdCompany);
//   }
//   process.exit();
// });


// Find Company

// db.Company.find({}, (error, allCompanies) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(allCompanies);
//   }

//   process.exit();
// });


// Update Apple

// db.Company.findByIdAndUpdate(
//   '5f77bbb58d930ffee189b0d6',
//   {
//     name: 'Apple Inc',
//     employees: 66000,
//     active: true,
//     products: ['computers', 'phones', 'tablets'],
//     CEO: {
//       name: 'Tim Cook',
//       age: 56
//     },
//   },
//   {new: true},
//   (error, updatedCompany) => {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log(updatedCompany);
//     }

//     process.exit();
//   }
// );