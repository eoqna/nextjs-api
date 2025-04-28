"use client";

import { useCallback, useEffect } from "react";

const Home = () => {
  const getUserData = useCallback(async () => {
    try {
      const res = await fetch(
        "/api/home", 
        { 
          method: "GET", 
        },
      );

      if (res.status === 200) {
        const data = await res.json();

        console.log(data);
      }

    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    getUserData();
  }, []);
  
  return (
    <div></div>
  );
};

export default Home;