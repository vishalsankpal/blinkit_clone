import { useAppSelector, useAppDispatch } from "../../Hooks/hooks";
import { useEffect, useState } from "react";
import { getProducts } from "./productSlice";
import BodyWrapper from "../../Components/Templates/BodyWrapper";
import SliderCard from "../../Components/Organisms/SliderCard";
import CategoryTitle from "../../Components/Atom/CategoryTitle";
import SliderWrapper from "../../Components/Templates/SliderWrapper";
const Home = (): JSX.Element => {
  const [mobilesLaptop, setMobilesLaptop] = useState<[] | null>([]);
  const [ladies, setLadies] = useState<[] | null>([]);
  const [home, setHome] = useState<[] | null>([]);
  const products = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();
  console.log(products);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  useEffect(() => {
    console.log("product", products?.data?.products);
    setHome(
      products?.data?.products.filter(
        (item) =>
          item.category === "furniture" || item.category === "home-decoration"
      )
    );

    setLadies(
      products?.data?.products.filter(
        (item) =>
          item.category === "tops" ||
          item.category === "womens-dresses" ||
          item.category === "womens-shoes"
      )
    );
    setMobilesLaptop(
      products?.data?.products?.filter(
        (item) => item.category === "smartphones" || item.category === "laptops"
      )
    );
    console.log(
      products?.data?.products?.filter(
        (item) => item.category === "smartphones" || item.category === "laptops"
      )
    );
  }, [products]);

  return (
    <div>
      Home
      <div>Banner</div>
      <div>ads</div>
      <div>Categories</div>
      <BodyWrapper>
        <div className="flex justify-between py-4">
          <CategoryTitle>Mobiles & Laptops</CategoryTitle>
          <button>see all</button>
        </div>
        <div className="slider-container">
          <SliderWrapper>
            {mobilesLaptop?.map((item) => (
              <SliderCard key={item.id} {...item} />
            ))}
          </SliderWrapper>
        </div>
      </BodyWrapper>
      <BodyWrapper>
        <div className="flex justify-between py-4">
          <CategoryTitle>Womans</CategoryTitle>
          <button>see all</button>
        </div>
        <div className="slider-container">
          <SliderWrapper>
            {ladies?.map((item) => (
              <SliderCard key={item.id} {...item} />
            ))}
          </SliderWrapper>
        </div>
      </BodyWrapper>
      <BodyWrapper>
        <div className="flex justify-between py-4">
          <CategoryTitle>Home</CategoryTitle>
          <button>see all</button>
        </div>
        <div className="slider-container">
          <SliderWrapper>
            {home?.map((item) => (
              <SliderCard key={item.id} {...item} />
            ))}
          </SliderWrapper>
        </div>
      </BodyWrapper>
    </div>
  );
};

export default Home;
