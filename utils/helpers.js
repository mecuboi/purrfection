const e = require('express');
const Handlebars = require('handlebars');

module.exports = {
  format_date: (date) => {
    // Format date as MM/DD/YYYY
    return date.toLocaleDateString();
  },
  format_time: (date) => {
    return date.toLocaleTimeString();
  },
  format_amount: (amount) => {
    // format large numbers with commas
    return parseInt(amount).toLocaleString();
  },
  get_emoji: () => {
    const randomNum = Math.random();

    // Return a random emoji
    if (randomNum > 0.7) {
      return `<span for="img" aria-label="lightbulb">💡</span>`;
    } else if (randomNum > 0.4) {
      return `<span for="img" aria-label="laptop">💻</span>`;
    } else {
      return `<span for="img" aria-label="gear">⚙️</span>`;
    }
  },

  category_name: (num) => {
    if (num === 1) {
      return 'Dogs 🐶'
    } else if (num === 2) {
      return 'Cats 🐈'
    } else if (num === 3) {
      return 'Small Animals 🐇'
    } else {
      return
    }
  },

  isUser: (profileUserId, reqUserId) => {
    if (reqUserId !== profileUserId) {
      return 
    } else {
    const gotoNext = (req, res, next) => {
      next();
    }
    gotoNext();
  }
  },


 ifEquals: (arg1, arg2, options) => {
    return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
},

}

