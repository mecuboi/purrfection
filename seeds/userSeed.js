const { User } = require('../models');
const { faker } = require('@faker-js/faker');
const { randomUserRole, randomPasswordGenerator } = require('./utils/helpers');
const bcrypt = require('bcrypt');

const usersArray = [];
//generate 10 users
for (let i = 0; i <= 11; i++) {
    const counter = i
     const userData = {
         first_name: faker.name.firstName(),
         last_name: faker.name.lastName(),
         email: faker.internet.email(),
         //random Australia number
         phone_number: faker.phone.number('+61 ### ### ###'),
         //TODO fix bcrypt.hash to show on array
         password: faker.internet.password(15, true),
         //role either set to buyer or seller
        //  role: randomUserRole(),
         //generates random real address
         address: faker.address.streetAddress(true),
         //A total of 30 pets, so saved_pets_id will pick randomly from those 30
        //  saved_petAds_id: Math.floor(Math.random() * 30) 
     };

    usersArray.push(userData);
 }

 
const seedUsers = () => User.bulkCreate(usersArray, {
    individualHooks: true,
});

module.exports = seedUsers;

