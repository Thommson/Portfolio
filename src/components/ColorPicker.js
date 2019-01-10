import React, { Component } from 'react';

class ColorPicker extends Component {
  selectColor(){
    this.props.setColor(this.props.color.color)
  }
  render(){
    return(
      <div className="color-button">
        <button className={[this.props.color.color, "color-button-size"].join(' ')} onClick={this.selectColor.bind(this)}></button>
      </div>
    );
  }
}
export default ColorPicker;
