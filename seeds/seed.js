const sequelize = require('../config/connection');

const seedPetAds = require('./petAdSeed.js');
const seedCategories = require('./categorySeed');
const seedUsers = require('./userSeed');
const seedSavedPetsTag = require('./savedPetsTagSeed');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedCategories();

  console.log('\n----- Categories SEEDED -----\n');

  await seedUsers();

  console.log('\n----- Users SEEDED-----\n');

  await seedPetAds();

  console.log('\n----- Pet Ads SEEDED-----\n');

  await seedSavedPetsTag();

  console.log('\n----- Saved Pets Tag SEEDED-----\n');

  process.exit(0);

};

seedDatabase();
