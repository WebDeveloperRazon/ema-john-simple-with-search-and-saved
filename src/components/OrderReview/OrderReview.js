import React from 'react';
import useProduct from './../../hooks/useProducts';
import useCart from './../../hooks/useCart';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import { clearTheCart, deleteFromDb } from '../../utilities/fakedb';
import { NavLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';


const OrderReview = () => {
    const [products ,setProducts] = useProduct() ;
    const [cart ,setCart] = useCart(products)   ;
    const handleRemove = (key) =>{
        
        const newCart = cart.filter(product =>product.key !== key) ;

        setCart(newCart);
        deleteFromDb(key)
    }
    const navigate = useNavigate() ;
    const handlePlaceOrder = () => {
        navigate("/placeOrder") ;
        setCart([]) ;
        clearTheCart()
    }
    return (
        <div className="shop-container">
         
            <div className="product-container">
            {
                cart.map(product =><ReviewItem product={product} key={product.key} handleRemove={handleRemove}></ReviewItem>)
            }
            </div>
            <div className="cart-container">
            <Cart cart={cart}>
               
                <Button onClick = {handlePlaceOrder} variant="success">Place Order</Button>
            </Cart>

            </div>
        </div>
    );
};

export default OrderReview;