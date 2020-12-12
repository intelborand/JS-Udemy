"use strict";

const numberOfFilms = +prompt ('Сколько фильмов вы уже посмотрели?', '');



const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};



for (let i = 0; i < 2; i++) {
    const a = prompt ('Один мз последних просмотренных фильмов', '');
    const b = prompt ('На сколько оцените его?', '');

    if (a != null && b != null && a !="" && b !="" && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('Error');
        i--;
    }
}

/*
let i = 0;
while (i < 2) {
    i++
    const a = prompt ('Один мз последних просмотренных фильмов', '');
    const b = prompt ('На сколько оцените его?', '');
    if (a != null && b != null && a !="" && b !="" && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('Error');
        i--;
    }
}
*/


/*
let i = 0;
do {
    i++
    const a = prompt ('Один мз последних просмотренных фильмов', '');
    const b = prompt ('На сколько оцените его?', '');
    if (a != null && b != null && a !="" && b !="" && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('Error');
        i--;
    }
}
while (i < 2);
*/

if (personalMovieDB.count < 10) {
    console.log('Просмотренно довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count >=30) {
    console.log('Вы классический киноман');
} else {
    console.log('Error');
}

console.log(personalMovieDB);