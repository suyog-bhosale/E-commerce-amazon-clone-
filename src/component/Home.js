import React from "react";
import "./Home.css";
import Product from "./Product";

/**
 * @author
 * @function Home
 **/

const Home = (props) => {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://www.mobiledekho.com/wp-content/uploads/2018/01/952x501-3-5.jpg"
        alt="banner-img"
      />
      <div className="home-row">
        <Product
          id="as54fd12"
          title="the lean A blog (a truncation of  is a discussion or informational website published on the Wo"
          image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
          price={500}
          rating={5}
        />
        <Product
          id="asdewf23412"
          title="the lean A blog (a truncation of  is a discussion or informational website published on the Wo"
          image="https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
          price={500}
          rating={5}
        />
        <Product
          id="asd432f12"
          title="the lean A blog (a truncation of  is a discussion or informational website published on the Wo"
          image="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
          price={500}
          rating={5}
        />
      </div>
      <div className="home-row">
        <Product
          id="asd43sa2f12"
          title="the lean A blog (a truncation of  is a discussion or informational website published on the Wo"
          image="https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
          price={500}
          rating={5}
        />

        <Product
          id="asd43sa2f12"
          title="the lean A blog (a truncation of  is a discussion or informational website published on the Wo"
          image="https://images.unsplash.com/photo-1522273500616-6b4757e4c184?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
          price={500}
          rating={5}
        />

        <Product
          id="asd43sa2f12"
          title="the lean A blog (a truncation of  is a discussion or informational website published on the Wo"
          image="https://images.unsplash.com/photo-1578021046026-483fa99ffad2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
          price={500}
          rating={5}
        />
      </div>
    </div>
  );
};

export default Home;
