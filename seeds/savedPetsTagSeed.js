const { SavedPetsTag } = require('../models');

const savedPetsTagArray = [
  {
    id: 1,
    saved_pet_ads_id: null,
    user_tag_id: 1,
    saved_pets_ads_id: 4
  },
  {
    id: 2,
    saved_pet_ads_id: null,
    user_tag_id: 2,
    saved_pets_ads_id: 22
  },
  {
    id: 3,
    saved_pet_ads_id: null,
    user_tag_id: 3,
    saved_pets_ads_id: 28
  },
  {
    id: 4,
    saved_pet_ads_id: null,
    user_tag_id: 4,
    saved_pets_ads_id: 16
  },
  {
    id: 5,
    saved_pet_ads_id: null,
    user_tag_id: 5,
    saved_pets_ads_id: 3
  },
  {
    id: 6,
    saved_pet_ads_id: null,
    user_tag_id: 6,
    saved_pets_ads_id: 22
  },
  {
    id: 7,
    saved_pet_ads_id: null,
    user_tag_id: 7,
    saved_pets_ads_id: 14
  },
  {
    id: 8,
    saved_pet_ads_id: null,
    user_tag_id: 8,
    saved_pets_ads_id: 29
  },
  {
    id: 9,
    saved_pet_ads_id: null,
    user_tag_id: 9,
    saved_pets_ads_id: 2
  },
  {
    id: 10,
    saved_pet_ads_id: null,
    user_tag_id: 10,
    saved_pets_ads_id: 12
  },
  {
    id: 11,
    saved_pet_ads_id: null,
    user_tag_id: 11,
    saved_pets_ads_id: 5
  }
];

// for (let i = 0; i < 11; i++) {
//     const savedPetsTagData = {

//         //TODO find a way to add multiple values to saved_pets_ads_id
//         //In order to allow users to have more than one favourite pet ad
//         saved_pets_ads_id: Math.floor(Math.random()* 30),
//         //increment user_tag_id from 1 to 10,
//         //Cannot be done on model, as it only allows 1 property to be autoincremented
//         user_tag_id: i + 1
//     }
//     savedPetsTagArray.push(savedPetsTagData)
// };

const seedSavedPetsTag = () => SavedPetsTag.bulkCreate(savedPetsTagArray);
//  console.log(savedPetsTagArray)

module.exports = seedSavedPetsTag;