import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactNode } from "react";
interface Props {
  children?: ReactNode;
}
const CategoryCard = ({ children }: Props) => {
  return (
    <CategoryCardWrapper>
      <Link to={`/categoryList/${children}`}>
        <CategoryName>{children}</CategoryName>
      </Link>
    </CategoryCardWrapper>
  );
};

export default CategoryCard;

const CategoryCardWrapper = styled.div`
  min-height: 115px;
  background-color: rgba(var(--green-400-rgb), 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;
const CategoryName = styled.h3`
  text-align: center;
`;
