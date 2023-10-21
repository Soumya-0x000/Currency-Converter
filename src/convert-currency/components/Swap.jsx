import React from 'react'

const Swap = ({handleSwap}) => {
    return (
        <>
            <div className=" rounded-lg px-4 md:px-6 py-1 md:py-2 font-semibold font-robotoMono text-xl md:text-3xl text-teal-300 flex items-center justify-center bg-indigo-600 bg-opacity-80 active:bg-blue-800 active:scale-90 transition-all">
                <button className="w-full h-full" onClick={handleSwap}>Swap</button>
            </div>
        </>
    )
}

export default Swap