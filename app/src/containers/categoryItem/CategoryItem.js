import React, { Component } from 'react';
import '../../utils/imageUtils';

export default class CategoryItem extends Component {

  render() {
    return(
      <li>
        <img src={this.props.imageUrl}/>
        {this.props.name}
        {this.props.description}
        {this.props.price} kr
        {this.props.rating}
        {this.props.numberOfMerchants}
        {this.props.rank}
        <button>Jämför pris</button>
      </li>
    );
  }
}