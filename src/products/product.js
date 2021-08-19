import React, { Component } from 'react'
import '../assets/product.css';
import heartStroke from '../assets/images/heartStroke.png';
import heartSolid from '../assets/images/heartSolid.png';

export default class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            like: false,
        }
    }
    handleCLick = () => {
        this.setState({ like: !this.state.like })
    }
    render() {
        const jacket = 'https://vulcano.vn/images/products/2020/10/29/original/ao-jacket-0612-1603940407.jpg'
        return (
            <div className="wrap-content">
                <h2 id='title'>Men Cotton Jacket</h2>
                <img id='prodImg' src={jacket} />
                <h3 id='price'>55.99 $</h3>
                <button id='btnBuy'>Buy</button>
                <img onClick={this.handleCLick} id='heartLike' src={this.state.like ? heartSolid : heartStroke} />
            </div>
        );
    }
}