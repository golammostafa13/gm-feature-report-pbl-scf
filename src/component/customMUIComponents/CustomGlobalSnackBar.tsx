import React from "react";
import {Alert, Snackbar} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../services/store";
import {resetUtilityMessage} from "../../services/slices/UtilitySlice";

function CustomGlobalSnackBar() {
  const {message, type} = useSelector((state: RootState) => state.utility)
  const dispatch = useDispatch()
  const handleSnackBarClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(resetUtilityMessage());
  };

  return (
      message ? <Snackbar open autoHideDuration={5000} onClose={handleSnackBarClose}>
        <Alert onClose={handleSnackBarClose} severity={type === 'error' ? "error" : 'success'} sx={{width: '100%'}}>
          {message}
        </Alert>
      </Snackbar> : <></>
  );
}

export default CustomGlobalSnackBar;