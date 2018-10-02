import React, { Component } from 'react';
import { HereMap, Circle } from 'rc-here-maps';
import Gist from 'react-gist';

class AddCircle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      center: {
        lat: 52,
        lng: 48,
      },
      radius: 10000,
      showCode: false,
    };
  }

  onShowCode = () => {
    this.setState({
      isShowCode: true,
    });
  };

  onCircleCenterChange = () => {
    this.setState({
      center: {
        lat: 52,
        lng: 30,
      },
    });
  };

  render() {
    return (
      <div className="section">
        <h2>Circle and changing its center dynamically</h2>
        <div className="section__content">
          <div className="section__content__left">
            Circle components lets you to create circle on the map. Circle component accepts center(lat, lng) with
            radius.
            <div className="button-wrapper">
              <button onClick={this.onShowCode}>Show Code</button>
            </div>
            {this.state.isShowCode && <Gist id="4bda1c03b025f62100a05fafe6f7d106" />}
          </div>
          <div className="section__content__map-container">
            <button onClick={this.onCircleCenterChange}>Change Circle Center</button>
            <HereMap appId="XezsJWhF8JfEucf5ImcN" appCode="HLIInfEMidCaPQtBbWyQuQ" useHTTPS center={this.state.center}>
              <Circle
                center={this.state.center}
                radius={this.state.radius}
                fillColor="rgba(90, 25, 25, 0.5)"
                strokeColor="rgba(90, 25, 25, 1)"
              />
            </HereMap>
          </div>
        </div>
      </div>
    );
  }
}

export default AddCircle;
