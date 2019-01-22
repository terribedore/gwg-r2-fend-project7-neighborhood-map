import React, { Component } from 'react'
import ReactDOM from 'react-dom'

var foursquare = require('react-foursquare')({
  clientID: 'G04GDHOHNV44SCN05HBQDM0TACJMTYVR13OWDX4NJ3N3JUWL',
  clientSecret: 'KE10VXIQUO1L2FFLOKYWDHTZOKNU23RFRFNXEMYMX1E31QM4'
});

var params = {
  "ll": "37.7749,-122.4194",
  "query": 'Blue Bottle'
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
    <div>
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