import Slider from "react-slick";
import { ReactNode } from "react";
interface Props {
  children?: ReactNode;
}
const SliderWrapper = ({ children }: Props) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6.2,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <span>Next</span>,
    prevArrow: <span>Prev</span>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings} className="pb-5">
      {children}
    </Slider>
  );
};

export default SliderWrapper;
