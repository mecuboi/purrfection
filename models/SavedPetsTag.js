const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class SavedPetsTag extends Model {}

SavedPetsTag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    saved_pet_ads_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'pet_ads',
          key: 'id',
        },
      },
    user_tag_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'user',
          key: 'id',
        },
      },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "saved_pets_tag",
  }
);

module.exports = SavedPetsTag;
