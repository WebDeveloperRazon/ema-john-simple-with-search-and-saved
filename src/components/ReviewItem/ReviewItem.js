import { Button } from 'react-bootstrap';
import React from 'react';
import './ReviewItem.css'

const ReviewItem = (props) => {
    const {name , price , quantity , img , key} = props.product ;
    const {handleRemove} = props ;
    return (
        <div className="pro">
            <img src={img} alt="" />
          <h4 className="product-name">{name}</h4>
          <p> price : {price}</p>  
          <p> Quantity : {quantity}</p>
          <Button variant="danger" onClick ={()=>handleRemove(key)} className="btn-primary">remove</Button>
        </div>
    );
};

export default ReviewItem;