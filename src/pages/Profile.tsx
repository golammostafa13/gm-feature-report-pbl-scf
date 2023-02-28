import React, {useEffect, useState} from 'react';
import {Box, Button, IconButton, InputAdornment, OutlinedInput, TextField, Typography} from "@mui/material";
import CustomSnackBar from "../component/customMUIComponents/customSnackBar";
import {getRTKQErrorMessage} from "../utils/rtkErrorUtil";
import {formContainerBoxStyle, inputFieldDesign} from "../theme/customStyles/formStyles";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import {useProfileDetailsQuery, useProfileUpdateMutation} from "../services/api/authApiSlice";

function Profile() {
    const [snackBarData, setSnackBarData] = useState({
        message: '',
        type: ''
    });
    const {data: profileData, error: getProfileDataError} = useProfileDetailsQuery()
    const [updateProfile, {data: updatedMessage, error: updateError}] = useProfileUpdateMutation()

    const [values, setValues] = useState({
        user_name: '',
        role_name: '',
        password: '',
        confirmPassword: '',
        oldPassword: '',
        showPassword: false
    });
    const handleChange = (prop: string) => (event: { target: { value: any; }; }) => {
        setValues({...values, [prop]: event.target.value});
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
    };

    const submitHandler = async () => {
        const {password, confirmPassword, oldPassword} = values
        updateProfile({password, confirmPassword, oldPassword})
    }

    useEffect(() => {
        if (getProfileDataError) {
            setSnackBarData({message: getRTKQErrorMessage(getProfileDataError), type: 'error'})
            return;
        }
        if (profileData?.user_name) {
            setValues(state => ({...state, ...profileData}))
        }
    }, [profileData, getProfileDataError])
    useEffect(() => {
        if (updateError) {
            setSnackBarData({message: getRTKQErrorMessage(updateError), type: 'error'})
            return;
        }
        if (updatedMessage) {
            setValues(state => ({
                ...state,
                password: '',
                confirmPassword: '',
                oldPassword: ''
            }))
            setSnackBarData({message: updatedMessage, type: "success"})
        }
    }, [updatedMessage, updateError])

    return (
        <Box sx={{margin: '30px', textAlign: 'left'}}>
            <CustomSnackBar messageText={snackBarData.message} type={snackBarData.type} resetMessage={setSnackBarData}/>
            <Box sx={formContainerBoxStyle}>
                <Typography fontSize='28px' fontWeight={600} lineHeight='42px'>
                    User Details
                </Typography>
                <TextField
                    sx={inputFieldDesign}
                    fullWidth
                    label={'User Name'}
                    size='small'
                    disabled
                    placeholder='USer Name'
                    value={values.user_name}
                    required
                    onChange={handleChange('user_name')}
                />
                <TextField
                    sx={inputFieldDesign}
                    fullWidth
                    size='small'
                    label={'Role'}
                    disabled
                    placeholder='Role'
                    value={values.role_name}
                    required
                    onChange={handleChange('role_name')}
                />
                <OutlinedInput
                    id="outlined-adornment-password"
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.oldPassword}
                    sx={inputFieldDesign}
                    onChange={handleChange('oldPassword')}
                    size='small'
                    required
                    placeholder="Old Password"
                    fullWidth
                    autoComplete={'none'}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                            >
                                {values.showPassword ? <VisibilityOff/> : <Visibility/>}
                            </IconButton>
                        </InputAdornment>
                    }
                />
                <OutlinedInput
                    id="outlined-adornment-password"
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.password}
                    sx={inputFieldDesign}
                    onChange={handleChange('password')}
                    size='small'
                    required
                    placeholder="New Password"
                    fullWidth
                    autoComplete={'none'}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                            >
                                {values.showPassword ? <VisibilityOff/> : <Visibility/>}
                            </IconButton>
                        </InputAdornment>
                    }
                />
                <OutlinedInput
                    id="outlined-adornment-password"
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.confirmPassword}
                    sx={inputFieldDesign}
                    onChange={handleChange('confirmPassword')}
                    size='small'
                    required
                    placeholder="Confirm Password"
                    fullWidth
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                            >
                                {values.showPassword ? <VisibilityOff/> : <Visibility/>}
                            </IconButton>
                        </InputAdornment>
                    }
                />
                <Button variant='contained'
                        sx={{
                            fontSize: '16px',
                            fontWeight: 500,
                            lineHeight: '24px',
                            marginTop: '30px',
                            width: "199px",
                            height: "48px",
                            borderRadius: "5px",
                            background: 'primary.main',
                            textTransform: 'capitalize'
                        }}
                        size='small'
                        onClick={submitHandler}
                >Update Password</Button>
            </Box>
        </Box>
    );
}

export default Profile;