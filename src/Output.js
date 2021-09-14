import { Context } from './Contexts/Context';

import { useContext } from 'react';
import Button from '@material-ui/core/Button';

export function Output(){

    let { qrImage } = useContext(Context);

    return (<div id="Output">
        {qrImage ? 
        <div id="main">
            <img src={qrImage} alt="" title="" />
            <br/>
            <Button>DOWNLOAD SVG</Button>
        </div>
        :
        <h2>Start by entering a link or text!</h2>}
    </div>)
}