import React from "react";
import "./Home.css";
import Product from "./Product";

export default function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="1836126317"
            title="the lean startup"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={3}
          />

          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Kixer with K-beater, Dough Hook and Whisk, 5 litre Glass Bowl"
            price={239}
            image="https://images-na.ssl-images-amazon.com/images/I/61hNBQpikbL._AC_SL1000_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="547657643665"
            title="Smart Watch Thing"
            price={199.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
            rating={3}
          />

          <Product
            id="234459283428"
            title="Amazon Echo Speaker | smart speaker with Alexa"
            price={98.99}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?300x400_retinamobilex25"
            rating={5}
          />

          <Product
            id="329857538434"
            title="New Apple iPad Pro, Silver, 4th gen"
            price={598.99}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="67685766674"
            title="Samsung 49' Curved LED Gaming Monitor"
            price={1094.98}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}
