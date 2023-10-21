import React from 'react'

const Input = ({direction, amountFunction, value}) => {
    return (
        <>
            <div className="space-y-2">
                <div className="bg-violet-400 flex justify-center items-center rounded-full py-1 lg:py-1.5 text-[1.08rem] sm:text-lg lg:text-[1.4rem] font-semibold text-violet-800 tracking-wide">{direction}</div>

                <input
                    type="number"
                    className="rounded-full  pl-5 pr-3 py-1 lg:py-3 bg-sky-900 text-sky-300 focus:outline-none focus:border-none md:text-xl sm:text-[1rem] font-onest sm:w-[23rem] md:w-[33rem] lg:w-[40rem]"
                    onChange={(e) => amountFunction(Number(e.target.value))}
                    value={value !== Number(0) ? value : Number(0)}
                    autoFocus={direction === 'From' ? true : false}
                    disabled={direction === 'To' ? true : false}/>
            </div>
        </>
    )
}

export default Input