import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Review.css';

function Review() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,  
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true, 
    centerPadding: '0', 
  };

  return (
    <div className="review-section">
      <div className="review-header">
        <p>Testimonial</p>
        <h1>Happy Customers</h1>
      </div>
      <div className="review-container">
        <Slider {...settings}>
          <div className="review">
            <p>
              I was literally searching for a long-lasting perfume for my brother which could stay longer than normal perfumes available in the market.
              The product comes at a very reasonable price. The perfume is long-lasting, which gives good vibes whenever you are using it.
              Its fragrance is really amazing.
            </p>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <div>
              <img
                src="https://ramsonsperfumes.com/cdn/shop/files/RainDrops-Post-03_300x.jpg?v=1684394282"
                alt="Customer"
              />
            </div>
            <h3>Suman D.</h3>
          </div>
          <div className="review">
            <p>
              I was literally searching for a long-lasting perfume for my brother which could stay longer than normal perfumes available in the market.
              The product comes at a very reasonable price. The perfume is long-lasting, which gives good vibes whenever you are using it.
              Its fragrance is really amazing.
            </p>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <div>
              <img
                src="https://ramsonsperfumes.com/cdn/shop/files/RainDrops-Post-03_300x.jpg?v=1684394282"
                alt="Customer"
              />
            </div>
            <h3>Suman D.</h3>
          </div>
          <div className="review">
            <p>
              I was literally searching for a long-lasting perfume for my brother which could stay longer than normal perfumes available in the market.
              The product comes at a very reasonable price. The perfume is long-lasting, which gives good vibes whenever you are using it.
              Its fragrance is really amazing.
            </p>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <div>
              <img
                src="https://ramsonsperfumes.com/cdn/shop/files/RainDrops-Post-03_300x.jpg?v=1684394282"
                alt="Customer"
              />
            </div>
            <h3>Suman D.</h3>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Review;
