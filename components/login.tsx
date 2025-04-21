"use client";

import { useCallback, useRef, useState } from "react";
import { useRouter } from "next/navigation";

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
  const idRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const onClickLogin = useCallback(async () => {
    try {
      if (!userInfo.id) {
        idRef.current.focus();
        return alert("아이디를 입력해 주세요");
      }

      if (!userInfo.password) {
        passwordRef.current.focus();
        return alert("비밀번호를 입력해 주세요");
      }

      const res = await fetch(
        "/api/login", 
        { 
          method: "POST", 
          headers: { 
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ 
            id: userInfo.id, 
            password: userInfo.password, 
          }),
        }
      );

      if (res.status === 200) {
        const data = await res.json();

        if (data.error) {
          return alert("아이디 또는 비밀번호가 다릅니다");
        }

        router.push("/home");
        return alert(`${data.name}님, 환영합니다 🎉`);
      }
    } catch (err) {
      console.error(err);
    }
  }, [userInfo]);

  return (
    <div className="flex flex-col items-center w-sm px-10 py-30 shadow-2xl">
      <input
        className="w-full py-[4px] px-[6px] border rounded-[4px] text-[16px] mb-[10px] outline-0"
        ref={idRef}
        type="text"
        value={userInfo.id}
        onChange={(e) => setUserInfo({ ...userInfo, id: e.target.value })}
        placeholder="아이디"
      />
      <input 
        className="w-full py-[4px] px-[6px] border rounded-[4px] text-[16px] mb-[30px] outline-0"
        ref={passwordRef}
        type="text"
        value={userInfo.password}
        onChange={(e) => setUserInfo({ ...userInfo, password: e.target.value })}
        placeholder="비밀번호"
      />
      <button
        className="flex items-center justify-center w-full p-[6px] border border-blue-300 bg-blue-300 h-8 rounded-[4px] text-white font-bold cursor-pointer" 
        onClick={onClickLogin}
      >
        로그인
      </button>
    </div>
  );
};

export default Login;