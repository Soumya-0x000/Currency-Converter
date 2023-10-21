import React from 'react'

const ConvertButton = ({handleSubmit, sendCurrency}) => {

    return (
        <>
            <div 
            className="bg-gradient-to-tl from-green-400 to-blue-400 rounded-full px-7 sm:px-10 py-1 sm:py-2 text-green-900 md:text-xl sm:text-[1.1rem] cursor-pointer font-semibold mt-3 active:scale-90 transition-all"
            onClick={handleSubmit}>
                <button
                className="w-full h-full">
                    Convert {sendCurrency[0].toUpperCase()} to{" "} {sendCurrency[1].toUpperCase()}
                </button>
            </div>
        </>
    )
}

export default ConvertButton