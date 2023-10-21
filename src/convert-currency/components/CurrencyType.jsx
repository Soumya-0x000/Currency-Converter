import React from 'react'
import useCurrencyInfo from '../hooks/useCurrencyInfo';

const CurrencyType = ({conversionFunction, currency}) => {

    const currencyInfo = useCurrencyInfo(currency);
    const currencyOptions = Object.keys(currencyInfo);

    return (
        <>
            {/* Currency and its type */}
            <div className="space-y-2 flex flex-col justify-center">
                <div className="bg-violet-400 text-violet-800 flex flex-col justify-center items-center rounded-full focus:outline-none focus:border-none md:text-lg text-[.9rem] font-semibold py-1">Currency</div>

                {/* Currency options */}
                <div className="flex flex-col justify-center items-center rounded-full bg-sky-900  md:text-lg text-[.9rem] text-cyan-300 font-semibold font-mavenPro px-2 py-1.5">
                    <select
                        className='focus:outline-none focus:border-none bg-sky-900'
                        onChange={(e) => conversionFunction(e.target.value)}
                        value={currency}>
                            {currencyOptions.map((value, index) => (
                                <option key={index} value={value}>
                                    {String(value).toUpperCase()}
                                </option>
                            ))}
                    </select>
                </div>
            </div>
        </>
    )
}

export default CurrencyType