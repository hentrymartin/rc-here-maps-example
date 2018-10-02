import React, { Component } from 'react';
import { HereMap, Marker } from 'rc-here-maps';
import Gist from 'react-gist';

class ChangeMarker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      position: {
        lat: 52,
        lng: 48,
      },
      center: {
        lat: 52,
        lng: 48,
      },
      showCode: false,
    };
  }

  onShowCode = () => {
    this.setState({
      isShowCode: true,
    });
  };

  onMarkerLocationChange = () => {
    this.setState({
      position: {
        lat: 52,
        lng: 30,
      },
      center: {
        lat: 52,
        lng: 30,
      },
    });
  };

  render() {
    return (
      <div className="section">
        <h2>Marker and changing its location</h2>
        <div className="section__content">
          <div className="section__content__left">
            Marker component lets you to create dom markers on the map. Marker component accepts lat and lng. Along with
            that, if draggable is true, then the marker will be draggable.
            <div className="button-wrapper">
              <button onClick={this.onShowCode}>Show Code</button>
            </div>
            {this.state.isShowCode && <Gist id="be77ab0b856a8cebb1578586a7e15a71" />}
          </div>
          <div className="section__content__map-container">
            <button onClick={this.onMarkerLocationChange}>Change Marker Location</button>
            <HereMap appId="XezsJWhF8JfEucf5ImcN" appCode="HLIInfEMidCaPQtBbWyQuQ" useHTTPS center={this.state.center}>
              <Marker lat={this.state.position.lat} lng={this.state.position.lng}>
                <div className="custom-marker">Sample marker</div>
              </Marker>
            </HereMap>
          </div>
        </div>
      </div>
    );
  }
}

export default ChangeMarker;
