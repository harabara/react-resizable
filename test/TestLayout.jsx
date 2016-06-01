import React from 'react';
import Resizable from '../lib/Resizable';
import ResizableBox from '../lib/ResizableBox';
import 'style!css!../css/styles.css';

export default class TestLayout extends React.Component {
  state = {width: 200, height: 200};

  onClick = () => {
    this.setState({width: 200, height: 200});
  };

  onResize = (event, {element, size}) => {
    this.setState({width: size.width, height: size.height});
  };

  render() {
    return (
      <div>
        <button onClick={this.onClick} style={{'marginBottom': '10px'}}>Reset first element's width/height</button>
        <div style={{position: 'relative', float: 'right', width: '300px', height: '300px', backgroundColor: '#aaa' }}>
          <span>To be resizable to top, needt a parent container with position relative/absolute, and should be aligned to it's bottom. Lastly needs resizeToNorth={'{true}'}</span>
          <Resizable 
            style={{'position': 'absolute', 'bottom' : 0}}
            className="box"
            height={this.state.height}
            width={this.state.width}
            resizeToNorth={true}
            onResize={this.onResize}>
            <div className="box" style={{width: this.state.width + 'px', height: this.state.height + 'px'}}>
              <span className="text">Resizable to North</span>
            </div>
          </Resizable>
        </div>

        
        <ResizableBox className="box" width={200} height={200}>
          <span className="text">{"<ResizableBox>, same as above."}</span>
        </ResizableBox>
        <ResizableBox className="box" width={200} height={200} draggableOpts={{grid: [25, 25]}}>
          <span className="text">Resizable box that snaps to even intervals of 25px.</span>
        </ResizableBox>
        <ResizableBox className="box" width={200} height={200} minConstraints={[150, 150]} maxConstraints={[500, 300]}>
          <span className="text">Resizable box, starting at 200x200. Min size is 150x150, max is 500x300.</span>
        </ResizableBox>
        <ResizableBox className="box box3" width={200} height={200} minConstraints={[150, 150]} maxConstraints={[500, 300]}>
          <span className="text">Resizable box with a handle that only appears on hover.</span>
        </ResizableBox>
        <ResizableBox className="box" width={200} height={200} lockAspectRatio={true}>
          <span className="text">Resizable square with a locked aspect ratio.</span>
        </ResizableBox>
        <ResizableBox className="box" width={200} height={120} lockAspectRatio={true}>
          <span className="text">Resizable rectangle with a locked aspect ratio.</span>
        </ResizableBox>
      </div>
    );
  }
}