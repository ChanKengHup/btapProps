import React, { Component } from 'react'

export default class Modal extends Component {
    render() {
        let { item } = this.props
        return (
                <div>
                    
                    <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Chi tiết sản phẩm</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                     <img src={item.image} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{item.name}</h5>
                                            <p className="card-text">${item.price}</p>
                                            <span>{item.description}</span>
                                            <span>{item.shortDescription}</span>
                                            <span>{item.quantity}</span>
                                         </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Thoát</button>
                                    <button type="button" className="btn btn-primary">Thêm vào giỏ hàng</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

        )
    }
}
