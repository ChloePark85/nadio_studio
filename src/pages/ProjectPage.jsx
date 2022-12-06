import React from "react";
import Header from "../components/Header";
import styled from "styled-components";
import { Link } from "react-router-dom";

const TitleText = styled.span`
  color: #000000;
  font-size: 26px;
  text-align: left;
  font-family: "Noto Sans KR", sans-serif;
  margin-left: 120px;
  margin-top: 200px;
`;

const ProjectsList = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 50px;
  margin-left: 120px;
  column-gap: 20px;
`;

const Project = styled.div`
  background-color: white;
  border: #dddddd 1px solid;
  width: 203px;
  height: 203px;
  top: 265px;
  left: 120px;
  color: black;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ProjectTitle = styled.span`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 15px;
`;
const ProjectSummary = styled.p`
  font-size: 13px;
  font-weight: 300;
  margin-bottom: 15px;
  line-height: 16px;
  overflow: hidden;
  margin-top: 20px;
`;

const DateModify = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 14px;
  font-weight: 300;
`;

const NewProject = styled.div`
  background-color: white;
  border: #dddddd 1px solid;
  width: 203px;
  top: 265px;
  left: 120px;
  color: black;
  padding: 20px 20px;
  border-radius: 10px;
  padding-top: 100px;
  margin-bottom: 10px;
  font-weight: 300;
  font-size: 50px;
  display: inline-block;
  text-align: center;
  align-items: center;
`;

const ProjectPage = () => {
  return (
    <Wrapper>
      <Header />
      <TitleText className="title">나의 프로젝트</TitleText>
      <ProjectsList>
        <Project>
          <Link to="./SamplePage">
            <ProjectTitle>샘플 프로젝트</ProjectTitle>
            <ProjectSummary>
              나는 산책을 좋아한다. 파란 하늘과 신선한 바람, 눈을 편안하게 해
              주는 초록의 싱그러움, 단단한 땅을 두 발로 딛는 걸음이 좋다. 그
              날도 동네 공원을 걷고 있었다. 나는 왜 이렇게 약할까, 생각하면서
              말이다. 나는 남들보다 약하다. 평균보다 약하다.{" "}
            </ProjectSummary>
            <DateModify>
              <span>2022.10.25</span>
              <span>수정</span>
            </DateModify>
          </Link>
        </Project>
        <NewProject>
          <span style={{ marginTop: "100px" }}>+</span>
        </NewProject>
        <Project key={Project.id}>
          <Link
            to={{
              pathname: `/${Project.id}`,
              state: { name: Project.name },
            }}
          ></Link>
        </Project>
      </ProjectsList>
    </Wrapper>
  );
};

export default ProjectPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f8f6f2;
`;
