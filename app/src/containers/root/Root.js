import React from 'react';
import Category from '../category/Category';
import './Root.scss';
import Header from '../header/Header';

export default function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="content">
          <Category />
        </div>
      </div>
    </div>
  );
}
