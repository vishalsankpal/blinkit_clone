import Styled from "styled-components";
const BodyWrapper = ({ children }) => {
  return <BodyContainer>{children}</BodyContainer>;
};

export default BodyWrapper;

const BodyContainer = Styled.div`
  max-width: 80%;
  margin: 0 auto;
`;
