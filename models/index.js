const User = require('./User');
const PetAds = require('./PetAds');
const Category = require('./Category');
const SavedPetsTag = require('./SavedPetsTag');

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
});

User.belongsToMany(PetAds, {
  foreignKey: 'user_tag_id',
  through: SavedPetsTag
});

PetAds.belongsToMany(User, {
  foreignKey: 'saved_pets_ads_id',
  through: SavedPetsTag
});



module.exports = { User, PetAds, Category, SavedPetsTag };
