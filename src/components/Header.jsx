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
  width: 100%;
  height: 86px;
  top:0;
  position: fixed;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
  padding: 0 92px;
  


  img {
    width: 165.52px;
    height: 32px;
  }
`;
