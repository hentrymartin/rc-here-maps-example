import React, { Component } from 'react';
import SimpleMap from './sections/SimpleMap/index';
import AddMarker from './sections/AddMarker';
import AddPolygon from './sections/AddPolygon';
import AddCircle from './sections/AddCircle';
import './app.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="header">RC HERE MAPS EXAMPLES</header>
        <div className="examples">
          {/* Simple map example */}
          <SimpleMap />
          {/* Add marker and change the location dynamically */}
          <AddMarker />
          {/* Add polygon and change the shape dynamically */}
          <AddPolygon />
          {/* Add circle and change the center dynamically */}
          <AddCircle />
        </div>
      </div>
    );
  }
}

export default App;
