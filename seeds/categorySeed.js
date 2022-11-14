const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Dogs'
  },
  {
    category_name: 'Cats'
  },
  {
    category_name: 'Small Animals'
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
