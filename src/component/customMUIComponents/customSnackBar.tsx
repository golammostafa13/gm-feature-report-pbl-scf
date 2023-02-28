import React, {useEffect, useState} from 'react';
import {Alert, Snackbar} from "@mui/material";

function CustomSnackBar({
                            messageText,
                            type,
                            resetMessage
                        }: { messageText: string, type: string, resetMessage: Function }) {

    const handleSnackBarClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        resetMessage({
            message: '',
            type: ''
        });
    };

    return (
        messageText ? <Snackbar open autoHideDuration={5000} onClose={handleSnackBarClose}>
            <Alert onClose={handleSnackBarClose} severity={type === 'error' ? "error" : 'success'} sx={{width: '100%'}}>
                {messageText}
            </Alert>
        </Snackbar> : <></>
    );
}

export default CustomSnackBar;