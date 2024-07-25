const { Movie } = require('../models');

class MovieController {
  static async getMovies(req, res, next) {
    try {
      const movies = await Movie.findAll();

      res.status(200).json({
        message: 'Success Get All Movies',
        data: movies,
      });
    } catch (error) {
      next(error);
    }
  }

  static async addMovie(req, res, next) {
    try {
      const { title, overview, imageURL, rating, isWatched } = req.body;

      const newMovie = await Movie.create({
        title,
        overview,
        imageURL,
        rating,
        isWatched,
      });

      res.status(201).json({
        message: 'Success Add Movie',
        data: newMovie,
      });
    } catch (error) {
      next(error);
    }
  }

  static async updateMovie(req, res, next) {
    try {
      const { id } = req.params;
      const { title, overview, imageURL, rating, isWatched } = req.body;

      const movie = await Movie.findByPk(id);

      if (!movie) {
        throw {
          name: 'NotFound',
          message: 'Movie not found',
        };
      }

      await movie.update({
        title,
        overview,
        imageURL,
        rating,
        isWatched,
      });

      res.status(200).json({
        message: 'Success Update Movie',
      });
    } catch (error) {
      next(error);
    }
  }

  static async updateWatchStatusMovie(req, res, next) {
    try {
      const { id } = req.params;
      const { isWatched } = req.body;

      const movie = await Movie.findByPk(id);

      if (!movie) {
        throw {
          name: 'NotFound',
          message: 'Movie not found',
        };
      }

      await movie.update({
        isWatched,
      });

      res.status(200).json({
        message: 'Success Update Movie Watch Status',
      });
    } catch (error) {
      next(error);
    }
  }

  static async deleteMovie(req, res, next) {
    try {
      const { id } = req.params;

      const movie = await Movie.findByPk(id);

      if (!movie) {
        throw {
          name: 'NotFound',
          message: 'Movie not found',
        };
      }

      await movie.destroy();

      res.status(200).json({
        message: 'Success Delete Movie',
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = MovieController;
