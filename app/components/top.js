var React = require('react');

var Top = React.createClass({
    render: function() {
        return (
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h3 className="panel-title"><strong><i className="fa fa-table"></i>   Top Articles</strong></h3>
                </div>
                <div className="panel-body" id="topSection"></div>
            </div>
        )
    }
});

module.exports = Top;
