const { faker } = require('@faker-js/faker');
const bcrypt = require('bcrypt');


//decimal input in base 10 (eg, 100 is 2 decimal places, 10 is 1 decimal place, etc)
const randomPriceGenerator = (decimal) => {
  return Math.floor(Math.random() * (1000 * decimal - 1 * decimal) + 1 * decimal) / (1 * decimal);
};

const randomAgeGenerator = (range) => {
  return Math.floor(Math.random() * range);
};

const randomUserRole = () => {
  const randomNumber = Math.random();
  if (randomNumber > 0.5) {
    return 'buyer';
  } else {
    return 'seller';
  }
};

// let AuthUser = function(data) {
//     return google.login(data.username, data.password).then(token => { return token } )
//   }

//   let userToken = AuthUser(data)
//   console.log(userToken) // Promise { <pending> }

//   userToken.then(function(result) {
//      console.log(result) // "Some User token"
//   })
const randomPasswordGenerator = () => {
  function hash() {
    bcrypt.hash(faker.internet.password(15, true), 10)
      .then(result => {
        return result;
      });
  }

  const hashedPassword = hash();

  hashedPassword.then((result) => {
    return result;
  });
};

const randomDescription = () => {
  const descriptions = ['bubbly', 'active', 'shy', 'cunning', 'smart', 'clingy', 'loyal', 'calm', 'curious', 'playful'];

  //for each word, get 1st letter of the word,
  //uppercase it,
  //and join back from 2nd letter of the word
  const captalisedDescriptions = descriptions.map(des => des.charAt(0).toUpperCase() + des.slice(1));

  const randomIndex = Math.floor(Math.random() * descriptions.length);
  return captalisedDescriptions[randomIndex];
};

//TODO fix
// const num = [];
// for (let i = 0; i < 10; i++) {
//     num.push(i)
// }


// const uniqueNumGenerator = (num) => {
//     randomIndex = Math.floor(Math.random() * num.length)
//     initialRandomNum = num[randomIndex];
//     newNum = num.filter(nums => nums !== initialRandomNum)
// }

module.exports = { randomPriceGenerator, randomAgeGenerator, randomDescription, randomUserRole, randomPasswordGenerator };