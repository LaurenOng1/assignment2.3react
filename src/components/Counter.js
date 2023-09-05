import {useState} from 'react';

function Counter() {

    const [count, setCount] = useState(0);  

    const handlerPlus = () => {
        setCount(prevCount => {
            return (prevCount +1)
        });
    }

    const handlerMinus = () => {
        setCount(prevCount => {
            const noNegative = prevCount >=1 ? prevCount : 'Error';
            const newCount = noNegative -1;
            return (newCount)
        });
    }

    const resetZero = () => {
        setCount(0)
    }
    

    return(
        <div>
            <button onClick={handlerMinus}>-</button>
            <span> {count} </span>
            <button onClick={handlerPlus}>+</button>

            <br />

            <button onClick={resetZero}>Reset</button>
        </div>
    )
}

export default Counter;