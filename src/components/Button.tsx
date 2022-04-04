import React from 'react';

type BtnType={
    name:string,
    callBack:()=>void
}
export const Button = (props:BtnType) => {

    const onClickBtnHandler = () => {
        props.callBack()
    }
    return (
       <button onClick={onClickBtnHandler}>{props.name}</button>
    );
};
