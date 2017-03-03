var React = require('react');
var Search = require('./search');
var Top = require('./top');
var Saved = require('./saved');
var axios = require('axios');

var queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json" +
                   "?api-key=64b9a5424efb4009a8774200660a48d9&q=";

var Main = React.createClass({
    getInitialState: function() {
        return {
            searchTerm: '',
            numberArticles: 5,
            startYear: '',
            endYear: '',
            topArticles: [],
            savedArticles: []
        }
    },

    componentDidMount: function() {
      axios.get('/api/articles/').then(function(response) {
        this.setState({ savedArticles: response.data });
      }.bind(this));
    },

    handleUserInput: function(obj) {
        this.setState(obj);
    },

    handleClear: function() {
        this.setState({ topArticles: [] });
    },

    handleFormSubmit: function() {
      var queryURL = queryURLBase + this.state.searchTerm;
      if (parseInt(this.state.startYear)) {
          queryURL = queryURL + "&begin_date=" + this.state.startYear + "0101";
      }

      if (parseInt(this.state.endYear)) {
          queryURL = queryURL + "&end_date=" + this.state.endYear + "0101";
      }

      axios.get(queryURL).then(function(NYTData) {
          this.addArticles(NYTData, this.state.numberArticles);
      }.bind(this));
    },

    addArticles: function(NYTData, numberOfArticles) {
        var articles = [];
        for (var i = 0; i < numberOfArticles; i++) {
            var article = NYTData.data.response.docs[i];
            var localObject = {};
            localObject.id = i;
            localObject.title = article.headline.main;
            localObject.link = article.web_url;
            localObject.date = article.pub_date;
            localObject.sectionName = article.section_name;

            if(article.byline && article.byline.hasOwnProperty("original")) {
                localObject.originalByline = article.byline.original;
            }
            articles.push(localObject)
        }
        this.setState({
            topArticles: articles
        });
    },

    render: function() {
        return (
            <div>
                <Search searchTerm={ this.state.searchTerm }
                        numberArticles={ this.state.numberArticles }
                        startYear={ this.state.startYear }
                        endYear={ this.state.endYear }
                        onUserInput={ function(object) {
                            this.handleUserInput(object)
                        }.bind(this) }
                        onFormSubmit={ function() {
                            this.handleFormSubmit()
                        }.bind(this) }
                        onClear={ function() {
                            this.handleClear()
                        }.bind(this) } />
                <Top topArticles={ this.state.topArticles } />
                <Saved savedArticles={ this.state.savedArticles } />
            </div>
        )
    }
});

module.exports = Main;
