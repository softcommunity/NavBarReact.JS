var React = require('react');

var NavItem = React.createClass({
  render: function(){
    return(
      <li className={this.props.isFirstOne == true ? "active": ""}><a>{this.props.name}</a></li>
    );
  }
});

module.exports = NavItem
