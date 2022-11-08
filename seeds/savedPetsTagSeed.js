const { SavedPetsTag } = require('../models');

const savedPetsTagArray = [];

for (let i = 0; i < 11; i++) {
    const savedPetsTagData = {

        //TODO find a way to add multiple values to saved_pets_ads_id
        //In order to allow users to have more than one favourite pet ad
        saved_pets_ads_id: Math.floor(Math.random()* 30),
        //increment user_tag_id from 1 to 10, 
        //Cannot be done on model, as it only allows 1 property to be autoincremented
        user_tag_id: i + 1
    }
    savedPetsTagArray.push(savedPetsTagData)
};

const seedSavedPetsTag = () => SavedPetsTag.bulkCreate(savedPetsTagArray);
//  console.log(savedPetsTagArray)

module.exports = seedSavedPetsTag;