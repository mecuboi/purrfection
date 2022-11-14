const { User } = require('../models');
const { faker } = require('@faker-js/faker');
const { randomUserRole, randomPasswordGenerator } = require('./utils/helpers');


const usersArray = [
  {
    first_name: 'Arely',
    last_name: 'Cole',
    email: 'Vincenzo12@hotmail.com',
    phone_number: '0 362 808 914',
    password: 'password123',
    address: '9139 Cruz Springs Apt. 308',
  },
  {
    first_name: 'Cullen',
    last_name: 'Harber',
    email: 'Milford.Reichert@yahoo.com',
    phone_number: '0 201 337 643',
    password: 'password123',
    address: '84663 Ward Rapid Suite 479',
  },
  {
    first_name: 'Fredrick',
    last_name: 'Nicolas',
    email: 'Ian4@gmail.com',
    phone_number: '0 187 038 309',
    password: 'password123',
    address: '4407 Tia Viaduct Suite 843',
  },
  {
    first_name: 'Katelin',
    last_name: 'Sporer',
    email: 'Americo.Wisozk@gmail.com',
    phone_number: '0 714 693 120',
    password: '$2b$10$xtl0QbcSvYOpbRpCGgd4Q.qaXuBuMRlrY8R8jDS0flxNJfTffaiMK',
    address: '96636 Emma Cape Suite 813',
  },
  {
    first_name: 'Devyn',
    last_name: 'Prosacco',
    email: 'Bobby.Gerhold@hotmail.com',
    phone_number: '0 605 233 169',
    password: '$2b$10$xtl0QbcSvYOpbRpCGgd4Q.qaXuBuMRlrY8R8jDS0flxNJfTffaiMK',
    address: '789 Cornell Club Suite 109',
  },
  {
    first_name: 'Henriette',
    last_name: 'Oberbrunner',
    email: 'Josephine.Kshlerin88@gmail.com',
    phone_number: '0 265 204 877',
    password: '$2b$10$xtl0QbcSvYOpbRpCGgd4Q.qaXuBuMRlrY8R8jDS0flxNJfTffaiMK',
    address: '307 Thiel Stream Apt. 689',
  },
  {
    first_name: 'Mable',
    last_name: 'Quitzon',
    email: 'Lexie7@yahoo.com',
    phone_number: '0 207 409 900',
    password: '$2b$10$xtl0QbcSvYOpbRpCGgd4Q.qaXuBuMRlrY8R8jDS0flxNJfTffaiMK',
    address: '8730 Libby Skyway Suite 068',
  },
  {
    first_name: 'Hosea',
    last_name: 'Paucek',
    email: 'Melody.Heathcote54@hotmail.com',
    phone_number: '0 769 702 647',
    password: '$2b$10$xtl0QbcSvYOpbRpCGgd4Q.qaXuBuMRlrY8R8jDS0flxNJfTffaiMK',
    address: '795 DuBuque Landing Suite 172',
  },
  {
    first_name: 'Edd',
    last_name: 'Stroman',
    email: 'Stanford.Fisher44@yahoo.com',
    phone_number: '0 362 808 914',
    password: '$2b$10$xtl0QbcSvYOpbRpCGgd4Q.qaXuBuMRlrY8R8jDS0flxNJfTffaiMK',
    address: '88705 Padberg Lakes Apt. 981',
  },
  {
    first_name: 'Geoffrey',
    last_name: 'Hartmann',
    email: 'Kane.Predovic29@gmail.com',
    phone_number: '0 873 586 700',
    password: '$2b$10$xtl0QbcSvYOpbRpCGgd4Q.qaXuBuMRlrY8R8jDS0flxNJfTffaiMK',
    address: '40060 Lemke Centers Suite 463',
  },
  {
    first_name: 'Otilia',
    last_name: 'Zemlak',
    email: 'Brandt.Bauch67@yahoo.com',
    phone_number: '0 653 174 737',
    password: '$2b$10$xtl0QbcSvYOpbRpCGgd4Q.qaXuBuMRlrY8R8jDS0flxNJfTffaiMK',
    address: '848 Guiseppe Grove Apt. 900',
  },
  {
    first_name: 'Humberto',
    last_name: 'Lowe',
    email: 'Reina78@gmail.com',
    phone_number: '0 574 106 052',
    password: '$2b$10$xtl0QbcSvYOpbRpCGgd4Q.qaXuBuMRlrY8R8jDS0flxNJfTffaiMK',
    address: '81306 Heathcote Ramp Apt. 474',
  },
];
//generate 10 users
// for (let i = 0; i <= 11; i++) {
//     const counter = i
//     const userData = {
//         first_name: faker.name.firstName(),
//         last_name: faker.name.lastName(),
//         email: faker.internet.email(),
//         //random Australia number
//         phone_number: faker.phone.number('0 ### ### ###'),
//         password: faker.internet.password(15, true),
//         //role either set to buyer or seller
//         //  role: randomUserRole(),
//         //generates random real address
//         address: faker.address.streetAddress(true),
//     };

//     usersArray.push(userData);
// }


const seedUsers = () => User.bulkCreate(usersArray, {
  individualHooks: true,
});

module.exports = seedUsers;

