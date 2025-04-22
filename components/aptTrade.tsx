"use client";

import { useCallback, useEffect } from "react";
import { SERVICE_KEY } from "../utils/config";

const AptTrade = () => {
  const getAptTradeData = useCallback(async () => {
    try {
      const res = await fetch(
        "https://apis.data.go.kr/1613000/RTMSDataSvcAptTrade/getRTMSDataSvcAptTrade?LAWD_CD=11110&DEAL_YMD=201512&serviceKey="+SERVICE_KEY, 
        { 
          method: "GET", 
          headers: { 
            "Content-Type": "application/xml",
          }
        }
      );

      if (res.status === 200) {
        console.log(res);
      }

    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    getAptTradeData();
  }, []);
  
  return (
    <div></div>
  );
};

export default AptTrade;