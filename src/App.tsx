import React, {useState} from 'react';
import './App.css';
import {Header} from "./site/Header";
import {Body} from "./site/Body";
import {Future} from "./site/Future";
import {MethodMap} from "./methods/methodMap";
import HookUseState from "./Hook/hookUseState";
import {MethodFilter} from "./methods/methodFilter";
import FullButtonInput from "./components/FullButtonInput";
import Input from "./components/Input";
import {Button} from "./components/Button";
import AppArray from "./array/AppArray";

function App() {
    let [title, setTitle] = useState('')

    const topCars = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]
    const [money, setMoney] = useState([
        {banknotes: 'Dollars', value: 100, number: ' a1234567890'},
        {banknotes: 'Dollars', value: 50, number: ' z1234567890'},
        {banknotes: 'Rubles', value: 100, number: ' w1234567890'},
        {banknotes: 'Dollars', value: 100, number: ' e1234567890'},
        {banknotes: 'Dollars', value: 50, number: ' c1234567890'},
        {banknotes: 'Rubles', value: 100, number: ' r1234567890'},
        {banknotes: 'Dollars', value: 50, number: ' x1234567890'},
        {banknotes: 'Rubles', value: 50, number: ' v1234567890'},
    ])
    let [server, setServer] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'}
    ])

    const addMessage = (title: string) => {
        let newMessage = {message: title}
        setServer([newMessage, ...server])
    }

    const callBackBtnHandler = () => {
        addMessage(title)
        setTitle('')
    }
    return (
        <div>
            {/*<div>
                <Header title={'NEW TITLE'}/>
                <Body title={'NEW BODY'}/>
                <Future title={'NEW FUTURE'}/>
            </div>
*/}
            {/* <div>
                <MethodMap topCars={topCars}/>
                <MethodFilter money={money}/>
            </div>*/}

            {/*<div>
                <HookUseState/>
            </div>*/}

            <div>
                {/* <>
                    <FullButtonInput addMessage={addMessage}/>
                    {server.map((el, index) => {
                        return (
                            <div key={index}>{el.message}</div>
                        )
                    })
                    }
                </>*/}
                <>
                    <Input setTitle={setTitle} title={title}/>
                    <Button callBack={callBackBtnHandler} name={'+'}/>
                    {server.map((el, index) => {
                        return (
                            <div key={index}>{el.message}</div>
                        )
                    })
                    }
                </>
                <>
                    <AppArray/>
                </>
            </div>
        </div>
    );
}

export default App;
