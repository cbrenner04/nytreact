var React = require('react');
var Comments = require('./comments');
var axios = require('axios');
var SavedArticle = React.createClass({
    getInitialState: function() {
      return {
        comments: []
      }
    },
    handleCommentChange: function(event) {
        var name = event.target.name;
        var obj = {};
        obj[name] = event.target.value;
        this.props.onNewCommentInput(obj);
    },
    handleCommentSubmit: function(event, articleId) {
        event.preventDefault();
        this.props.onNewCommentSubmit(articleId);
        console.log(this.state.comments)
        console.log(this.props.newComment)
        var comments = this.state.comments.push(this.props.newComment);
        console.log(comments);
        this.setState({ comments: comments });
    },
    componentDidMount: function() {
      axios.get('/api/articles/' + this.props.article._id + '/comments')
          .then(function(response) {
              this.setState({ comments: response.data });
          }.bind(this));
    },
    render: function() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading" role="tab"
                     id={"heading" + this.props.article._id }>
                    <h4 className="panel-title row">
                        <div className="col-sm-9">
                            <a role="button" data-toggle="collapse"
                               data-parent="#accordion"
                               href={"#collapse" + this.props.article._id }
                               aria-expanded="true"
                               aria-controls={ "collapse" + this.props.article._id }>
                                { this.props.article.title }
                            </a>
                            <small>
                                { " " + this.props.article.pub_date + " | " +
                                  this.props.article.original_byline + " | " +
                                  this.props.article.section_name }
                            </small>
                            <a href={ this.props.article.link }></a>
                        </div>
                        <div className="col-sm-3">
                            <button type="submit"
                                    form={ "hidden-form-" + this.props.article._id }
                                    className="btn btn-secondary btn-sm pull-right">
                                Delete
                            </button>
                            <form method="POST"
                                  action={ "/api/articles/" + this.props.article._id +
                                           "?_method=DELETE" }
                                  id={ "hidden-form-" + this.props.article._id }
                                  className="hidden-xs-up"></form>
                        </div>
                    </h4>
                </div>
                <div id={ "collapse" + this.props.article._id }
                     className="panel-collapse collapse" role="tabpanel"
                     aria-labelledby={ "heading" + this.props.article._id }>
                    <div className="panel-body">
                        <h5>Add a comment</h5>
                        <form className="form"
                              onSubmit={ function(event) {
                                  this.handleCommentSubmit(event, this.props.article._id)
                              }.bind(this) }>
                            <div className="form-group">
                                <textarea className="form-control" rows="3"
                                          name="newComment" onChange={ function(event) {
                                              this.handleCommentChange(event)
                                          }.bind(this) }
                                          value={ this.props.newComment }></textarea>
                                <button type="submit"
                                        className="btn btn-default">Comment</button>
                            </div>
                        </form>
                        <hr />
                        <Comments article={ this.props.article } comments={ this.state.comments } />
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = SavedArticle;
