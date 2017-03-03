var React = require('react');
var TopArticle = React.createClass({
    render: function() {
        return(
            <div className='well' id={ 'articleWell-' + this.props.article.id }>
                <div className='row'>
                    <div className='col-xs-9'>
                        <h3 className='articleHeadline'>
                            <span className='label label-primary'>{ this.props.article.id + 1 }</span>
                            <strong> { this.props.article.title }</strong>
                        </h3>
                        <h5>{ this.props.article.originalByline }</h5>
                        <h5>Section: { this.props.article.sectionName }</h5>
                        <h5>{ this.props.article.date }</h5>
                        <a href={ this.props.article.link }></a>
                    </div>
                    <div className='col-xs-3'>
                        <br />
                        <button type='submit' form={ 'hidden-form-' + this.props.article.id }
                                className='btn btn-primary pull-right'>Save</button>
                        <form action='/api/articles' method='POST'
                              id={ 'hidden-form-' + this.props.article.id }
                              className='hidden-xs-up'>
                            <input type='hidden' name='title'
                                   value={ this.props.article.title }></input>
                            <input type='hidden' name='link'
                                   value={ this.props.article.link }></input>
                            <input type='hidden' name='origin'
                                   value={ this.props.article.date }></input>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = TopArticle;
