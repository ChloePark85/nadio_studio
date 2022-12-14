import React, { useState } from "react";
import Header from "../components/Header";
import styled from "styled-components";
import { Link } from "react-router-dom";
import arrowSrc from "../back.svg";
import playSrc from "../play.svg";

const Wrapper = styled.div`
  .body {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: #f8f6f2;
  }
`;

const Tips = styled.div`
  border: #b14c59 1px solid;
  height: 39px;
  top: 87px;
  background-color: #b14c59;
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const TipsText = styled.span`
  width: 563px;
  height: 26px;
  font-family: "NotoSansKR";
  font-size: 18px;
  padding-top: 6px;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: white;
`;

const DashbordContainer = styled.div`
  position: absolute;
  margin-left: 120px;
  display: flex;
  flex-direction: row;
`;

const DashbordLeft = styled.div`
  display: flex;
  margin-top: 200px;
  flex-direction: column;
  justify-content: flex-start;
`;

const TitleContainer = styled.div`
  height: 67px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 20px;
`;

const Arrow = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 20px;
  /* margin: 81px 12px 38px 120px; */
`;

const TitleInput = styled.span`
  font-size: 24px;
  color: black;
  font-weight: 700;
`;

const FontContainer = styled.div`
  height: 67px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 50px;
`;

const FontProfile = styled.div`
  width: 80px;
  height: 80px;
  background-color: #d9d9d9;
  border-radius: 50px;
  margin-right: 25px;
`;

const FontName = styled.span`
  font-family: NotoSansKR;
  font-size: 24px;
  font-weight: 500;
`;

const InputContainer = styled.div`
  height: 200px;
  padding: 10px;
  display: flex;
  margin-left: 80px;
  padding-right: 30px;
  flex-direction: column;
  align-items: left;
  row-gap: 100px;
  justify-content: flex-start;
`;

const InputText = styled.div`
  font-size: 18px;
`;

const InputLength = styled.div`
  font-size: 15px;
`;

const PlaybarContainer = styled.div`
  width: 100%;
  position: fixed;
  height: 100px;
  display: flex;
  flex-direction: row;
  bottom: 0;
  justify-content: space-between;
  border-top: #dddddd 1px solid;
  align-items: center;
  padding-left: 80px;
  padding-right: 80px;
`;

const PlayButton = styled.img`
  width: 43px;
  height: 50px;
  /* margin: 24.5px 13px 0 120px; */
`;

const ProgressBar = styled.div`
  width: 651px;
  height: 3.5px;
  opacity: 30%;
  background-color: #cbced7;
`;
const Timelaps = styled.div`
  font-size: 18px;
`;

const Buttons = styled.div`
  width: 360px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-right: 60px;
`;

const DownloadButton = styled.button`
  width: 132px;
  height: 50px;
  background-color: #b14c59;
  border-radius: 6px;
  margin-right: 10px;
  border: none;
  color: white;
`;

const SaveButton = styled.button`
  width: 132px;
  height: 50px;
  background-color: #979797;
  border-radius: 6px;
  margin-right: 80px;
  border: none;
  color: white;
`;

const DashbordRight = styled.div`
  margin-top: 130px;
  border-left: #dddddd 1px solid;
  width: 360px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  bottom: 101px;
`;

const DashbordRightTitle = styled.span`
  font-size: 20px;
  color: black;
  font-weight: 700;
  margin-top: 50px;
  white-space: nowrap;
  text-align: left;
  padding-left: 31px;
`;

const DashbordRightFonts = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 15px;
  padding-left: 31px;
`;

const DashbordRightSubmit = styled.div`
  height: 55px;
  background-color: #b14c59;
  color: white;
  left: 0;
  width: 360px;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 20px;
  padding-left: 30px;
  bottom: 100px;
`;


const requsetUserVoiceFonts = async () => {
  return [
    {name: '????????? ??????', img: '' },
  ]
}

const VoicePage = () => {
  const handlePlayClick = () => {
    console.log("handlePlayClick");
  };

  return (
    <Wrapper>
      <Header />
      <Tips>
        <TipsText>
          ???????! ?????? ????????? ,(??????), *(??????), /(?????????)??? ????????? ???
          ????????????????????????.
        </TipsText>
      </Tips>
      <DashbordContainer>
        <DashbordLeft>
          <TitleContainer>
            <Link to="/projects">
              <Arrow src={arrowSrc}></Arrow>
            </Link>
            <TitleInput>?????? ????????????</TitleInput>
          </TitleContainer>
          <FontContainer>
            <FontProfile></FontProfile>
            <FontName>????????? ??????</FontName>
          </FontContainer>
          <InputContainer>
            <InputText>
              ?????? ????????? ????????????. ?????? ????????? ????????? ??????, ?????? ???????????? ???
              ?????? ????????? ????????????, ????????? ?????? ??? ?????? ?????? ????????? ??????.{" "}
            </InputText>
            <InputLength>100/100 (????????????)</InputLength>
          </InputContainer>
        </DashbordLeft>
        <DashbordRight>
          <DashbordRightTitle>?????? ???????????????</DashbordRightTitle>
          <DashbordRightFonts>
            <FontProfile
              style={{ width: "60px", height: "60px" }}
            ></FontProfile>
            <FontName style={{ fontSize: "20px" }}>????????? ??????</FontName>
          </DashbordRightFonts>
          <DashbordRightFonts>
            <FontProfile
              style={{ width: "60px", height: "60px" }}
            ></FontProfile>
            <FontName style={{ fontSize: "20px" }}>?????? ??????</FontName>
          </DashbordRightFonts>
          <DashbordRightFonts>
            <FontProfile
              style={{ width: "60px", height: "60px" }}
            ></FontProfile>
            <FontName style={{ fontSize: "20px" }}>????????? ??????</FontName>
          </DashbordRightFonts>
          <DashbordRightFonts>
            <FontProfile
              style={{ width: "60px", height: "60px" }}
            ></FontProfile>
            <FontName style={{ fontSize: "20px" }}>????????? ??????</FontName>
          </DashbordRightFonts>
          <DashbordRightFonts>
            <FontProfile
              style={{ width: "60px", height: "60px" }}
            ></FontProfile>
            <FontName style={{ fontSize: "20px" }}>?????? ??????</FontName>
          </DashbordRightFonts>
          <DashbordRightSubmit>?????????????????? ???????????? ??????</DashbordRightSubmit>
        </DashbordRight>
      </DashbordContainer>
      <PlaybarContainer>
        <PlayButton onClick={handlePlayClick} src={playSrc} />
        <ProgressBar />
        <Timelaps>
          <span>00:00 &nbsp;</span>
          <span>/00:00 (?????? ??????)</span>
        </Timelaps>
        <Buttons>
          <DownloadButton>????????????</DownloadButton>
          <SaveButton>??????</SaveButton>
        </Buttons>
      </PlaybarContainer>
    </Wrapper>
  );
};

export default VoicePage;
