import React, { useState } from "react";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import ConvertButton from "./components/ConvertButton";
import Swap from "./components/Swap";
import CurrencyType from "./components/CurrencyType";
import Input from "./components/Input";

const Currency_convert = () => {
    const [amount, setAmount] = useState([]);
    const [convertedAmount, setConvertedAmount] = useState(0);

    const [currency, setCurrency] = useState("usd");
    const [convertedCurrency, setConvertedCurrency] = useState("inr");

    const currencyArr = [currency, convertedCurrency]

    const handleSwap = () => {
        setCurrency(convertedCurrency);
        setConvertedCurrency(currency);
        setAmount(convertedAmount);
        setConvertedAmount(amount);
    };

    const currencyInfo = useCurrencyInfo(currency);

    const handleSubmit = () => {
        setConvertedAmount(amount * currencyInfo[convertedCurrency]);
    };

  return (
    <>
        <div className='w-screen h-screen flex flex-col items-center justify-center gap-y-6 font-semibold  xl:gap-y-10 bg-slate-800'>

            <div className="hidden md:block text-green-300 md:text-4xl lg:text-5xl font-robotoMono">Currency Converter</div>
            <div className="flex flex-col items-center justify-center p-3 rounded-md bg-neutral-700 bg-opacity-80 shadow-2xl ">
                
                <div className="bg-gray-500 w-full p-3 flex gap-x-3 rounded-lg bg-opacity-80">
                    <Input direction={"From"} amountFunction={setAmount} value={amount}/>

                    <CurrencyType conversionFunction={setCurrency} currency={currency}/>
                </div>

                <Swap handleSwap={handleSwap}/>

                <div className="bg-gray-500 w-full p-3 flex gap-x-4 rounded-lg bg-opacity-80">
                    <Input direction={"To"} amountFunction={setConvertedAmount} value={convertedAmount}/>

                    <CurrencyType conversionFunction={setConvertedCurrency} currency={convertedCurrency}/>
                </div>

                <ConvertButton handleSubmit={handleSubmit} sendCurrency={currencyArr}/>
            </div>
        </div>
    </>
  );
};

export default Currency_convert;