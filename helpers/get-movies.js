const axios = require('axios');
const { writeFile } = require('node:fs/promises');

if (process.env.NODE_ENV !== "production") {
	require('dotenv').config();
}

const getMovies = async () => {
	const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';

	try {
		const { data } = await axios.get(url, {
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Bearer ${process.env.TMDB_TOKEN}`
			}
		});
		// console.log(data.results);
		return data.results;
	} catch (error) {
		console.log(error);
	}
};

const writeMovies = async () => {
	try {
		const movies = await getMovies();
		// console.log(movies);
		const mappedMovies = movies.map((movie) => {
			const { title, overview, poster_path, vote_average } = movie;
			return {
				title,
				overview,
				imageURL: `https://image.tmdb.org/t/p/w500` + poster_path,
				rating: +vote_average.toFixed(1)
			};
		});

		await writeFile(
			__dirname + '/../dummy_data/movies.json',
			JSON.stringify(mappedMovies, null, 2)
		);
	} catch (error) {
		console.log(error);
	}
};

writeMovies();
// getMovies()