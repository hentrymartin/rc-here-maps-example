import React, { Component } from 'react';
import { HereMap, Polygon } from 'rc-here-maps';
import Gist from 'react-gist';

class AddPolygon extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataPoints: [28.7, 77.1, 100, 19.07, 72.87, 100, 13.08, 80.27, 100],
      center: {
        lat: 19.2,
        lng: 77.1,
      },
      showCode: false,
      zoom: 4,
    };
  }

  onShowCode = () => {
    this.setState({
      isShowCode: true,
    });
  };

  onPolygonShapeChange = () => {
    this.setState({
      dataPoints: [28.7, 77.1, 100, 19.07, 72.87, 100, 12.97, 77.59, 100],
    });
  };

  render() {
    return (
      <div className="section">
        <h2>Polygon and changing its shape dynamically</h2>
        <div className="section__content">
          <div className="section__content__left">
            Polygons components lets you to create polygon on the map. Polygon component accepts dataPoints which should
            be like this [12, 9, 100, 10, 2, 100]. In which, 12 represents the lat, 9 represents the lng and 100
            represents the altitude.
            <div className="button-wrapper">
              <button onClick={this.onShowCode}>Show Code</button>
            </div>
            {this.state.isShowCode && <Gist id="60c7fda90845c269728d613e4f6ab5b5" />}
          </div>
          <div className="section__content__map-container">
            <button onClick={this.onPolygonShapeChange}>Change Polygon Shape</button>
            <HereMap
              appId="XezsJWhF8JfEucf5ImcN"
              appCode="HLIInfEMidCaPQtBbWyQuQ"
              useHTTPS
              center={this.state.center}
              zoom={this.state.zoom}
            >
              <Polygon dataPoints={this.state.dataPoints} />
            </HereMap>
          </div>
        </div>
      </div>
    );
  }
}

export default AddPolygon;
