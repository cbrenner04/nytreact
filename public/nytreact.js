var authKey = "64b9a5424efb4009a8774200660a48d9";
var queryTerm = "";
var numResults = 0;
var startYear = 0;
var endYear = 0;
var queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json" +
                   "?api-key=64b9a5424efb4009a8774200660a48d9&q=";
var articleCounter = 0;

// function searchQuery(numArticles, queryURL){
//     $.get(queryURL, function(NYTData) {
//         for (var i = 0; i < numArticles; i++) {
//             articleCounter++;
//             var topSection = $("<div>");
//             topSection.addClass('well');
//             topSection.attr('id', 'articleWell-' + articleCounter);
//             $('#topSection').append(topSection);

//             var title = NYTData.response.docs[i].headline.main;
//             var link = NYTData.response.docs[i].web_url;
//             var date = NYTData.response.docs[i].pub_date;

//             if(NYTData.response.docs[i].headline != "null") {
//                 $("#articleWell-"+ articleCounter).append(
//                     '<h3 class="articleHeadline"><span class="label label-primary">' +
//                     articleCounter + '</span><strong>   ' + title + "</strong></h3>"
//                 );
//             }

//             if(NYTData.response.docs[i].byline &&
//                 NYTData.response.docs[i].byline.hasOwnProperty("original")) {
//                 $("#articleWell-"+ articleCounter)
//                     .append('<h5>' + NYTData.response.docs[i].byline.original + "</h5>");
//             }

//             $("#articleWell-"+ articleCounter)
//                 .append('<h5>Section: ' + NYTData.response.docs[i].section_name + "</h5>")
//                 .append('<h5>' + date + "</h5>")
//                 .append("<a href='" + link + "'>" + link + "</a>")
//                 .append(
//                     '<button type="submit" form="hidden-form-' + articleCounter +
//                     '" class="btn btn-primary pull-right">Save</button>' +
//                     '<form action="/api/articles" method="POST" id="hidden-form-' + articleCounter +
//                     '" class="hidden-xs-up"><input type="hidden" name="title" value="' +
//                     title + '"></input><input type="hidden" name="link" value="' + link +
//                     '"></input><input type="hidden" name="origin" value="' + date +
//                     '"></input></form>'
//                 );
//         }
//     });
// }


$('#clearAll').on('click', function(){
    articleCounter = 0;
    $("#topSection").empty();
});
