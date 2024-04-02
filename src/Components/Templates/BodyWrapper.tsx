import Styled from "styled-components";
import { ReactNode } from "react";
interface Props {
  children?: ReactNode;
}
const BodyWrapper = ({ children }: Props) => {
  return <BodyContainer>{children}</BodyContainer>;
};

export default BodyWrapper;

const BodyContainer = Styled.div`
  max-width: 80%;
  margin: 0 auto;
`;
