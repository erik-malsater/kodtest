import React, { Component } from 'react';
import { getCategoryList } from './state/category';
import './Category.scss';
import CategoryItem from '../categoryItem/CategoryItem';

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

  /*{this.state.category.category.products.map((item) => {
    //return <CategoryItem name="name"/>
    return <p>hej</p>
  })}*/

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
          return <CategoryItem name={item.name}/>
        })}
      </ul>
    );
  }
}
