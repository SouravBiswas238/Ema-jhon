import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {

    const { img, name, seller, price, ratings } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">

                <p className='product-name'>{name}</p>
                <p className='product-name'><small> Price: $ {price}</small> </p>
                <p className='product-name'><small>Seller: {seller}</small></p>
                <p className='product-name'><small>Ratting: {ratings}</small></p>
            </div>
            <button onClick={() => props.handelAddToCart(props.product)} className='button-curt'>
                <p className='btn-text'>Add to curt</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;