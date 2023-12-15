import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Box, Image } from "@chakra-ui/react";
import pizza from "../assets/images/pizza.avif";
import burger from "../assets/images/burger.jpeg";
import sandwich from "../assets/images/sandwich.webp";
import fri from "../assets/images/frii.jpeg";
import chicken from "../assets/images/chickenburger.jpeg";

export default class Carousel extends Component {
  render() {
    const settings = {
      arrows: true,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <Box mt={'50px'}>
        <Slider {...settings}>
          <Box width={"100%"} height={"500px"}>
            <Image borderRadius={'30px'} src={pizza} h={"100%"} w={"100%"} objectFit={"cover"} />
          </Box>
          <Box width={"100%"} height={"500px"}>
            <Image borderRadius={'30px'} src={burger} h={"100%"} w={"100%"} objectFit={"cover"} />
          </Box>
          <Box width={"100%"} height={"500px"}>
            <Image borderRadius={'30px'} src={sandwich} h={"100%"} w={"100%"} objectFit={"cover"} />
          </Box>
          <Box width={"100%"} height={"500px"}>
            <Image borderRadius={'30px'} src={fri} h={"100%"} w={"100%"} objectFit={"cover"} />
          </Box>
          <Box width={"100%"} height={"500px"}>
            <Image borderRadius={'30px'} src={chicken} h={"100%"} w={"100%"} objectFit={"cover"} />
          </Box>
        </Slider>
      </Box>
    );
  }
}
