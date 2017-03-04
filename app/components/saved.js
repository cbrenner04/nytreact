var React = require('react');
var SavedArticle = require('./saved-article');

var Saved = React.createClass({
    handleNewCommentInput: function(object) {
        this.props.onCommentInput(object);
    },
    handleNewCommentSubmit: function(articleId) {
        this.props.onCommentSubmit(articleId);
    },

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
                        return <SavedArticle article={ article }
                                             key={ article._id }
                                             newComment={ this.props.newComment }
                                             onNewCommentInput={ function(object) {
                                                 this.handleNewCommentInput(object)
                                             }.bind(this) }
                                             onNewCommentSubmit={ function(articleId) {
                                                 this.handleNewCommentSubmit(articleId)
                                             }.bind(this) } />
                    }.bind(this)) }
                </div>
            </div>
        )
    }
});

module.exports = Saved;
