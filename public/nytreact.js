var authKey = "64b9a5424efb4009a8774200660a48d9";
var queryTerm = "";
var numResults = 0;
var startYear = 0;
var endYear = 0;
var queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json" +
                   "?api-key=64b9a5424efb4009a8774200660a48d9&q=";
var articleCounter = 0;

$('#clearAll').on('click', function(){
    articleCounter = 0;
    $("#topSection").empty();
});
