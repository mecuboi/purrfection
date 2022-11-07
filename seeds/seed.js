const sequelize = require('../config/connection');
const { PetAds, Category, User } = require('../models');

const seedPetAds = require('./petAdSeed.js');
const seedCategories = require('./categorySeed');
const seedUsers= require('./userSeed');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
 
  await seedCategories();

  console.log('\n----- Categories SEEDED -----\n');

  await seedUsers();

  console.log('\n----- Users SEEDED-----\n');

  await seedPetAds();

  console.log('\n----- Pet Ads SEEDED-----\n');

  process.exit(0);
 
};

seedDatabase();
