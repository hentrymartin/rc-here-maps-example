import React, { PureComponent } from 'react';
import { HereMap } from 'rc-here-maps';
import Gist from 'react-gist';
import './SimpleMap.css';

class SimpleMap extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isShowCode: false,
    };
  }

  onShowCode = () => {
    this.setState({
      isShowCode: true,
    });
  };

  render() {
    return (
      <div className="simple-map section">
        <h2>Adding simple map</h2>
        <div className="section__content">
          <div className="section__content__left">
            Before adding the map, you should get the app id from here{' '}
            <a href="https://developer.here.com/develop/javascript-api" target="_blank">
              map developer console
            </a>
            .
            <div className="button-wrapper">
              <button onClick={this.onShowCode}>Show Code</button>
            </div>
            {this.state.isShowCode && <Gist id="e936fd1d8d9c3ac418f8aff72ca47df9" />}
          </div>
          <div className="section__content__map-container">
            <HereMap appId="XezsJWhF8JfEucf5ImcN" appCode="HLIInfEMidCaPQtBbWyQuQ" useHTTPS />
          </div>
        </div>
      </div>
    );
  }
}

export default SimpleMap;
