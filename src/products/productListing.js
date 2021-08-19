import React, {Component} from 'react';
import Product from './product';
import '../assets/productListCSS.css'

export default class ProductListing extends Component{
    render(){
        let products = [<Product/>, <Product/>, <Product/>, <Product/>, <Product/>];
        return(
            <div id="prodList">
                {products}
            </div>
        );
    }
}