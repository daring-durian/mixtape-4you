const Sequelize = require('sequelize')
const db = require('../db')

const Song = db.define('song', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },

  artist: {
    type: Sequelize.STRING,
    allowNull: false
  },

  album: {
    type: Sequelize.STRING,
    allowNull: false
  },

  year: {
    type: Sequelize.STRING,
    allowNull: false
  },

  tags: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  },

  imageUrl: {
    type: Sequelize.TEXT,
    defaultValue:
      'https://www.thermaxglobal.com/wp-content/uploads/2020/05/image-not-found.jpg'
  },

  songUrl: {
    type: Sequelize.TEXT,
    defaultValue: 'https://google.com'
  }
})

module.exports = Song
