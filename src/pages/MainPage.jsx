import React from "react";
import Header from "../components/Header";
import styled from "styled-components";

const MainImage = styled.img`
  width: 879px;
  height: 560px;
  margin: 110px 0 0 0px;
  padding: 29px 63px 49px 0px;
  border-radius: 33px;
`;

const LogoImage = styled.img`
  width: 384px;
  height: 164px;
  margin: 180px 109px 80px 120px;
  padding: 0 0 0.4px;
`;

const LoginContainer = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  position: relative;
  margin-left: 110px;
`;

const EmailLogin = styled.button`
  background-color: white;
  height: 45px;
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  border: none;
`;

const KakaoLogin = styled.button`
  background-color: #fee500;
  height: 45px;
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  border: none;
`;

const MainPage = () => {
  return (
    <Wrapper>
      <Header />
      <div className="body">
        <div className="left">
          <LogoImage
            src="../images/logoLeft.png"
            className="right-image"
            alt=""
          />
          {/* <div>
            <input type="text" />
            <button>입력</button>
          </div> */}
          <LoginContainer>
            <EmailLogin>이메일로 시작하기</EmailLogin>
            <KakaoLogin>카카오로 시작하기</KakaoLogin>
          </LoginContainer>
        </div>

        <div className="right">
          <MainImage
            src="../images/studiomain.png"
            className="right-image"
            alt=""
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default MainPage;

const Wrapper = styled.div`
  .body {
    display: flex;
    min-height: 100vh;
    background-color: #f8f6f2;
  }

  .left {
    display: flex;
    flex-direction: column;
  }
`;
