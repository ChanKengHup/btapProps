import React, { Component } from 'react'

export default class ProductItem extends Component {
  render() {
    let { arrShoe, handleClick } = this.props
    return (
      <div className="card mb-5" style={{ width: '18rem' }}>
        <img src={arrShoe.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{arrShoe.name}</h5>
          <p className="card-text">${arrShoe.price}</p>
          <button onClick={() => {
            handleClick(arrShoe)
          }} type="button" className="btn btn-dark" data-toggle="modal" data-target="#exampleModal">
                 Add to cart
                    </button>
        </div>
      </div>

    )
  }
}
