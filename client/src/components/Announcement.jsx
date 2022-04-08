import styled from 'styled-components';

const Container = styled.div`
  height: 30px;
  background-color: beige;
  color: orange;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container>Check out our new styling products for summer!</Container>;
};

export default Announcement;
