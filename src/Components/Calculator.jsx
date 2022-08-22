import { useState } from "react";
import React from 'react'


export const Calculator = () => {

    const [result, SetResult] = useState("");

    const handleClick = (f) => {

        SetResult(result.concat(f.target.name));
    }
    const clear = () => {
        SetResult("");
    }
    const backspace = () => {
        SetResult(result.slice(0, -1));//result.length 
    }
    const calculate = () => {
        try {
            SetResult(eval(result).toString());
        } catch (e) {
            SetResult("Error")
        }

    }

    return (
        <>
            <div className="Container-Calculator">
                <div className="Calculator">
                    <div className="container-display">
                        <form action="">
                            <input type="text" defaultValue={result} placeholder="0" />
                        </form>
                    </div>
                    <div className="container-buttons">
                        <button onClick={clear} className="buttons" id="clear">Clear</button>
                        <button onClick={backspace} className="buttons" id="backspace">C</button>
                        <button name="/" onClick={handleClick} className="buttons">&divide;</button>
                        <button name="9" onClick={handleClick} className="buttons">9</button>
                        <button name="8" onClick={handleClick} className="buttons">8</button>
                        <button name="*" onClick={handleClick} className="buttons">&times;</button>
                        <button name="7" onClick={handleClick} className="buttons">7</button>
                        <button name="6" onClick={handleClick} className="buttons">6</button>
                        <button name="-" onClick={handleClick} className="buttons">&ndash;</button>
                        <button name="4" onClick={handleClick} className="buttons">4</button>
                        <button name="5" onClick={handleClick} className="buttons">5</button>
                        <button name="." onClick={handleClick} className="buttons">.</button>
                        <button name="2" onClick={handleClick} className="buttons">2</button>
                        <button name="3" onClick={handleClick} className="buttons">3</button>
                        <button name="+" onClick={handleClick} className="buttons">+</button>
                        <button name="1" onClick={handleClick} className="buttons">1</button>
                        <button name="0" onClick={handleClick} className="buttons">0</button>
                        <button onClick={calculate} className="buttons">=</button>
                    </div>
                </div>
            </div>
        </>
    );
}