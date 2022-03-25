import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Curt from '../Curt/Curt';
import './Shop.css';


const Shop = () => {
    const [products, setProducts] = useState([]);
    const [curt, setCurt] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);


    const handelAddToCart = (product) => {
        let newCurt = [...curt, product];
        setCurt(newCurt);

    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handelAddToCart={handelAddToCart}
                    ></Product>)
                }

            </div>
            <div className="card-container">
                <Curt curt={curt} ></Curt>
            </div>
        </div>
    );
};

export default Shop;