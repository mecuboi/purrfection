const sequelize = require('../config/connection');
const { User, Category, PetAds } = require('../models');

const seedPetAds = require('./petAdSeed');
const seedCategory = require('./categorySeed');
const seedUser = require('./userSeed');


const seedDatabase = async () => {
  await sequelize.sync({ force: true });
 
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedCategory();

  console.log('\n----- CATEGORY SEEDED-----\n');

  await seedPetAds();

  console.log('\n----- PETADS SEEDED-----\n');

  await seedUser();

  console.log('\n----- USER SEEDED-----\n');

  process.exit(0);
};

seedDatabase();
