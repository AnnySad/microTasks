import React, {ChangeEvent, useState} from 'react';


type FullButtonInput={
    addMessage:(title:string)=>void
}

const FullButtonInput = (props:FullButtonInput) => {

    let[title,setTitle]=useState('')

    const onChangeInpHandler=(event: ChangeEvent<HTMLInputElement>)=>{
        setTitle(event.currentTarget.value)
    }

    const onClickBtnHandler = () => {
        props.addMessage(title)
        setTitle('')
    }
    return (
            <div>
                <input value={title} onChange={(onChangeInpHandler)}/>
                <button onClick={(onClickBtnHandler)}>+</button>
            </div>
    );
};

export default FullButtonInput;