import { useEffect, useState } from "react";


function useCurrencyinfo(currencyCode){

    const [data, setdata] = useState({})

    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currencyCode}.json`)
        .then((res)=> res.json())
        .then((res)=> setdata(res[currencyCode]))
        console.log(data)
    },[currencyCode])
    console.log(data)
    return data
}

export default useCurrencyinfo;