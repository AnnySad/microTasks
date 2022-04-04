import React, {useState} from 'react';

type MethodFilterType={
    money:Array<MoneyType>
}
type MoneyType={
    banknotes: string
    value: number
    number: string
}

type MoneyFilterType='All'| 'Rubles' |'Dollars'

export const MethodFilter = (props:MethodFilterType) => {

    const [btnFilterMoney,setBtnFilterMoney]=useState<MoneyFilterType>('All')

    let currentMoney=props.money
    if (btnFilterMoney==='Rubles'){
         currentMoney=props.money.filter((filteredMoney)=>filteredMoney.banknotes==='Rubles')
    }
   if (btnFilterMoney==='Dollars'){
        currentMoney=props.money.filter((filteredMoney)=>filteredMoney.banknotes==='Dollars')

   }

    const onClickHandlerFilter = (nameBtn:MoneyFilterType) => {
        setBtnFilterMoney(nameBtn)
    }


    return (
        <>
        <ul>
            {currentMoney.map((objFromMoneyArr,index)=>{
                return(
                    <ul key={index}>
                        <li>{objFromMoneyArr.banknotes}</li>
                        <span>{objFromMoneyArr.value}</span>
                        <span>{objFromMoneyArr.number}</span>
                    </ul>
                )
            })}
        </ul>
            <div style={{marginLeft:"35px"}}>
                <button onClick={()=>onClickHandlerFilter('All')}>All</button>
                <button onClick={()=>onClickHandlerFilter('Rubles')}>Rubles</button>
                <button onClick={()=>onClickHandlerFilter('Dollars')}>Dollars</button>
            </div>
        </>
    );
};

