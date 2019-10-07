import React, { Component } from 'react';
import { getCategoryList } from './state/category';
import './Category.scss';
import CategoryItem from '../categoryItem/CategoryItem';
import {getProductImageLink} from '../../utils/imageUtils';

export default class Category extends Component {
  state = { 
    category: {},
    isLoading: true
  };
  componentDidMount() {
    const loadedData = getCategoryList();
    this.setState({ category: loadedData });

    this.setState({ isLoading: false });
  }

  render() {
    /*
     * You can get the category data from the category state:
     * const { category } = this.state;
     */
    if(this.state.isLoading) {
      return <p>loading...</p>
      
    }
    return (
      <ul>
        {this.state.category.products.map((item) => {
          return <CategoryItem 
                    key={item.id} 
                    name={item.name} 
                    imageUrl={getProductImageLink(item)} 
                    description={item.description}
                    price={item.cheapestPrice.amount}
                    rating={item.averageRating}
                    numberOfMerchants={item.numberOfMerchants}
                    rank={item.rank}
                  />
          
        })}
      </ul>
    );
  }
}
