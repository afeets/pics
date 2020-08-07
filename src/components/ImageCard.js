// Show one of image by itself
import React from 'react';

class ImageCard extends React.Component {
  constructor(props){
    super(props);

    this.state = { spans: 0 };
    this.imageRef = React.createRef();
  }

  componentDidMount(){
      // event listener, waitign for successful download of image
      this.imageRef.current.addEventListener('load',this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;

    // calculate number of rows to span for image, one row = 10px
    const spans = Math.ceil(height / 10 );

    this.setState({ spans : spans });
  };

  render(){
    const {description,urls} = this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
