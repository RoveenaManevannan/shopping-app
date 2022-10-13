import React from 'react';
import {NavLink} from 'react-router-dom';
import {useParams} from 'react-router-dom';
import {formalProducts,casualProducts,knitProducts,jacketProducts} from '../../data';
import "./style/ProductPage.css"

const Products = () => {
  const category = useParams();
  var product = [];


  if(category.cat === "formal"){ 
  product = formalProducts;
  }
  else if(category.cat === "casual"){
    product = casualProducts;
  }
  else if(category.cat === "knit"){
    product = knitProducts;
  }
  else if(category.cat === "jacket"){
    product = jacketProducts;
  }
  const displayItem = (item)=>{
    return(
      <div className="Content">
        <NavLink to={`/Products/${item.id}/${item.cat}`}><img className="Image" src={item.img}/></NavLink>
      </div>
    )
  }

  return (
    <div className="Container">
      <div className="FilterContainer">
        <div className="Filter">
          <span className="FilterText">Filter Products:</span>
          <select className="Select">
            <option className="Option" disabled selected>
                Color
            </option>
            <option className="Option">White</option>
            <option className="Option">Black</option>
            <option className="Option">Red</option>
            <option className="Option">Blue</option>
            <option className="Option">Yellow</option>
            <option className="Option">Green</option>
            <option className="Option">Pink</option>
          </select>
          <select className="Select">
            <option className="Option" disabled selected>
                Size
            </option>
            <option className="Option">XS</option>
            <option className="Option">S</option>
            <option className="Option">M</option>
            <option className="Option">L</option>
            <option className="Option">XL</option>
            <option className="Option">XXL</option>
            <option className="Option">XXXL</option>
          </select>
        </div>
        <div className="Filter">
          <span className="FilterText">Sort Products:</span>
            <select className="Select">
                <option className="Option" selected> Newest</option>
                <option className="Option">Price (Asc) </option>
                <option className="Option">Price (Desc) </option>
            </select>
        </div>
      </div>
      <div className="ProductWrapper">
      <div className="ProductContainer">
      {product.map(displayItem)}
      </div>
      </div>
    </div>
  );
};

export default Products;
