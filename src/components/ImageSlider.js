import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImageSlider() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slideToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    }
  return (
    <Carousel {...settings}>
        <Wrap>
            <a>
            <img src="/images/slider-scale.jpg" alt=""/>
            </a>
        </Wrap>
        <Wrap>
            <a>
            <img src="/images/slider-badag.jpg" alt="" />
            </a>
        </Wrap>
        <Wrap>
            <a>
            <img src="/images/slider-badging.jpg" alt="" />
            </a>
        </Wrap>
        <Wrap>
            <a>
            <img src="/images/slider-scales.jpg" alt="" />
            </a>
        </Wrap>
    </Carousel>
    
  )
}

export default ImageSlider

const Carousel = styled(Slider)`
    margin-top: 2px;

    ul li button {
        &:before {
            font-size: 10px;
            color: rgb(150, 160, 170);
        }
    }

    li.slick-active button:before {
            color: white;
    }
    .slick-list {
        overflow: visible;
    }

    button {
        z-index: 1;
    }
`

const Wrap = styled.div`
        cursor: pointer;
    img{
        border : 4px solid transparent;
        border-radius: 4px;
        width: 100%;
        height: 100%;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0 16px 10px -10px;

        &:hover{
            border: 3px solid rgb(240, 240, 240, 0.8);
        }
        transition-duration: 300ms;
    }

`