import React from "react";
import Header from "../components/Header";
import styled from "styled-components";
import Button from "../components/buttons/Button";
import { useState } from "react";
import EmailLoginForm from "../components/forms/EmailLoginForm";

const MainPage = () => {
  const [loginForm, setLoginForm] = useState("default");

  const handleEmailLoginClick = () => {
    setLoginForm("email");
  };

  const handleKaKaoLoginClick = () => {
    setLoginForm("kakao");
  };

  console.log({ loginForm });

  const someString = "someStringhello";
  return (
    <>
      <Header />
      <Wrapper>
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
            {loginForm === "default" && (
              <LoginContainer>
                <Button onClick={handleEmailLoginClick}>
                  이메일로 시작하기
                </Button>
                <Button
                  style={{ background: "#fee500" }}
                  onClick={handleKaKaoLoginClick}
                >
                  카카오로 시작하기
                </Button>
              </LoginContainer>
            )}
            {loginForm === "email" && <EmailLoginForm />}
            {loginForm === "kakao" && loginForm}
          </div>
          <div className="right">
            <MainImage
              src="../images/studiomain.png"
              className="right-image"
              alt="studiomain"
            />
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default MainPage;

const Wrapper = styled.div`
  .body {
    margin-top: 86px;
    display: flex;
    background-color: #f8f6f2;
  }

  .left {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 80px;
  }

  .right {
    flex: 1;
    overflow: hidden;
  }
`;

const MainImage = styled.img`
  width: 879px;
  height: 560px;
  padding: 29px 63px 49px 0px;
  border-radius: 33px;
`;

const LogoImage = styled.img`
  width: 384px;
  height: 164px;
`;

const LoginContainer = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
