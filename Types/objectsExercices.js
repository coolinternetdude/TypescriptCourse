// Make sure that "originalTitle" is optional and "title" is readonly
var dune = {
    title: "Dune",
    originalTitle: "Dune Part One",
    director: "Denis Villeneuve",
    releaseYear: 2021,
    boxOffice: {
        budget: 165000000,
        grossUs: 213312098,
        grossWorldwide: 400671789
    }
};
var cats = {
    title: "Cats",
    director: "Tom Hooper",
    releaseYear: 2019,
    boxOffice: {
        budget: 95000000,
        grossUs: 879938880,
        grossWorldwide: 73833348
    }
};
// Write a function called getProfit that accepts a single Movie object
// It should return the movie's worldwide gross minus its budget
function getProfit(movie) {
    return movie.boxOffice.grossWorldwide - movie.boxOffice.budget;
}
// For example...
// getProfit(cats) => -21166652
console.log(getProfit(dune));
