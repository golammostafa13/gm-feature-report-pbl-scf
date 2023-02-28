import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  OutlinedInput,
  TextField,
  Typography,
  Grid,
  FormGroup
} from "@mui/material";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import {useEffect, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {useLoginMutation} from "../services/api/authApiSlice";
import {setUserInfo} from "../services/slices/userSlice";
import {useDispatch, useSelector} from "react-redux";
import {getRTKQErrorMessage} from "../utils/rtkErrorUtil";
import {topBarStyle} from "../theme/customStyles/layoutStyles";
import primeBankLogo from '../images/Prime_Bank_Logo.png';
import loginPageSvg from '../images/Login_Page_svg.jpg'
import InputLabel from '@mui/material/InputLabel';
import CustomIcon from "../component/customIcons/CustomIcon";
import CustomSnackBar from "../component/customMUIComponents/customSnackBar";

const Login = () => {
  const {token} = useSelector((state: any) => state.userInfo)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [values, setValues] = useState({
    user_name: '',
    password: '123',
    showPassword: false,
  });
  const [snackBarData, setSnackBarData] = useState({
    message: '',
    type: ''
  });
  const [login, {data: loginData, error}] = useLoginMutation()
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

  const loginHandler = async () => {
    await login({user_name: values.user_name, password: values.password})
  }

  useEffect(() => {
    if (token) {
      navigate('/dashboard')
    }
  }, [token])

  useEffect(() => {
    if (error) {
      setSnackBarData({message: getRTKQErrorMessage(error), type: 'error'})
      return
    }
    if (loginData?.access_token) {
      dispatch(setUserInfo(loginData))
    }
  }, [loginData, error])

  /* todo: remove code block*/
  let users = [
    {user_name: 'bank-maker', password: '123'},
    {user_name: 'bank-checker', password: '123'},
    {user_name: 'supplier_invoice_maker', password: '123'},
    {user_name: 'supplier_invoice_checker', password: '123'},
  ]

  return (
      <Box sx={{flexGrow: 1, backgroundColor: '#DFF6FF', mt: `-${topBarStyle.height}`, height: '100vh'}}>
        {/* todo: remove code block*/}
        <Box sx={{position: 'fixed', left: 0, bottom: 200, display: 'flex'}} flexDirection='column' gap='5px'>
          {users.map(({user_name, password}) => <Button variant='contained'
                                                        //@ts-ignore
                                                        onClick={() => setValues({user_name,password})}>{user_name}</Button>)}
        </Box>
        <CustomSnackBar messageText={snackBarData.message} type={snackBarData.type} resetMessage={setSnackBarData}/>
        <Grid container spacing={{xs: 3}} columns={{xs: 4, sm: 8, md: 12}}>
          <Grid item xs={6}>
            <Box sx={{mt: 3.7}}>
              <img src={primeBankLogo} width='50%' alt=""/>
            </Box>
            <Box sx={{mt: 12}}>
              <img src={loginPageSvg} width='100%' alt=""/>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box sx={{mx: 8}}>
              <Box sx={{mt: 7, mb: 17, display: 'flex', justifyContent: 'space-evenly'}}>
                <Link to="#">
                  <CustomIcon iconName={'ErrorOutline'}></CustomIcon>
                </Link>
                <Link to="#">
                  <CustomIcon iconName={'Q&A'}></CustomIcon>
                </Link>
                <Link to="#">
                  <CustomIcon iconName={'Feedback'}></CustomIcon>
                </Link>
              </Box>
              <Typography sx={{fontSize: '34px', fontWeight: 500, color: '#06283D'}}>Supply Chain Financing
                System</Typography>
              <Box>
                <FormGroup sx={{mt: 7.5}}>
                  <InputLabel htmlFor="bootstrap-input" sx={{
                    fontWeight: 400,
                    fontSize: '30px',
                    lineHeight: '35px',
                    letterSpacing: '0.3px',
                    color: '#06283D',
                    textAlign: 'left'
                  }}>
                    User Name
                  </InputLabel>
                  <TextField
                      id="bootstrap-input"
                      sx={{mt: 2.2, background: '#FCFDFE', border: '1px solid #06283D', borderRadius: '8px'}}
                      value={values.user_name}
                      autoComplete={'none'}
                      onChange={handleChange('user_name')}
                  />
                </FormGroup>
                <FormGroup sx={{mt: 7}}>
                  <InputLabel htmlFor="bootstrap-input" sx={{
                    fontWeight: 400,
                    fontSize: '30px',
                    lineHeight: '35px',
                    letterSpacing: '0.3px',
                    color: '#06283D',
                    textAlign: 'left'
                  }}>
                    Password
                  </InputLabel>
                  <OutlinedInput
                      id="bootstrap-input"
                      sx={{mt: 2.2, background: '#FCFDFE', border: '1px solid #06283D', borderRadius: '8px'}}
                      value={values.password}
                      type={values.showPassword ? 'text' : 'password'}
                      onChange={handleChange('password')}
                      autoComplete={'none'}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                              size='small'
                          >
                            {values.showPassword ? <Visibility/> : <VisibilityOff/>}
                          </IconButton>
                        </InputAdornment>
                      }
                  />
                </FormGroup>
              </Box>
              <Box sx={{mt: 0.63}}>
                <Link to="#" style={{fontSize: '14px', fontWeight: 400, color: '#06283D', textDecoration: 'none'}}>Forgot
                  password?</Link>
              </Box>
              <Button variant='contained'
                      sx={{
                        fontSize: '30px',
                        fontWeight: 400,
                        background: '#06283D',
                        textTransform: 'capitalize',
                        color: '#fff',
                        mt: 10.7,
                        boxShadow: '0px 4px 12px rgba(55, 81, 255, 0.24)',
                        borderRadius: '8px'
                      }}
                      size='small'
                      fullWidth
                      onClick={loginHandler}
              >Login</Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
  );
}

export default Login;