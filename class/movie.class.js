/* creating class movie */
class Movie {
  constructor(title, length, genre) {
    this.title = title;
    this.duration = length;
    this.genre = genre;
  }

  getData() {
    var firstLetter = this.genre[0].toUpperCase();
    var lastLeter = this.genre[this.genre.length - 1].toUpperCase();
    return this.title + ", " + this.duration + "min, " + firstLetter + lastLeter;
  }

};

/* creating class Program */
class Program {
  constructor(date) {
    this.date = date;
    this.movieList = [];
  }
  addMovie(movie) {
    this.movieList.push(movie);
  };

  getData() {
    var sum = 0;
    this.movieList.forEach(function(element) {
      sum += element.duration;
    });
    return this.date + ", " + this.movieList.length + " movies, duration: " + sum;
  }

};

/* creating class festival */
class Festival {
  constructor() {
    this.movieList = [];
    this.programList = [];
  };
  
};