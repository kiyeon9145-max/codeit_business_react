import { useState } from "react";
import InputFieldComponent from "../components/input-field-component";

const AuthScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onEmailInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(() => e.target.value);
  };
  const onPassswordInputChange = (e) => {
    setPassword(() => e.target.value);
  };
  const onLoginButtonClick = () => {
    console.log(`${email},${password}`);
  };

  return (
    <div>
      <h1>인증 화면</h1>
      <InputFieldComponent
        id="email-input"
        labelText="이메일 입력"
        type="email"
        value={email}
        onChange={onEmailInputChange}
        isValidate={(email) => (email === "" || email.includes("@") ? true : false)}
        warningMessage="이메일이 유효하지 않습니다."
      />
      <InputFieldComponent
        id="password-input"
        labelText="비밀번호 입력"
        type="password"
        value={password}
        onChange={onPassswordInputChange}
        isValidate={(password) =>
          password === "" || password.length > 4 ? true : false
        }
        warningMessage="비밀번호가 너무 짧습니다."
      />
      <button onClick={onLoginButtonClick}>로그인</button>
    </div>
  );
};

export default AuthScreen;