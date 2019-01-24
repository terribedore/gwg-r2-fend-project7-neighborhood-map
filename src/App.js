// node pkgs and files
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './App.css'

// components
import Map from './components/Map.js'

var foursquare = require('react-foursquare')({
  clientID: 'G04GDHOHNV44SCN05HBQDM0TACJMTYVR13OWDX4NJ3N3JUWL',
  clientSecret: 'KE10VXIQUO1L2FFLOKYWDHTZOKNU23RFRFNXEMYMX1E31QM4'
})

var params = {
  "ll": "29.424349,-98.491142",
  "query": 'coffee',
  "near": '',
  "limit": 10 // TODO: find a way to limit this by DISTANCE
}

class App extends Component {
  constructor(props) {
   super(props)
   this.state = {
     items: []
   }
 }

  componentDidMount() {
    foursquare.venues.getVenues(params)
      .then(res=> {
        this.setState({ items: res.response.venues });
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1 className="App-title">Independent Coffeehouses</h1>
        <h5 className="Add-desc">(Coffee that isn't Starbucks!)</h5>
        </header>
        <Map/>
        <div>Items:</div>
        { this.state.items.map(item=> { return <div key={item.id}>{item.name}</div>}) }
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

export default App