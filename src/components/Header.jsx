import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Wrapper>
      <img src="/images/frame.svg" alt="" />
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header`
  width: 1512px;
  height: 86px;
  display: flex;
  flex-direction: row;
  position: fixed;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
  margin: 0 0 110px;
  padding: 0 200px 0 92px;

  img {
    width: 165.52px;
    height: 32px;
  }
`;
