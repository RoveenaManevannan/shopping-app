import {
  formalProducts,
  casualProducts,
  knitProducts,
  jacketProducts,
} from "../../data";
import { useParams } from "react-router-dom";
import "./style/ShoppingCart.css";
import { useState } from "react";
import { cartData } from "./SingleProduct";
import Popup from "./Popup"
const ShoppingCart = () => {
  const[isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
  var cost = 0.00;
    {cartData.map(({price}) =>{
      cost = (cost + price);
      
    })}

  var charge;
    if(cost < 50){
      charge =3.00;
    }
    else{
      charge = 0.00;
    }
var  total =  "£"+ (cost+charge).toFixed(2);


  if (cartData.length === 0) {
    return (
      <div className="mainDiv">
        <p> Cart is empty. </p>
      </div>
    );
  } else {
    return (
      <div className="mainDiv">
        {cartData.map((item, index) => (
          <div className="prodDiv" key={index}>
            <div className="imgdiv">
              <img src={item.img} />
            </div>
            <div className="infodiv">
              <h1>{item.desc}</h1>
              <h2>Price: £{item.price}</h2>
            </div>
          </div>
        ))}
        <div className="calculateDiv">
              <h1> Items in cart:<span>{cartData.length}</span></h1>
              <h1> Items Price  :<span> {cost.toFixed(2)}</span></h1>
              <h1> Shipping     :<span> {charge.toFixed(2)}</span></h1>
              <hr/>
              <h1> Total        :<span> {total}</span></h1>
              <button className="orderBtn" onClick={togglePopup}> Place Order </button>
        </div>     
        <div className="popupDiv">
              {isOpen && <Popup
      content={<>
        <p className="msg">Order Placed</p>
        <a href="/Home"><button> Close cart </button> </a>
      </>}
    />}
        
        </div>
      </div>
    );
  }
};
export default ShoppingCart;
