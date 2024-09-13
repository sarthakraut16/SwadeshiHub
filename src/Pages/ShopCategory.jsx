import React, { useContext } from 'react'
import '../Pages/CSS/ShopCategory.css'
// import ShopCategory from './ShopCategory';
import { HomeContext } from '../Contexts/HomeContext';

const ShopCategory = () => {
  const {all_product} = useContext(HomeContext)
  return (
    <div className='shop-category'>
        
    </div>
  )
}

export default ShopCategory