

const numberOfFilms = +prompt ('Сколько фильмов вы уже посмотрели?', '');



const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


const a = prompt ('Один мз последних просмотренных фильмов', '');
const b = prompt ('На сколько оцените его?', '');
const c = prompt ('Один мз последних просмотренных фильмов', '');
const d = prompt ('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);