var React = require('react');
var NavItem = require('./NavItem.jsx');

var menu = [{
	"name": "Home",
	"code": "123123"
}, {
	"name": "Contact",
	"code": "43535"
}, {
	"name": "Location",
	"code": "787867"
}];

var NavBar = React.createClass({
  render: function(){
    return(
      <div className="row">
        <nav className="navbar navbar-default" role="navigation">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
              <span className="sr-only">Desplegar navegacion</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand">EJEMPLO SOFT</a>
          </div>
          <div className="collapse navbar-collapse navbar-ex1-collapse">
            <ul className="nav navbar-nav">
              {menu.map(function(currentValue, index, array){
                return <NavItem
                          key={currentValue.code}
                          name={currentValue.name}
                          isFirstOne={index == 0 ? true: false}/>;
              })}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
});

module.exports = NavBar;
