import React, { Fragment } from "react";
import { CgMouse } from "react-icons/all";
import "./Home.css";
import Product from "./Product.js";
import MetaData from "../layout/MetaData";

const product = {
  name: "Blue Shirt",
  images: [
    {
      url: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F7f%2F4e%2F7f4e7cb3944ccba9283c45052d77424dbc5bea81.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
    },
  ],
  price: "3000",
  id: "karan",
};

const Home = () => {
  return (
    <Fragment>
      <MetaData title="ECOMMERCE" />

      <div className="banner">
        <p>Welcome to Ecommerce</p>
        <h1>FIND AMAZING PRODUCTS BELOW</h1>

        <a href="#container">
          <button>
            Scroll <CgMouse />
          </button>
        </a>
      </div>

      <h2 className="homeHeading">Featured Products</h2>

      <div className="container" id="container">
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
      </div>
    </Fragment>
  );
};

export default Home;
