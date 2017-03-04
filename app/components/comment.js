var React = require('react');
var Comment = React.createClass({
  render: function() {
    return (
      <li className="list-group-item">
          <div className="row">
              <div className="col-sm-9">
                  <p className="list-group-item-text">
                      { this.props.comment.body }
                  </p>
              </div>
              <div className="col-sm-3">
                  <button type="submit"
                          form={ "hidden-form-" + this.props.comment._id }
                          className="btn btn-secondary btn-sm pull-right">
                      Delete
                  </button>
                  <form method="POST"
                        action={ "/api/articles/" + this.props.article._id +
                                 "/comments/" + this.props.comment._id +
                                 "?_method=DELETE" }
                        id={ "hidden-form-" + this.props.comment._id }
                        className="hidden-xs-up"></form>
              </div>
          </div>
      </li>
    )
  }
});

module.exports = Comment;
