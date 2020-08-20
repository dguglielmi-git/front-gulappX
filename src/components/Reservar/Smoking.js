import React from 'react';

function checkit(smokeState){
    if (smokeState) {
        return 'smoking.png';
    } 
    return 'nosmoking.png';
}

export default function Smoking({smokeState}){
    return (
        <div style={{marginTop:'2px'}}>
        <img src={require(`../../images/icon/${checkit(smokeState)}`)} height="30" width="30"></img>
        </div>
    );
}