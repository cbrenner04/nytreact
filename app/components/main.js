var React = require('react');
var Search = require('./search');
var Top = require('./top');
var Saved = require('./saved');

var Main = React.createClass({
    render: function() {
        return (
            <div>
                <Search />
                <Top />
                <Saved />
            </div>
        )
    }
});

module.exports = Main;
