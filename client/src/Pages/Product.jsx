import React, { useContext, find } from "react";
import { useParams } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext'
import ProductDisplay from "../components/ProductDisplay/ProductDisplay";

const Product = () => {
    const {products} = useContext(ShopContext);
    const {productId} = useParams();
    const product = products.find((e)=>e.id === Number(productId));
    return (
      <div>
        <ProductDisplay product={product}/>
      </div>
    )
  }
  
  export default Product
  