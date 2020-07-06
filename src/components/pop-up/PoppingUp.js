import React, { useState } from "react";
import PopUp from "./PopUp"; 
import { Button } from '@material-ui/core';

export default function PoppingUp(props) {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <div style={{textAlign:'center'}} onClick={setOpen.bind(this, true)}>
                <Button variant='outlined' style={{marginRight:'1em', color:'#9c9c9c'}}>Follow Us</Button>
            </div>
            <PopUp open={open} closePopUp={setOpen.bind(this, false)} />
        </div>
    );
}