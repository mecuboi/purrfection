const { PetAds } = require('../models');
const { faker } = require('@faker-js/faker');
const { randomPriceGenerator, randomAgeGenerator, randomDescription } = require('./utils/helpers');



const petAdsArray = [
  {

    name: 'Malika',
    breed: 'Sporting Lucas Terrier',
    microchip_number: 1135,
    age: 5,
    price: 190,
    description: 'Malika is a very very curious dog.',

    image: 'https://loremflickr.com/1920/1080/animals?lock=44914',
    category_id: 1,
    seller_id: 1
  },
  {

    name: 'Emmitt',
    breed: 'Shiba Inu',
    microchip_number: 766,
    age: 5,
    price: 838,
    description: 'Emmitt is a very very bubbly dog.',

    image: 'https://loremflickr.com/1920/1080/animals?lock=23407',
    category_id: 1,
    seller_id: 2
  },
  {

    name: 'Arnaldo',
    breed: 'English Springer Spaniel',
    microchip_number: 2810,
    age: 3,
    price: 640,
    description: 'Arnaldo is a very very calm dog.',

    image: 'https://loremflickr.com/1920/1080/animals?lock=98544',
    category_id: 1,
    seller_id: 3
  },
  {

    name: 'Donnell',
    breed: 'Tornjak',
    microchip_number: 3139,
    age: 6,
    price: 511,
    description: 'Donnell is a very very bubbly dog.',

    image: 'https://loremflickr.com/1920/1080/animals?lock=39445',
    category_id: 1,
    seller_id: 4
  },
  {

    name: 'Samanta',
    breed: 'Tibetan Terrier',
    microchip_number: 8863,
    age: 5,
    price: 61,
    description: 'Samanta is a very very cunning dog.',

    image: 'https://loremflickr.com/1920/1080/animals?lock=60956',
    category_id: 1,
    seller_id: 5
  },
  {

    name: 'Domenick',
    breed: 'Tornjak',
    microchip_number: 7569,
    age: 3,
    price: 956,
    description: 'Domenick is a very very calm dog.',

    image: 'https://loremflickr.com/1920/1080/animals?lock=27538',
    category_id: 1,
    seller_id: 6
  },
  {

    name: 'Elyse',
    breed: 'Redbone Coonhound',
    microchip_number: 8058,
    age: 2,
    price: 655,
    description: 'Elyse is a very very shy dog.',

    image: 'https://loremflickr.com/1920/1080/animals?lock=96506',
    category_id: 1,
    seller_id: 7
  },
  {

    name: 'Rubye',
    breed: 'Chesapeake Bay Retriever',
    microchip_number: 8462,
    age: 4,
    price: 166,
    description: 'Rubye is a very very shy dog.',

    image: 'https://loremflickr.com/1920/1080/animals?lock=73484',
    category_id: 1,
    seller_id: 8
  },
  {

    name: 'Elisha',
    breed: 'Saarloos Wolfdog',
    microchip_number: 8325,
    age: 7,
    price: 234,
    description: 'Elisha is a very very calm dog.',

    image: 'https://loremflickr.com/1920/1080/animals?lock=59144',
    category_id: 1,
    seller_id: 9
  },
  {

    name: 'Favian',
    breed: 'Greyhound',
    microchip_number: 5242,
    age: 8,
    price: 134,
    description: 'Favian is a very very smart dog.',
    image: 'https://loremflickr.com/1920/1080/animals?lock=39353',
    category_id: 1,
    seller_id: 10
  },
  {

    name: 'Granville',
    breed: 'Cardigan Welsh Corgi',
    microchip_number: 1520,
    age: 4,
    price: 844,
    description: 'Granville is a very very loyal dog.',
    image: 'https://loremflickr.com/1920/1080/animals?lock=24908',
    category_id: 1,
    seller_id: 11
  },
  {

    name: 'Ona',
    breed: 'Lancashire Heeler',
    microchip_number: 1387,
    age: 5,
    price: 927,
    description: 'Ona is a very very cunning dog.',
    image: 'https://loremflickr.com/1920/1080/animals?lock=26570',
    category_id: 1,
    seller_id: 12
  },
  {

    name: 'Leila',
    breed: 'Turkish Van',
    microchip_number: 5247,
    age: 7,
    price: 778,
    description: 'Leila is a very very shy cat.',
    image: 'https://loremflickr.com/1920/1080/cats?lock=65878',
    category_id: 2,
    seller_id: 1
  },
  {

    name: 'Fiona',
    breed: 'Peterbald',
    microchip_number: 3779,
    age: 4,
    price: 186,
    description: 'Fiona is a very very curious cat.',
    image: 'https://loremflickr.com/1920/1080/cats?lock=61972',
    category_id: 2,
    seller_id: 2
  },
  {

    name: 'Marguerite',
    breed: 'Siamese',
    microchip_number: 2691,
    age: 4,
    price: 315,
    description: 'Marguerite is a very very shy cat.',
    image: 'https://loremflickr.com/1920/1080/cats?lock=97632',
    category_id: 2,
    seller_id: 3
  },
  {

    name: 'Jocelyn',
    breed: 'Ocicat',
    microchip_number: 7507,
    age: 6,
    price: 821,
    description: 'Jocelyn is a very very shy cat.',
    image: 'https://loremflickr.com/1920/1080/cats?lock=336',
    category_id: 2,
    seller_id: 4
  },
  {

    name: 'Kamryn',
    breed: 'British Shorthair',
    microchip_number: 4726,
    age: 7,
    price: 717,
    description: 'Kamryn is a very very clingy cat.',
    image: 'https://loremflickr.com/1920/1080/cats?lock=78126',
    category_id: 2,
    seller_id: 5
  },
  {

    name: 'Murphy',
    breed: 'Tonkinese',
    microchip_number: 3653,
    age: 3,
    price: 466,
    description: 'Murphy is a very very curious cat.',
    image: 'https://loremflickr.com/1920/1080/cats?lock=11897',
    category_id: 2,
    seller_id: 6
  },
  {

    name: 'Leif',
    breed: 'Minskin',
    microchip_number: 4942,
    age: 9,
    price: 968,
    description: 'Leif is a very very calm cat.',
    image: 'https://loremflickr.com/1920/1080/cats?lock=98504',
    category_id: 2,
    seller_id: 7
  },
  {

    name: 'Viola',
    breed: 'Minskin',
    microchip_number: 7412,
    age: 8,
    price: 939,
    description: 'Viola is a very very active cat.',
    image: 'https://loremflickr.com/1920/1080/cats?lock=87815',
    category_id: 2,
    seller_id: 8
  },
  {

    name: 'Lindsey',
    breed: 'American Shorthair',
    microchip_number: 2126,
    age: 0,
    price: 359,
    description: 'Lindsey is a very very curious cat.',
    image: 'https://loremflickr.com/1920/1080/cats?lock=35514',
    category_id: 2,
    seller_id: 9
  },
  {

    name: 'Janiya',
    breed: 'Havana',
    microchip_number: 3768,
    age: 8,
    price: 447,
    description: 'Janiya is a very very loyal cat.',
    image: 'https://loremflickr.com/1920/1080/cats?lock=8527',
    category_id: 2,
    seller_id: 10
  },
  {

    name: 'Mona',
    breed: 'Cornish Rex',
    microchip_number: 9280,
    age: 0,
    price: 831,
    description: 'Mona is a very very cunning cat.',
    image: 'https://loremflickr.com/1920/1080/cats?lock=54081',
    category_id: 2,
    seller_id: 11
  },
  {

    name: 'Marisol',
    breed: 'Tonkinese',
    microchip_number: 1198,
    age: 5,
    price: 746,
    description: 'Marisol is a very very cunning cat.',
    image: 'https://loremflickr.com/1920/1080/cats?lock=26909',
    category_id: 2,
    seller_id: 12
  },
  {

    name: 'Rebecca',
    breed: 'American Sable',
    microchip_number: 9504,
    age: 5,
    price: 896,
    description: 'Rebecca is a very very curious rabbit.',
    image: 'https://loremflickr.com/1920/1080/animals?lock=42752',
    category_id: 3,
    seller_id: 1
  },
  {

    name: 'Lilyan',
    breed: 'Satin Angora',
    microchip_number: 7693,
    age: 9,
    price: 796,
    description: 'Lilyan is a very very cunning rabbit.',
    image: 'https://loremflickr.com/1920/1080/animals?lock=9266',
    category_id: 3,
    seller_id: 2
  },
  {

    name: 'Rhiannon',
    breed: 'New Zealand',
    microchip_number: 8383,
    age: 6,
    price: 909,
    description: 'Rhiannon is a very very cunning rabbit.',
    image: 'https://loremflickr.com/1920/1080/animals?lock=31677',
    category_id: 3,
    seller_id: 3
  },
  {

    name: 'Waino',
    breed: 'Belgian Hare',
    microchip_number: 4304,
    age: 8,
    price: 23,
    description: 'Waino is a very very smart rabbit.',
    image: 'https://loremflickr.com/1920/1080/animals?lock=48450',
    category_id: 3,
    seller_id: 4
  },
  {

    name: 'Ephraim',
    breed: 'Satin Angora',
    microchip_number: 7120,
    age: 7,
    price: 670,
    description: 'Ephraim is a very very bubbly rabbit.',
    image: 'https://loremflickr.com/1920/1080/animals?lock=20680',
    category_id: 3,
    seller_id: 5
  },
  {

    name: 'Clint',
    breed: 'Netherland Dwarf',
    microchip_number: 8265,
    age: 0,
    price: 246,
    description: 'Clint is a very very calm rabbit.',
    image: 'https://loremflickr.com/1920/1080/animals?lock=2580',
    category_id: 3,
    seller_id: 6
  },
  {

    name: 'Lydia',
    breed: 'Giant Chinchilla',
    microchip_number: 9623,
    age: 8,
    price: 962,
    description: 'Lydia is a very very cunning rabbit.',
    image: 'https://loremflickr.com/1920/1080/animals?lock=43111',
    category_id: 3,
    seller_id: 7
  },
  {

    name: 'Hoyt',
    breed: 'Holland Lop',
    microchip_number: 1324,
    age: 6,
    price: 456,
    description: 'Hoyt is a very very calm rabbit.',
    image: 'https://loremflickr.com/1920/1080/animals?lock=40616',
    category_id: 3,
    seller_id: 8
  },
  {

    name: 'Camryn',
    breed: 'Netherland Dwarf',
    microchip_number: 99,
    age: 1,
    price: 165,
    description: 'Camryn is a very very playful rabbit.',
    image: 'https://loremflickr.com/1920/1080/animals?lock=36148',
    category_id: 3,
    seller_id: 9
  },
  {

    name: 'Maybell',
    breed: 'Flemish Giant',
    microchip_number: 1437,
    age: 1,
    price: 941,
    description: 'Maybell is a very very bubbly rabbit.',
    image: 'https://loremflickr.com/1920/1080/animals?lock=12858',
    category_id: 3,
    seller_id: 10
  },
  {

    name: 'Liliane',
    breed: 'Holland Lop',
    microchip_number: 5181,
    age: 2,
    price: 120,
    description: 'Liliane is a very very calm rabbit.',
    image: 'https://loremflickr.com/1920/1080/animals?lock=88164',
    category_id: 3,
    seller_id: 11
  },
  {

    name: 'Carlie',
    breed: 'Checkered Giant',
    microchip_number: 2133,
    age: 1,
    price: 292,
    description: 'Carlie is a very very smart rabbit.',
    image: 'https://loremflickr.com/1920/1080/animals?lock=13451',
    category_id: 3,
    seller_id: 12
  }
];


