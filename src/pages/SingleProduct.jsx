import {formalProducts, casualProducts, knitProducts, jacketProducts} from '../../data';
import {NavLink} from 'react-router-dom';
import {useParams} from 'react-router-dom';
import "../IndividualProduct.css";
import {useState , useEffect} from 'react';

export const cartData = [];


function handleClick(item){
  cartData.push(item);
  localStorage.setItem("cartData" , JSON.stringify(cartData));
  var cart = JSON.parse(localStorage.getItem("cartData"));
  console.log(cart);
}
const SingleProduct = () => {
  
  const prod = useParams();
  var product = [];
 
  if(prod.cat === "formal"){ 
  product = formalProducts;
  }
  else if(prod.cat === "casual"){
    product = casualProducts;
  }
  else if(prod.cat === "knit"){
    product = knitProducts;
  }
  else if(prod.cat === "jacket"){
    product = jacketProducts;
  }


  const proDetail = product.filter(x => x.id == prod.id)
  const item = proDetail[0];

   return (
   <div className="prodContainer">
    <div className="ImageContainer"><img src={item.img}/></div>
    <div className="InfoContainer"><h1 className="proDesc">{item.desc}</h1>
    <h2 className="proPrice">{item.price}</h2>
    <button className="addCartBtn" onClick={()=>handleClick(item)}  >Add to cart</button>
    </div>
   </div>
  )
}

export default SingleProduct
