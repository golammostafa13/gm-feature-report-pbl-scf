import {
    Box,
    Button,
    IconButton,
    InputAdornment,
    OutlinedInput,
    TextField,
    Typography
} from "@mui/material";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
//@ts-ignore
import {useSelector} from "react-redux";
import {useRegisterMutation} from "../services/api/authApiSlice";
import {setUserInfo} from "../services/slices/userSlice";
import {useDispatch} from "react-redux";
import {formContainerBoxStyle, inputFieldDesign} from "../theme/customStyles/formStyles";
import CustomSnackBar from "../component/customMUIComponents/customSnackBar";
import {getRTKQErrorMessage} from "../utils/rtkErrorUtil";
import {topBarStyle} from "../theme/customStyles/layoutStyles";

function SignUpFormComponent() {

    const {token} = useSelector((state: any) => state.userInfo)
    const navigate = useNavigate()
    const [register, {data: registerData, error}] = useRegisterMutation()

    const dispatch = useDispatch()
    const [values, setValues] = useState({
        user_name: '',
        password: '',
        confirmPassword: '',
        showPassword: false
    });
    const [snackBarData, setSnackBarData] = useState({
        message: '',
        type: ''
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

    const signUpHandler = async () => {
        const {showPassword, ...formData} = values
        register(formData)
    }

    useEffect(() => {
        if (error) {
            setSnackBarData({message: getRTKQErrorMessage(error), type: 'error'})
            return
        }
        if (registerData?.token) {
            dispatch(setUserInfo(registerData))
        }
    }, [registerData, error])

    useEffect(() => {
        if (token) {
            navigate('/dashboard')
        }
    }, [token])

    return (
        <Box width='100%' height='100vh' display='flex' justifyContent='center' alignItems='center'
             sx={{background: "url('/bg.png')", mt: `-${topBarStyle.height}`}}>
            <CustomSnackBar messageText={snackBarData.message} type={snackBarData.type} resetMessage={setSnackBarData}/>
            <Box sx={formContainerBoxStyle}>
                <Typography fontSize='28px' fontWeight={600} lineHeight='42px'>
                    Sign Up
                </Typography>
                <TextField
                    sx={inputFieldDesign}
                    fullWidth
                    size='small'
                    placeholder='User Name'
                    value={values.user_name}
                    required
                    onChange={handleChange('user_name')}
                />
                <OutlinedInput
                    id="outlined-adornment-password"
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.password}
                    sx={inputFieldDesign}
                    onChange={handleChange('password')}
                    size='small'
                    required
                    placeholder="Password"
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
                <Box display='flex' justifyContent='space-between' width='100%' mt='10px'>
                    <Box></Box>
                    <Box>
                        <Link to="/login" style={{fontSize: '14px'}}>
                            {"Already have an account? Log In"}
                        </Link>
                    </Box>
                </Box>
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
                        onClick={signUpHandler}
                >Sign Up</Button>
            </Box>
        </Box>
    );
}

export default SignUpFormComponent;