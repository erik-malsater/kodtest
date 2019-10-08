import React, { Component } from 'react';
import './CategoryItem.scss';


export default class CategoryItem extends Component {

  render() {
    return(
      
      <div className="categoryItem">
        <div className="categoryItem__imageFrame"><img src={this.props.imageUrl} alt={this.props.name}/></div>
        <div className="categoryItem__infoContainer">
          <div className="categoryItem__container">
            <h3>{this.props.name}</h3>
            <div className="categoryItem__rankMobileContainer"><p>{this.props.rank}</p></div>
            <p className="categoryItem__description">{this.props.description}</p>
          </div>
          <div className="categoryItem__dataContainer">
            <div className="categoryItem__dataSubContainer"><p className="categoryItem__price categoryItem__data">fr. {this.props.price} kr</p></div>
            <div className="categoryItem__dataSubContainer"><p className="categoryItem__rating"><img src={require("../../images/star-icon.png")} alt="Star icon" className="categoryItem__starIcon"/>{this.props.rating}</p></div>
            <div className="categoryItem__dataSubContainer"><p className="categoryItem__numberOfMerchants">{this.props.numberOfMerchants} butiker</p></div>
            <div className="categoryItem__rankDesktopContainer categoryItem__dataSubContainer"><p>{this.props.rank}</p></div>
          </div>
          <button>Jämför pris</button>
        </div>
        
      </div>
    );
  }
}