const sequelize = require('../config/connection');
const { PetAds, Category, User } = require('../models');

const seedCategories = require('./categorySeed');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
   
    await seedCategories();
  
    console.log('\n----- Categories SEEDED -----\n');
}

seedDatabase();