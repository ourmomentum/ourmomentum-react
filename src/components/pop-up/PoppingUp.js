import React from "react";
import PopUp from "./PopUp"; 
import { Button } from '@material-ui/core';

export default class PoppingUp extends React.Component {
    state = {
        seen: false
    };  
    
    togglePop = () => {
        this.setState({
            seen: !this.state.seen
        });
    };
    
    render() {
        return (
            <div>
                <div style={{textAlign:'center'}} onClick={this.togglePop}>
                    <Button variant='outlined' style={{marginRight:'1em', color:'#9c9c9c'}}>Follow Us</Button>
                </div>
                {this.state.seen ? <PopUp toggle={this.togglePop} /> : null}
            </div>
        );
    }
}