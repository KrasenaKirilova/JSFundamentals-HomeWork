function solve(input) {
    let movies = [];

    input.forEach(line => {

        if (line.includes('addMovie ')) {
            let name = line.split('addMovie ')[1];
            movies.push({name});
        } else if (line.includes('directedBy')) {
            let [name, director] = line.split(' directedBy ');

            let currentMovie = movies.find(el => el.name === name);

            if (currentMovie) {
                currentMovie.director = director;
            }

        } else if (line.includes('onDate')) {
            let [name, date] = line.split(' onDate ');

            let currentMovie = movies.find(el => el.name === name);

            if (currentMovie) {
                currentMovie.date = date;
            }

        }
    });

    movies.forEach(currentMovie => {
        if (currentMovie.name && currentMovie.director && currentMovie.date) {
            console.log(JSON.stringify(currentMovie));
        }
    })
}


solve([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]);