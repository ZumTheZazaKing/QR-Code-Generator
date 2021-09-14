import { Context } from './Contexts/Context';

import { useContext } from 'react';

export function Output(){

    let { qrImage } = useContext(Context);

    return (<div id="Output">
        {qrImage ? 
        <img src={qrImage} alt="" title="" />
        :
        <h2>Start by entering a link or text!</h2>}
    </div>)
}