//generate 10 dogs
// for (let i = 0; i <= 11; i++) {
//     const dogAdData = {
//         name: faker.name.firstName(),
//         breed: faker.animal.dog(),
//         //age random from 0 to 10
//         age: randomAgeGenerator(10),
//         microchip_number: Math.floor(Math.random() * 9999),
//         //price random from 100 to 1000 in 2 decimal places
//         price: randomPriceGenerator(100),
//         image: faker.image.animals(1920, 1080, true),
//         category_id: 1,    //1 Dogs, 2 Cats, 3 Small Animals
//         seller_id: i + 1   //References user id
//     };
//     //Add an additional property, as dogAdData needs to be initialised before being able to call its properties
//     dogAdData.description = `${dogAdData.name} is a very very ${randomDescription().toLowerCase()} dog.`

//     //convert into array and sort alphabetically
//     //then convert back into an object
//     const dogAdDataSorted = Object.fromEntries(
//         Object.entries(dogAdData).sort(([,a],[,b]) => a-b)
//     );

//     petAdsArray.push(dogAdDataSorted);
// }
// //generate 10 cats
// for (let i = 0; i <= 11; i++) {
//     const catAdData = {
//         name: faker.name.firstName(),
//         breed: faker.animal.cat(),
//         //age random from 0 to 10
//         age: randomAgeGenerator(10),
//         microchip_number: Math.floor(Math.random() * 9999),
//         //price random from 100 to 1000 in 2 decimal places
//         price: randomPriceGenerator(100),
//         image: faker.image.cats(1920, 1080, true),
//         category_id: 2,    //1 Dogs, 2 Cats, 3 Small Animals
//         seller_id: i + 1    //References user id
//     };
//     //Add an additional property, as dogAdData needs to be initialised before being able to call its properties
//     catAdData.description = `${catAdData.name} is a very very ${randomDescription().toLowerCase()} cat.`

