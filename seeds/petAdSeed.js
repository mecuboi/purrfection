const { PetAds } = require('../models');
const { faker } = require('@faker-js/faker');
const { randomPriceGenerator, randomAgeGenerator, randomDescription } = require('./utils/helpers');
const { json } = require('sequelize');


const petAdsArray = [];
//generate 10 dogs
for (let i = 0; i <= 11; i++) {
   const counter = i
    const dogAdData = {
        name: faker.name.firstName(),
        breed: faker.animal.dog(),
        //age random from 0 to 10
        age: randomAgeGenerator(10),
        microchip_number: Math.floor(Math.random() * 9999),
        //price random from 100 to 1000 in 2 decimal places
        price: randomPriceGenerator(100), 
        category_id: 1,    //1 Dogs, 2 Cats, 3 Small Animals
        seller_id: i   //References user id
    };
    //Add an additional property, as dogAdData needs to be initialised before being able to call its properties
    dogAdData.description = `${dogAdData.name} is a very very ${randomDescription()} dog.`
    
    //convert into array and sort alphabetically
    //then convert back into an object
    const dogAdDataSorted = Object.fromEntries(
        Object.entries(dogAdData).sort(([,a],[,b]) => a-b)
    );
    
    petAdsArray.push(dogAdDataSorted);
}
//generate 10 cats
for (let i = 0; i <= 11; i++) {
   const counter = i
    const catAdData = {
        name: faker.name.firstName(),
        breed: faker.animal.cat(),
        //age random from 0 to 10
        age: randomAgeGenerator(10),
        microchip_number: Math.floor(Math.random() * 9999),
        //price random from 100 to 1000 in 2 decimal places
        price: randomPriceGenerator(100), 
        category_id: 2,    //1 Dogs, 2 Cats, 3 Small Animals
        seller_id: i    //References user id
    };
    //Add an additional property, as dogAdData needs to be initialised before being able to call its properties
    catAdData.description = `${catAdData.name} is a very very ${randomDescription()} cat.`
    
    //convert into array and sort alphabetically
    //then convert back into an object
    const catAdDataSorted = Object.fromEntries(
        Object.entries(catAdData).sort(([,a],[,b]) => a-b)
    );
    
    petAdsArray.push(catAdDataSorted);
}
//generate 10 rabbits
for (let i = 0; i <= 11; i++) {
   const counter = i
    const smallAdData = {
        name: faker.name.firstName(),
        breed: faker.animal.rabbit(),
        //age random from 0 to 10
        microchip_number: Math.floor(Math.random() * 9999),
        age: randomAgeGenerator(10),
        //price random from 100 to 1000 in 2 decimal places
        price: randomPriceGenerator(100), 
        category_id: 3,    //1 Dogs, 2 Cats, 3 Small Animals
        seller_id: i   //References user id
    };
    //Add an additional property, as dogAdData needs to be initialised before being able to call its properties
    smallAdData.description = `${smallAdData.name} is a very very ${randomDescription()} rabbit.`
    
    // convert into array and sort alphabetically
    // then convert back into an object
    const smallAdDataSorted = Object.fromEntries(
        Object.entries(smallAdData).sort(([,a],[,b]) => a-b)
    );
    
        petAdsArray.push(smallAdDataSorted);
}



const seedPetAds = () => PetAds.bulkCreate(petAdsArray);

module.exports = seedPetAds;

// PetAds (id, name, breed, microchip_number, age, price, description, category_id, seller_id)