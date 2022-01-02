import React, {useCallback, useState} from 'react'
import {FirstChild} from './FirstChild'

function UseCallbackHook() {
    const [counter, setCounter] = useState(0);
    const [counter2, setCounter2] = useState(0);
    const onClick = useCallback(() => {
        setCounter(counter +1)
    }, [counter])

    const onClick2 = useCallback(() => {
        setCounter2(counter2 +1)
    }, [counter2])
    return (
        <div>
            <FirstChild onClick={onClick}/>
            <button onClick={onClick}> 
            Counter is : {counter}
            </button>
            <button onClick={onClick2}> 
            Counter2 is : {counter2}
            </button>
        </div>
    )
}

export default UseCallbackHook
