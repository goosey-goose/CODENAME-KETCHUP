const fetch = require('node-fetch');
const csv = require('csv-parser')
const fs = require('fs');
const db = require('./db/models'); //double check
// const { Show } = db;

const apiKey = `9ca2ac72`;

const results = [];

async function getShows(url) {
	try {
		// debugger
		const response = await fetch(url);
		const data = await response.json();
		console.log(data); //CONSOLE LOG
		await db.Show.create({
			title: data.Title,
			year: data.Year,
			rated: data.Rated,
			releaseDate: data.Released,
			runTime: data.Runtime,
			genre: data.Genre,
			director: data.Director,
			writer: data.Writer,
			actors: data.Actors,
			plot: data.Plot,
			language: data.Language,
			country: data.Country,
			awards: data.Awards,
			poster: data.Poster,
			imdbRating: data.imdbRating,
			imdbId: data.imdbID,
			totalSeasons: data.totalSeasons,
			ketchupAverageRating: data.imdbRating,
		});
	}
	catch (err) {
		console.log(err);  //CONSOLE LOG
	}
}

fs.createReadStream('series_urls.csv')
	.pipe(csv())
	.on('data', (data) => results.push(data))
	.on('end', async () => {
		for (let i = 0; i < results.length; i++) {
			await getShows(`http://www.omdbapi.com/?i=${results[i].imdb_id}&plot=full&apikey=${apiKey}`)
		};
	});
