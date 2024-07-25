const MovieController = require('../../controllers/MovieController');

const router = require('express').Router();

// get all movies
router.get('', MovieController.getMovies);

// add movie
router.post('', MovieController.addMovie);

// update movie
router.put('/:id', MovieController.updateMovie);

// update isWatched movie
router.patch('/:id/watch', MovieController.updateWatchStatusMovie);

// delete movie
router.delete('/:id', MovieController.deleteMovie);

module.exports = router;
