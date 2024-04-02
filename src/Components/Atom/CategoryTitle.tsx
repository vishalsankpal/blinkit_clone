import styled from "styled-components";
import { ReactNode } from "react";
interface Props {
  children?: ReactNode;
}
const CategoryTitle = ({ children }: Props) => {
  return <Title>{children}</Title>;
};

export default CategoryTitle;

const Title = styled.h2`
  color: var(--base-dark);
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 32px;
  margin: 0;
`;
