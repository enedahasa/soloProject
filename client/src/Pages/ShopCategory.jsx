import React, { useContext, useState, useEffect } from "react";
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../components/Assets/dropdown_icon.png';
import Item from "../components/Item/Item";



const ShopCategory = (props) => {
    const [allproducts, setAllProducts] = useState([]);

    const fetchInfo = () => { 
        fetch('http://localhost:8000/allproducts') 
                .then((res) => res.json()) 
                .then((data) => setAllProducts(data))
        }
    
        useEffect(() => {
          fetchInfo();
        }, [])

    return (
        <div className="shop-category">
            <div className="shopcategory-indexSort">
                <p>
                    <span>Showing 1-12</span> out of 30 products
                </p>
                <div className="shopcategory-sort">
                    Sort by <img src={dropdown_icon} alt="" />
                </div>
            </div>
            <div className="shopcategory-products">
                {allproducts.map((item,i) => {
                    if (props.category===item.category){
                      return <Item key={i} id={item.id} name={item.name} image={item.image} price={item.price} />  
                    }
                    else{
                        return null;
                    }
                })}
            </div>
        </div>
    )
}

export default ShopCategory;