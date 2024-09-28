let numberOfFilms = prompt('Сколько фильмов вы уже знаете?');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors:{},
    genres: [],
    privat: false,
};
let lastFilmQuestion1 = prompt('Один из последних просмотренных фильмов?');
let ratingQuestion1 = prompt('На сколько оцените его?');
let lastFilmQuestion2 = prompt('Один из последних просмотренных фильмов?');
let ratingQuestion2 = prompt('На сколько оцените его?');

personalMovieDB.movies[lastFilmQuestion1] = ratingQuestion1;
personalMovieDB.movies[lastFilmQuestion2] = ratingQuestion2;

console.log(personalMovieDB);
