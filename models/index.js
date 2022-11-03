const User = require('./User');
const PetAds = require('./PetAds');
const Category = require('./Category')

User.hasMany(PetAds, {
  foreignKey: 'seller_id',
  onDelete: 'CASCADE'
});

PetAds.belongsTo(User, {
  foreignKey: 'seller_id'
});

Category.hasMany(PetAds, {
  foreignKey: 'category_id'
});

PetAds.belongsTo(Category, {
  foreignKey: 'category_id'
})

module.exports = { User, PetAds, Category };
