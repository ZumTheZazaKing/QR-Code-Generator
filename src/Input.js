import { Context } from './Contexts/Context';

import { useContext } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export function Input(){

    let { link, setLink, setQrImage, open, setOpen, color, setColor, bgcolor, setBgcolor } = useContext(Context);

    const handleClose = () => setOpen(false);

    function generateQrCode(){
        if(link === ""){
            setOpen(true);
        } else {
            setQrImage(`https://api.qrserver.com/v1/create-qr-code/?data=${link}&amp;&size=200x200&color=${color.slice(1,)}&bgcolor=${bgcolor.slice(1,)}&margin=1&qzone=2&format=svg`);
        }
    }

    return (<div id="Input">
        <TextField 
        type='text'
        value={link}
        onChange={e => setLink(e.target.value)}
        fullWidth={true}
        label="Link or Text"
        variant="outlined"
        />
        <br/>

        <p>(Make sure Color is darker than Bg Color)</p>
        <div id="colorSelect">
            <label>Color:</label>
            <input type="color" value={color} onChange={e => setColor(e.target.value)}/>

            <label>Bg Color:</label>
            <input type="color" value={bgcolor} onChange={e => setBgcolor(e.target.value)}/>
        </div>
        <br/>
        <Button id="generateButton" variant="contained" onClick={() => generateQrCode()}>Generate</Button>
        <Snackbar message="Please add input" open={open} autoHideDuration={2000} onClose={handleClose}/>
    </div>)
}