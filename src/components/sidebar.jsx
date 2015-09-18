var React = require('react');
var Router = require('react-router');
var Display = require('./display');
var Link = Router.Link;

module.exports = React.createClass({
       render: function(){
           return  <div className="container-fluid">
               <div className="row">
                   <div className="col-sm-3 col-md-2 sidebar">

                       <ul className="nav nav-sidebar">
                         <li>  <Link to="/">Display 1</Link></li>
                         <li>  <Link to="display2">Display 2</Link></li>
                         <li>  <Link to="display3">Display 3</Link> </li>
                         <li>  <Link to="display4">Display 4</Link> </li>
                         <li>  <Link to="display5">Display 5</Link> </li>
                         <li>  <Link to="display6">Display 6</Link> </li>
                       </ul>

                   </div>
                </div>

              </div>
       }
  });

