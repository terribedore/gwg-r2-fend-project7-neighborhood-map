import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './App.css'
import Map from './components/Map.js'



var foursquare = require('react-foursquare')({
  clientID: 'G04GDHOHNV44SCN05HBQDM0TACJMTYVR13OWDX4NJ3N3JUWL',
  clientSecret: 'KE10VXIQUO1L2FFLOKYWDHTZOKNU23RFRFNXEMYMX1E31QM4'
});

var params = {
  "ll": "29.424349, -98.491142",
  "query": '',
  "limit": 10
};

export default class FoursquareDemo extends Component {

  constructor(props) {
     super(props);
     this.state = {
       items: []
     };
   }

  componentDidMount() {
    foursquare.venues.getVenues(params)
      .then(res=> {
        this.setState({ items: res.response.venues });
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1 className="App-title">Frugal Date Ideas</h1>
        <h5 className="App-desc">Free or Cheap Places to be with Your Honey.</h5>
        </header>
        <Map/>
            <div>Items:</div>
            { this.state.items.map(item=> { return <div key={item.id}>{item.name}</div>}) }
      </div>
  )
  }
}

ReactDOM.render(
  <FoursquareDemo />,
  document.getElementById('root')
);