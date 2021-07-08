var festival = new Festival();

/*====================
  EVENT HANDLERS
==================== */

/* movie handlers */
var genreBtn = document.querySelector("#genre_select_btn");
var movieTitle = document.querySelector("#title");
var movieLength = document.querySelector("#lenght");
var movieGenre = document.querySelector("#genre_select");
var genre_err = document.querySelector("#genre_err");
var genre_list = document.querySelector("#genre_list");

/* program handlers */
var dateInput = document.querySelector("#date");
var program_err = document.querySelector("#program_err");
var program_select_btn = document.querySelector("#program_select_btn");
var program_list = document.querySelector("#program_list");

/* add movie to program handlers */
var movie_select = document.querySelector("#movie_select");
var program_select = document.querySelector("#program_select");
var movie_err = document.querySelector("#movie_err");
var add_movie_btn = document.querySelector("#add_movie_btn");


/*====================
  FUNCTIONS
==================== */

/* function for creating movie list  */
function createMovie(title, length, genre) {

  genre_err.textContent = "";

  var title = title.value;
  var length = parseInt(length.value);
  var genre = genre.value; 
  
  if(title !== "" && length !== "" && genre !== "") {

    if(isFinite(length)) {

      var movie = new Movie(title, length, genre);

      var li = document.createElement("li");
      li.setAttribute("id", index);
      li.textContent = movie.getData();
      genre_list.appendChild(li);

      festival.movieList.push(movie);
      var index = festival.movieList.length - 1;

      var option = document.createElement("option");
      option.setAttribute("value", index);
      option.textContent = festival.movieList[index].getData()
      movie_select.appendChild(option);

      movieTitle.value = "";
      movieGenre.value = "";
      movieLength.value = "";

    } else {
     genre_err.textContent = "Movie length must be a number!!";
    }

  } else {
    genre_err.textContent = "All fields are required";
  }
}


/* function for creating program list  */
function createProgram(date) {

  program_err.textContent = "";
  var programDate = new Date(date.value);
  
  if(programDate.getTime() >= Date.now()) {

    programDate = programDate.getDate() + "." + (programDate.getMonth() + 1) + "." + programDate.getFullYear();

    var program = new Program (programDate);
    festival.programList.push(program);
    var index = festival.programList.length - 1;

    var li = document.createElement("li");
    li.setAttribute("id", "movie-item-" + index);
    li.textContent = programDate + ", Program to be announced";
    program_list.appendChild(li);

    var option = document.createElement("option");
    option.setAttribute("value", index);
    option.setAttribute("id", "program-item-" + index);
    option.textContent = programDate + ", Program to be announced";
    program_select.appendChild(option);


  } else {
    program_err.textContent = "Date must be in present or future!!!";
  }
}

/* function for adding movies to programs */
function addMovieToProgram(movie, program) {

  movie_err.textContent = "";
  
  if(movie.value !== "" && program.value !== "") {

    var movieValue = movie.value;
    var programValue = program.value;

    var movie = festival.movieList[movieValue]
    var program = festival.programList[programValue];
    program.addMovie(movie);


    var liUpdate = document.querySelector("#movie-item-" + programValue);
    var optionUpdate = document.querySelector("#program-item-" + programValue);
    liUpdate.textContent = program.getData();
    optionUpdate.textContent = program.getData();

    program_select.value = "";
    movie_select.value = "";
      
  } else {
    movie_err.textContent = "All fields are required!";
  }
}

/*====================
  EVENT LISTENERS
==================== */

/* event listener on users click  */
genreBtn.addEventListener("click", function () {
  createMovie(movieTitle, movieLength, movieGenre);
});

program_select_btn.addEventListener("click", function () {
  createProgram(dateInput);
});

add_movie_btn.addEventListener("click", function () {
  addMovieToProgram(movie_select, program_select);
});
