import React from 'react';
import {NavLink} from 'react-router-dom';
import "./style/Home.css" 

const Home = () => {
  return (
    <div className="mainContainer">
      <div className="CategoriesContainer">
        <div className="Content">
            <img className="Image" src={require ('../../Pictures/formal1.jpg').default}/>
            <div className="Info">
                <h1 className="TitleHome">Formal Wear</h1>
                <NavLink  to={`/Products/${"formal"}`} > <button className="Button">SHOP NOW </button></NavLink>
            </div>
        </div>
        <div className="Content">
            <img className="Image" src={require('../../Pictures/casual1.jpg').default}/>
            <div className="Info">
                <h1 className="TitleHome">Casual Wear</h1>
                <NavLink  to={`/Products/${"casual"}`} > <button className="Button">SHOP NOW </button></NavLink>
            </div>
        </div>
        </div>
        <div className="CategoriesContainer">
        <div className="Content">
            <img className="Image" src={require('../../Pictures/knitwear.jpg').default}/>
            <div className="Info">
                <h1 className="TitleHome">Knit Wear</h1>
                <NavLink  to={`/Products/${"knit"}`} > <button className="Button">SHOP NOW </button></NavLink>
            </div>
        </div>
        <div className="Content">
            <img className="Image" src={require('../../Pictures/jackets.jpg').default}/>
            <div className="Info">
                <h1 className="TitleHome">Jackets</h1>
                <NavLink  to={`/Products/${"jacket"}`} > <button className="Button">SHOP NOW </button></NavLink>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
