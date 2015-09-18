var React = require('react');
var Header = require('./components/header');
var Sidebar = require('./components/sidebar');
var RouteHandler = require('react-router').RouteHandler;


module.exports = React.createClass({
    render: function(){
        return <div className="fluid-container">
            <Header />
            <Sidebar />
              <div className="fluid-container display-area">
                    <RouteHandler />

              </div>
            </div>
    }
});