import React, { Component } from "react";
import { Button, Typography, Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

export default function PopUp(props) {
    const handleSubscribe = () => {
        props.closePopUp();
    }
        return (
                <Dialog open={props.open} onClose={props.closePopUp}>
                    <DialogTitle>Subscribe</DialogTitle>
                    <DialogContent>
                    <DialogContentText>
                        Want to stay updated with what we're up to? Enter your email below address and receive notifications of new posts by email. 
                    </DialogContentText>
                    <TextField
                        autoFocus
                        label="Email Address"
                        type="email"
                        fullWidth
                    />
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={props.closePopUp} color="primary">
                        Cancel
                    </Button>
                    <Button onClick= {handleSubscribe} color="primary">
                        Yes
                    </Button>
                    </DialogActions>
                </Dialog>
        );
}