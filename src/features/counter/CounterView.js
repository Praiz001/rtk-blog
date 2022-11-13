import React from 'react'
import { increment, decrement, reset, incrementByAmount } from './counterSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'

const CounterView = () => {
    const count = useSelector((state) => state.counter.count );
    const dispatch = useDispatch();

    const [ incrementAmount, setIncrementAmount ] = useState(0);

    const enterValue = Number(incrementAmount) || 0;

    const resetAll = () => {
        setIncrementAmount(0);
        dispatch(reset());
    } 



  return (
    <div>
        <h1>{count}</h1>
        <div>
            <button onClick={() => dispatch(increment()) } > Click to increase (+)</button>
            <button onClick={() => dispatch(decrement()) } > Click to decrease (-)</button>
        </div>

        <input 
            type="text"
            value={incrementAmount}
            onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <div>
            <button onClick={ () => dispatch(incrementByAmount(enterValue))}>Add Amount</button>
            <button onClick={resetAll}>Reset</button>
        </div>
    </div>
  )
}

export default CounterView