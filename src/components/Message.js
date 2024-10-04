import React,{Component, useState} from "react";
import onImage from './bulbon.png'
import offImage from './bulbof.png'

function ToggleButton() {

    const [isOn,setIsOn] = useState(false);

    return (
        <div>
            <button onClick={() => setIsOn(!isOn)}>{isOn ? 'ON' : 'OFF'}</button>
            <img src={isOn ? onImage : offImage} width={"200px"}></img>
        </div>
    )
}

export default ToggleButton