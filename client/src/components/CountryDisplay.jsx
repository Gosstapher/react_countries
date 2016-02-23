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

      if(this.props.country.borders.length === 0){
        var borders = <h2> This country has no bordering countries </h2>
      }else{
        var borders = this.props.country.borders.map(function(code, index){
        return <li key={index}>{code}</li>
        })
      }

      return(
        <div>
          <h1>{this.props.country.name}</h1>
          <h2>capital city: {this.props.country.capital}</h2>
          <h2>population: {this.props.country.population}</h2>
          <ul>{borders}</ul>

        </div>
      )
    }
  }
})

module.exports = CountryDisplay;