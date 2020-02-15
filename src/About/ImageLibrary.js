import React, { Component } from 'react';
import "./ImageLibrary.css"
import ImageLibraryImage from "./ImageLibraryImage"
import ImageSource from "./Web-Developer.jpg"

class ImageLibrary extends Component {
  render () {
    return (
      <div className="ImageLibrary">
        <ImageLibraryImage src={ImageSource}/>
        <ImageLibraryImage src={ImageSource}/>
        <ImageLibraryImage src={ImageSource}/>
        <ImageLibraryImage src={ImageSource}/>
        <ImageLibraryImage src={ImageSource}/>
        <ImageLibraryImage src={ImageSource}/>
        <ImageLibraryImage src={ImageSource}/>
        <ImageLibraryImage src={ImageSource}/>
      </div>
    );
  }
}

export default ImageLibrary;