"use server"

import { AptTrade } from "../../components";
import { SERVICE_KEY } from "../../utils/config";
import { parseString } from "xml2js";

export async function getAptTradeData() {
  try {
    const response = await fetch(
      "https://apis.data.go.kr/1613000/RTMSDataSvcAptTrade/getRTMSDataSvcAptTrade?LAWD_CD=11110&DEAL_YMD=201512&serviceKey="+SERVICE_KEY,
      { 
        method: "GET",
      }
    );
  
    if (response.status === 200) {
      console.log(response);
  
      parseString(response, (err, result) => {
        const json = result;
      })
    }
  
    return response;
  } catch (err) {
    console.error(err);
  }
}

export default async function Page() {
  const data = await getAptTradeData();

  return (
    <div className="flex justify-center items-center w-full h-full">
      <AptTrade />
    </div>
  );
};