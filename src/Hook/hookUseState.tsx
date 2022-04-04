import React, {useState} from 'react';

const HookUseState = () => {

    let [a, setA]=useState(1)
    const onClickHandler = () => {
      setA(++a)
    }
    const onClickHandlerStop = () => {
      setA(0)
    }

    return (
        <div>
            <h1>{a}</h1>
            <button onClick={onClickHandler}>number</button>
            <button onClick={onClickHandlerStop}>0</button>
        </div>
    );
};

export default HookUseState;