import React, {ChangeEvent} from 'react';

type InputType = {
    setTitle: (title: string) => void,
    title: string
}

const Input = (props: InputType) => {
    const onChangeInpHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setTitle(event.currentTarget.value)
    }
    return (
        <input value={props.title} onChange={(onChangeInpHandler)}/>
    );
};

export default Input;