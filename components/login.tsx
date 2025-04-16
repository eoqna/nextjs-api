"use client";

import { useCallback, useState } from "react";

interface LoginProps {
  id: string;
  password: string;
}

const defaultLoginInfo: LoginProps = {
  id: "",
  password: "",
};

const Login = () => {
  const [ userInfo, setUserInfo ] = useState(defaultLoginInfo);

  const onClickLogin = useCallback(async () => {
    try {
      const res = await fetch(
        "/api/login", 
        { 
          method: "POST", 
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ 
            id: userInfo.id, 
            password: userInfo.password, 
          }),
        }
      );

      if (res.status === 200) {
        const data = await res.json();

        console.log(data);
      } else {
        console.log("로그인 실패");
      }
    } catch (err) {
      console.error(err);
    }
  }, [userInfo]);

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
      <button onClick={onClickLogin}>로그인</button>
    </div>
  );
};

export default Login;