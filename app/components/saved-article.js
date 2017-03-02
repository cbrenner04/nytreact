var React = require('react');
var SavedArticle = React.createClass({
    render: function() {
        return (
            <div>
                <p>{ this.props.article.title }</p>
            </div>
        )
    }
});

module.exports = SavedArticle;
