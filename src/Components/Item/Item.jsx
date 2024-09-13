import React from 'react'
import "./Item.css"
import { Link } from 'react-router-dom'

const Item = (props) => {
  return (
    
    <div className='item'>
         <img src={props.image} alt="" />
        <p>{props.name}</p>
        <div className="box">
            <div className="item-prices">
                <div className="item-price-old">
                ₹ {props.old_price}
                </div>
                <div className="item-price-new">
                ₹ {props.new_price}
                </div>
            </div>
            <Link to = {`/product/${props.id}`} style={{textDecoration:'none'}}>
            <button className='buy-now'>Buy Now</button></Link>
           
        </div>
        
    </div>
  )
}

export default Item