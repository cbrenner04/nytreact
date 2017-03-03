var React = require('react');
var SavedArticle = require('./saved-article');

var Saved = React.createClass({
    render: function() {
        return (
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h3 className="panel-title">
                        <strong>
                            <i className="fa fa-file-text-o"></i> Saved Articles
                        </strong>
                    </h3>
                </div>
                <div className="panel-body" id="savedSection">
                    { this.props.savedArticles.map(function(article) {
                        return <SavedArticle article={ article } key={ article._id } />
                    }) }
                </div>
            </div>
        )
    }
});

module.exports = Saved;
