import React, { Component } from 'react';
import "./ImageLibraryImage.css";

class ImageLibraryImage extends Component {
  render () {
    return (
      <div className="ImageLibraryImage">
        <img src={this.props.src} alt="designImage"/>
      </div>
    );
  }
}
export default ImageLibraryImage;