import React, { Component } from "react";
import { Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

export default class PopUp extends Component {
    handleClick = () => {
        this.props.toggle();
    };
    
    render() {
        return (
            <div style={{right:'0%', bottom:'0%', position:'fixed',  width:'100%', height:'100%', backgroundColor:'rgba(0, 0, 0, 0.6)', zIndex:'1'}}>
                <div style={{width:'100vh', height:'auto', transform:'translate(-50%, -50%)', justifyContent: 'flex-end', top:'50%', left:'50%', backgroundColor:'white', position:'fixed', padding:'1em', border:'3px solid black'}}>
                    <span style={{color:'black', float:'rich'}} onClick={this.handleClick}><CloseIcon /></span>
                    <Typography variant='h4' style={{fontWeight:'bold', display: 'flex', justifyContent: 'center'}} >FOLLOW US</Typography>
                    <Typography style={{paddingLeft:'1em', paddingTop:'1em', paddingBottom:'1em'}}>
                        Want to stay updated with what we're up to? Enter your email below address and receive notifications of new posts by email. 
                        <br />
                        idk how to make a form that works
                        <br />
                        pls act like it is here
                        <br />
                        i will learn soon and fix it
                        <br /> 
                        a submit button would be somewhere here 
                        <br />
                        thank you for your patience stay tuned for pop-up v2.0
                    </Typography>
                </div>
            </div>
        );
    }
}