import React, { useState } from "react";

function SignupPage(props) {
  const [Id, setId] = useState("");
  const [Password, setPassword] = useState("");
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Tel, setTel] = useState("");
  const [PasswordConfirm, setPasswordConfirm] = useState("");

  const onIdHandler = (event) => {
    setId(event.currentTarget.value);
  };
  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };
  const onPasswordConfirmHandler = (event) => {
    setPasswordConfirm(event.currentTarget.value);
  };
  const onNameHandler = (event) => {
    setName(event.currentTarget.value);
  };
  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };
  const onTelHandler = (event) => {
    setTel(event.currentTarget.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (Password !== PasswordConfirm) {
      return alert("패스워드와 패스워드 확인이 일치하지 않습니다");
    }
    //// 확인용
    console.log("Id", Id);
    console.log("Password", Password);
    console.log("PasswordConfirm", PasswordConfirm);
    console.log("Name", Name);
    console.log("Email", Email);
    console.log("Tel", Tel);

    props.history.push("/login");
  };

  const onClickHandler = (event) => {
    props.history.push("/");
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={onSubmitHandler}
      >
        <label>아이디</label>
        <input type="text" value={Id} onChange={onIdHandler} />
        <label>패스워드</label>
        <input type="password" value={Password} onChange={onPasswordHandler} />
        <label>패스워드 확인</label>
        <input
          type="password"
          value={PasswordConfirm}
          onChange={onPasswordConfirmHandler}
        />
        <label>이름</label>
        <input type="text" value={Name} onChange={onNameHandler} />
        <label>이메일</label>
        <input type="email" value={Email} onChange={onEmailHandler} />
        <label>전화번호</label>
        <input type="tel" value={Tel} onChange={onTelHandler} />

        <br />

        <button type="submit">회원가입</button>
        <button type="button" onClick={onClickHandler}>
          취소
        </button>
      </form>
    </div>
  );
}

export default SignupPage;
