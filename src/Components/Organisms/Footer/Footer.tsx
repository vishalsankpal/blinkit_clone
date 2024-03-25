import styled from "styled-components";
import BodyWrapper from "../../Templates/BodyWrapper";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../Hooks/hooks";
import { getCategoryList } from "../../../Pages/Home/CategoryRedux/categoryListSlice";

const Footer = () => {
  const categoryList = useAppSelector((state) => state.categoryList.data);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getCategoryList());
  }, [dispatch]);
  return (
    <footer className="py-8">
      <BodyWrapper>
        <FooterContainer>
          <div>
            <FooterTitle>Useful Links</FooterTitle>
            <ListContainer>
              <ul>
                <li>
                  <a href="">About</a>
                </li>
                <li>
                  <a href="">Careers</a>
                </li>
                <li>
                  <a href="">Blogs</a>
                </li>
                <li>
                  <a href="">Press</a>
                </li>
                <li>
                  <a href="">Lead</a>
                </li>
                <li>
                  <a href="">Value</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="">Privacy</a>
                </li>
                <li>
                  <a href="">Terms</a>
                </li>
                <li>
                  <a href="">FAQs</a>
                </li>
                <li>
                  <a href="">Security</a>
                </li>
                <li>
                  <a href="">Mobile</a>
                </li>
                <li>
                  <a href="">Contact</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="">Partner</a>
                </li>
                <li>
                  <a href="">Express</a>
                </li>
                <li>
                  <a href="">Seller</a>
                </li>
                <li>
                  <a href="">Warehouse</a>
                </li>
                <li>
                  <a href="">Deliver</a>
                </li>
              </ul>
            </ListContainer>
          </div>
          <div>
            <FooterTitle>Categories</FooterTitle>
            <CategoryListContainer>
              {categoryList?.map((item, i) => (
                <li key={i}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </CategoryListContainer>
          </div>
        </FooterContainer>
      </BodyWrapper>
    </footer>
  );
};

export default Footer;
const FooterContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
`;

const FooterTitle = styled.h4`
  font-weight: 600;
  color: rgb(0, 0, 0);
  font-size: 18px;
  margin: 24px 0px;
`;
const ListContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  column-gap: 24px;
  ul {
    list-style: none;
    padding: 0px;
    display: flex;
    flex-direction: column;
    row-gap: 12px;
  }
  li {
    display: inline-block;
    font-size: 14px;
  }
  li > * {
    font-size: 14px;
    color: rgb(102, 102, 102);
  }
`;
const CategoryListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: 12px;
  li {
    flex: 0 0 25%;
    a {
      font-size: 14px;
      color: rgb(102, 102, 102);
      text-transform: capitalize;
    }
  }
`;
