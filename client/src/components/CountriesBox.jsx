var React = require('react');
var CountriesSelect = require('./CountriesSelect.jsx');
var CountryDisplay = require('./CountryDisplay');

var CountriesBox = React.createClass({

  getInitialState: function(){
    return{ countries: [], currentCountry: null, currentCountryBorders: [] }
  },

  setCurrentCountry: function(country){
    this.setState({currentCountry: country});
    var borderCodes = country.borders;
    this.setState({currentCountryBorders: borderCodes});
    this.setBorderCountryObjects;
  },

  setBorderCountryObjects: function(){
    var allTheCountries = this.state.countries;
    var usefulArray = this.state.currentCountryBorders.map(function(code){
      allTheCountries.filter(function(country){
        country.alpha3Code === code
      })
    })
    console.log(usefulArray);
  },

  componentDidMount: function(){
    var url = "https://restcountries.eu/rest/v1/all"
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = function(){
      var data = JSON.parse(request.responseText);
      this.setState({countries: data})
    }.bind(this);
    request.send(null);
  },

  render: function(){
    return(
      <div>
        <h4> Countries Box </h4>
        <CountriesSelect  onSelectCountry={this.setCurrentCountry} countries={this.state.countries}></CountriesSelect>
        <CountryDisplay country={this.state.currentCountry}></CountryDisplay>
      </div>
    )
  }
})

module.exports = CountriesBox;