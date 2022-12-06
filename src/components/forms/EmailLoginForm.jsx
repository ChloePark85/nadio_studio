import React from "react";
import styled from "styled-components";
import Button from "../buttons/Button";
import TextInput from "../inputs/TextInput";
import { useForm } from "react-hook-form";

const EmailLoginForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // TODO: CALL LOGIN API
    console.log(data);
  };


  return (
    <Wrapper onSubmit={handleSubmit(onSubmit)}>
      <div className="inputs">
        <TextInput
          type="email"
          placeholder="이메일"
          {...register("email", {
            required: true,
            pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
          })}
        />
        <TextInput
          type="password"
          placeholder="비밀번호"
          {...register("pw", { required: true })}
        />
      </div>
      <div className="actions">
        <a>비밀번호가 기억나지 않습니다.</a>
        <a>회원 가입하기</a>
      </div>
      <Button>로그입</Button>
    </Wrapper>
  );
};

export default EmailLoginForm;

const Wrapper = styled.form`
  width: 400px;
  display: flex;
  flex-direction: column;

  .inputs {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    gap: 15px;
  }

  .actions {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-bottom: 35px;

    a {
      cursor: pointer;
      font-weight: 500;
      font-size: 16px;
      line-height: 23px;
      text-underline-offset: 3px;
      text-decoration: underline;
    }
  }

  button {
    background: #b14c59;
    border-radius: 6px;
    color: white;
  }
`;
