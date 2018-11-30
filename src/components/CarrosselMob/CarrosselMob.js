import React , { Component } from 'react'
import ReactDOM from "react-dom";
import Slider from "react-slick";
import banner4 from './banner4.jpg'

import './CarrosselMob.css'


class CarrosselMob extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 10000,
      cssEase: "linear"

    };
    return (
      <div className="container containermobile">
        <Slider {...settings}>
          <div>
            <img className="bannerCarrossel" src={banner4} alt="Treinamento Funcional e Crosstraining" />
          </div>
          <div>
            <img className="bannerCarrossel" src={banner4} alt="Treinamento Funcional e Crosstraining" />
          </div>
          <div>
            <img className="bannerCarrossel" src={banner4} alt="Treinamento Funcional e Crosstraining" />
          </div>
          <div>
            <img className="bannerCarrossel" src={banner4} alt="Treinamento Funcional e Crosstraining" />
          </div>
        </Slider>
      </div>

    );
  }
}

export default CarrosselMob
