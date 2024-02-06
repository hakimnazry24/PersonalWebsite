"use client"

import { useEffect, useState } from "react"

export default function test() {
    const [value, setValue] = useState(0);
    const [value1, setValue1] = useState(0);
    function printTxt(txt, i) {
        document.getElementById("#type").innerHTML += txt.charAt(i);
    }

    function handleValue() {
        setValue(value+1);
    }
    function handleValue1() {
        setValue1(value1+1);
    }
    return (
        <>
            <button className="p-2 bg-slate-200" onClick={handleValue}>Click me!</button>
            <button className="p-2 bg-slate-200" onClick={handleValue1}>Click me!</button>
            
            {value}
            {value1}

            <span id="type"></span>

        </>
    )
}