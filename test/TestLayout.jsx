import React from 'react';
import Resizable from '../lib/Resizable';
import ResizableBox from '../lib/ResizableBox';
import 'style!css!../css/styles.css';

export default class TestLayout extends React.Component {
  state = {width: 200, height: 200};

  onResize = (event, {element, size}) => {
    this.setState({width: size.width, height: size.height});
  };

  render() {
    return (
      <div style={{'height': '500px', 'position': 'relative'}}>
        <Resizable 
          style={{'position': 'absolute', 'bottom' : 0}}
          className="box"
          height={this.state.height}
          width={this.state.width}
          reverseResize={true}
          onResize={this.onResize}>
          <div className="box" style={{width: this.state.width + 'px', height: this.state.height + 'px'}}>
            <span className="text">Gonna make it resizable to North</span>
          </div>
        </Resizable>

      </div>
    );
  }
}
