import React, { Component } from 'react'

import ProductItem from './ProductItem'

export default class ProductList extends Component {
  render() {
        let { arrShoe, handleClick } = this.props
    return (
          <div className="row">
              {
                  arrShoe.map((item, index) => (
                      <div key={`shoe${index}`} className="col-4">
                           <ProductItem handleClick= {handleClick} arrShoe={item}/>

                      </div>
                  ))

              }
           </div>
    )
  }
}
