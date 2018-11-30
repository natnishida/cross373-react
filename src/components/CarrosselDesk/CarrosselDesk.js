import React , { Component } from 'react'
import ReactDOM from "react-dom";
import Slider from "react-slick";
import banner1 from './banner1.png'
import banner2 from './banner2.png'
import banner3 from './banner3.png'
import './CarrosselDesk.css'


class CarrosselDesk extends Component {
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
      <div className="container containerdesktop">
        <Slider {...settings}>
          <div className="containerdesktop">
            <img className="bannerCarrossel containerdesktop" src={banner1} alt="Treinamento Funcional e Crosstraining" />
          </div>
          <div className="containerdesktop">
            <img className="bannerCarrossel containerdesktop" src={banner2} alt="Treinamento Funcional e Crosstraining" />
          </div>
          <div className="containerdesktop">
            <img className="bannerCarrossel containerdesktop" src={banner3} alt="Treinamento Funcional e Crosstraining" />
          </div>
          <div className="containerdesktop">
            <img className="bannerCarrossel containerdesktop" src={banner1} alt="Treinamento Funcional e Crosstraining" />
          </div>
        </Slider>
      </div>

    );
  }
}

export default CarrosselDesk
