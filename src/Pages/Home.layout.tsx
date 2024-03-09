import Slider from "react-slick";
import { useAppSelector, useAppDispatch } from "../Hooks/hooks";
import { useEffect } from "react";
import { getProducts } from "../redux/products/productSlice";
const Home = (): JSX.Element => {
  const products = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();
  console.log(products);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6.2,
    slidesToScroll: 1,
    initialSlide: 0,
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
    <div>
      Home
      <div>Banner</div>
      <div>ads</div>
      <div>Categories</div>
      <div>
        products with category name
        <div>
          <h2>Dairy, Bread & Eggs</h2>
          <button>see all</button>
        </div>
        <div className="slider-container">
          <Slider {...settings}>
            <div>
              <img
                src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/368150a.jpg?ts=1690813704"
                alt="title"
              />
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Home;
