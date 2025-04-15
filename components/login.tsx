"use client";

import { useState } from "react";

interface LoginProps {
  id: string;
  password: string;
}

const defaultLoginInfo: LoginProps = {
  id: "",
  password: "",
};

const Login = () => {
  const [ userInfo, setUserInfo ] = useState<LoginProps>(defaultLoginInfo);

  return (
    <div className="flex flex-col items-center w-xs h-xs p-[20px] shadow-xl">
      <input
        type="text"
        value={userInfo.id}
        onChange={(e) => setUserInfo({ ...userInfo, id: e.target.value })}
        placeholder="아이디"
      />
      <input 
        type="text"
        value={userInfo.password}
        onChange={(e) => setUserInfo({ ...userInfo, password: e.target.value })}
        placeholder="비밀번호"
      />
      <button>로그인</button>
    </div>
  );
};

export default Login;