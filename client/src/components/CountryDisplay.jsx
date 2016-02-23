var React = require('react');
var CountryDisplay = React.createClass({

  render: function(){
    if (this.props.country === null) {
      return(
        <div>
          <h2>please select a country</h2>
        </div>
      )
    }else{

    

      return(
        <div>
          <h1>{this.props.country.name}</h1>
          <h2>capital city: {this.props.country.capital}</h2>
          <h2>population: {this.props.country.population}</h2>


        </div>
      )
    }
  }
})

module.exports = CountryDisplay;