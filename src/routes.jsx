var React = require('react');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;



var Main = require('./main');
var Display2 = require('./components/Display2');

module.exports =
    (
        <Route name="Main" path="/" handler={require('./main')}>
            <DefaultRoute handler={require('./components/display')}/>
            <Route name="display2" handler={require('./components/display2')} />
            <Route name="display3" handler={require('./components/display3')} />
            <Route name="display4" handler={require('./components/display4')} />
            <Route name="display5" handler={require('./components/display5')} />
            <Route name="display6" handler={require('./components/display6')} />
        </Route>
    );