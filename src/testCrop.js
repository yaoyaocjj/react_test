import React from 'react';
import { Cropper } from 'react-image-cropper';
import demo from './demo.jpg';

class TestCrop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: '',
      imageLoaded: false
    }
  }

  handleImageLoaded(state) {
    this.setState({
      [state + 'Loaded']: true
    });
  }

  handleClick(state) {
    let node = this.refs[state];
    this.setState({
      [state]: node.crop()
    });
  }

  handleChange(state, values) {
    console.log(state, values);
    this.setState({
      [state + 'Values']: values
    });
  }

  render() {
    return (
      <div>
        <h3>Default image crop</h3>
        <Cropper src={demo} ref="image"
                 onImgLoad={() => this.handleImageLoaded('image')}
                 onChange={values => this.handleChange('image', values)}
        />
        <br/>
        {this.state.imageLoaded ? <button onClick={() => this.handleClick('image')}>crop</button> : null}
        <h4>after crop</h4>
        {this.state.image ? <img src={this.state.image} alt=""/> : null}
      </div>
    )
  }
}

export default TestCrop;

