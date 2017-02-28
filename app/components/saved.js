var React = require('react');

var Saved = React.createClass({
    render: function() {
        return (
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h3 className="panel-title"><strong><i className="fa fa-file-text-o"></i>   Saved Articles</strong></h3>
                </div>
                <div className="panel-body" id="savedSection"></div>
            </div>
        )
    }
});

module.exports = Saved;
