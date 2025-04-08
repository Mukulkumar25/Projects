import { useEffect, useState } from "react";

function useCurrencyInfo(currency){

  const [data, setData] = useState({});

  useEffect(()=>{
    // fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
    .then((res) => res.json())
    .then((res) => setData(res[currency]))
    console.log(data);
    
  },
  [
    currency,
  ]
  );
  // useEffect(() => {
  //   const fetchCurrency = async () => {
  //     try {
  //       const res = await fetch(`https://api.frankfurter.app/latest?from=${currency}`);
  //       const json = await res.json();
  //       setData(json.rates); // 'rates' holds currency data
  //     } catch (err) {
  //       console.error("Currency fetch failed:", err);
  //       setData({});
  //     }
  //   };

  //   fetchCurrency();
  // }, [currency]);

  console.log(data);
  return data;
  
}

export default useCurrencyInfo;