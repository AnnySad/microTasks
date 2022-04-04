import React from 'react';

type MethodMapType={
    topCars:Array<CarsType>
}
type CarsType={
    manufacturer:string
    model:string
}

export const MethodMap = (props:MethodMapType) => {

    return (
        <ul>
            {props.topCars.map((objectForCarsArr,index)=>{
                return(
                    <table key={index}>
                        <th>{objectForCarsArr.manufacturer}</th>
                        <tr> model: {objectForCarsArr.model}</tr>
                    </table>
                )
            })}
        </ul>
    );
};

