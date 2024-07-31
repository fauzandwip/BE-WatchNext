'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    static associate(models) {}
  }

  Movie.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: 'Title is required' },
          notEmpty: { msg: 'Title is required' },
        },
      },
      overview: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notNull: { msg: 'Overview is required' },
          notEmpty: { msg: 'Overview is required' },
        },
      },
      imageURL: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: 'Image URL is required' },
          notEmpty: { msg: 'Image URL is required' },
        },
      },
      rating: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
          notNull: { msg: 'Rating is required' },
          notEmpty: { msg: 'Rating is required' },
        },
      },
      isWatched: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        validate: {
          notNull: { msg: 'Watch Status is required' },
          notEmpty: { msg: 'Watch Status is required' },
        },
      },
    },
    {
      sequelize,
      modelName: 'Movie',
    }
  );

  return Movie;
};