//     //convert into array and sort alphabetically
//     //then convert back into an object
//     const catAdDataSorted = Object.fromEntries(
//         Object.entries(catAdData).sort(([,a],[,b]) => a-b)
//     );

//     petAdsArray.push(catAdDataSorted);
// }
// //generate 10 rabbits
// for (let i = 0; i <= 11; i++) {
//     const smallAdData = {
//         name: faker.name.firstName(),
//         breed: faker.animal.rabbit(),
//         //age random from 0 to 10
//         microchip_number: Math.floor(Math.random() * 9999),
//         age: randomAgeGenerator(10),
//         //price random from 100 to 1000 in 2 decimal places
//         price: randomPriceGenerator(100),
//         image: faker.image.animals(1920, 1080, true),
//         category_id: 3,    //1 Dogs, 2 Cats, 3 Small Animals
//         seller_id: i + 1   //References user id
//     };
//     //Add an additional property, as dogAdData needs to be initialised before being able to call its properties
//     smallAdData.description = `${smallAdData.name} is a very very ${randomDescription().toLowerCase()} rabbit.`

//     // convert into array and sort alphabetically
//     // then convert back into an object
//     const smallAdDataSorted = Object.fromEntries(
//         Object.entries(smallAdData).sort(([,a],[,b]) => a-b)
//     );

//         petAdsArray.push(smallAdDataSorted);
// }



const seedPetAds = () => PetAds.bulkCreate(petAdsArray);

module.exports = seedPetAds;

// PetAds (id, name, breed, microchip_number, age, price, description, category_id, seller_id)