import React from 'react'
import './Blockbuster.css'
import data_product from '../Assets/data'
import Item from '../Item/Item'

const Blockbuster = () => {
  return (
    <div>
        <div className='blockbuster'> 
        {/* <h1>Block</h1> */}
        <hr />
        <div className="blockbuster-item">
            {data_product.map((item, i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            })}
        </div>
    </div>
    </div>
  )
}

export default Blockbuster