var React = require('react');

var Search = React.createClass({
    getInitialState: function() {
        return {
            numberArticles: 5
        }
    },
    changeValue: function(event) {
        this.setState({
            numberArticles: event.value
        })
    },
    render: function() {
        return (
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h3 className="panel-title"><strong><i className="fa fa-list-alt"></i>   Search Parameters</strong></h3>
                </div>
                <div className="panel-body">
                    <form role="form" className="form">
                        <div className="form-group">
                            <label htmlFor="searchTerm">Search Term:</label>
                            <input type="text" className="form-control" id="searchTerm" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="numRecordsSelect">Number of Records to Retrieve:</label>
                            <select className="form-control" id="numRecordsSelect" onChange={ this.changeValue } value={ this.state.numberArticles }>
                                <option value="1">1</option>
                                <option value="5">5</option>
                                <option value="10">10</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="startYear">Start Year (Optional):</label>
                            <input type="text" className="form-control" id="startYear" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="endYear">End Year (Optional):</label>
                            <input type="text" className="form-control" id="endYear" />
                        </div>
                        <button type="submit" className="btn btn-default" id="runSearch"><i className="fa fa-search"></i> Search</button>
                        <button type="button" className="btn btn-default" id="clearAll"><i className="fa fa-trash"></i> Clear Results</button>
                    </form>
                </div>
            </div>
        )
    }
})

module.exports = Search;
