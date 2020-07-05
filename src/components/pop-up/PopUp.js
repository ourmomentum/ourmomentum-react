import React, { Component } from "react";
import { Button, Typography } from '@material-ui/core';
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
                    </Typography>
                    <div style={{marginLeft:'50%', transform:'translateX(-50%)'}}>
                        <form>
                            <input type="email" name="email" style={{fontSize:'1em', width:'21em', marginLeft:'50%', transform:'translateX(-50%)'}}/>
                            <br />
                            <Button variant='outlined' style={{fontSize:'1.1em', marginTop:'0.95em', marginRight:'1em', backgroundColor:'#51AF9D', color:'white', borderColor:'#51AF9D', marginLeft:'50%', transform:'translateX(-50%)'}}>Submit</Button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}