var React = require('react');
var Router = require('react-router');
var routes = require('./routes');
var Api = require('./utils/api');




Router.run(routes, function(Handler){
    React.render(<Handler/>, document.querySelector('.container'));
});
