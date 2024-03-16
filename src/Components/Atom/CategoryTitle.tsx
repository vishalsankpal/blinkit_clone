import styled from "styled-components";

const CategoryTitle = ({ children }) => {
  return <Title>{children}</Title>;
};

export default CategoryTitle;

const Title = styled.h2`
  color: var(--base-dark);
  font-size: 1.5rem;
  font-family: Okra-Medium;
  font-weight: 600;
  line-height: 32px;
  margin: 0;
`;
