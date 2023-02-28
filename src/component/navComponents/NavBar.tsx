import styled from '@emotion/styled';
import {AppBar, Avatar, Badge, Box, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import theme, {ThemeType} from "../../theme";
import {useEffect, useState} from "react";
import {logout} from "../../services/slices/userSlice";
import {useDispatch, useSelector} from "react-redux";
import {useLogoutMutation} from "../../services/api/authApiSlice";
import {getRTKQErrorMessage} from "../../utils/rtkErrorUtil";
import {topBarStyle} from "../../theme/customStyles/layoutStyles";
import {Link} from "react-router-dom";
import primeBankLogo from "../../images/Prime_Bank_Logo.png";

const DashboardNavbarRoot = styled(AppBar)(({theme}: { theme: ThemeType }) => ({
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[3]
}));

export const NavBar = (props: { [x: string]: any; onSidebarOpen: any; }) => {
  const {onSidebarOpen, ...other} = props;
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const dispatch = useDispatch()
  const [apiLogout, {data, error}] = useLogoutMutation()
  const {role, user_name} = useSelector((state: any) => state.userInfo)

  const handleOpenUserMenu = (event: any) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleLogout = async () => {
    await apiLogout()
    dispatch(logout())
    handleCloseUserMenu()
  };

  useEffect(() => {
    if (error)
      alert(getRTKQErrorMessage((error)))
  }, [error]);

  return (
      <>
        <DashboardNavbarRoot
            theme={theme}
            sx={{
              zIndex: 1201
            }}
            {...other}>
          <Toolbar
              disableGutters
              variant='dense'
              sx={{
                left: 0,
                px: 2,
                background: topBarStyle.background,
                height: topBarStyle.height,
              }}
          >
            <Box display='flex' justifyContent='flex-start' textAlign='left'>
              <Box sx={{width: '260px', background: topBarStyle.background, height: topBarStyle.height}}>
                <Link to="/">
                  <img style={{marginTop: '10px'}} src={primeBankLogo} width='60%' alt=""/>
                </Link>
              </Box>
              <IconButton onClick={onSidebarOpen}>
                <MenuIcon fontSize="small"/>
              </IconButton>
            </Box>
            <Box sx={{flexGrow: 1}}/>
            <Tooltip title="Contacts">
              <IconButton sx={{ml: 1}}>
                <PersonIcon fontSize="small"/>
              </IconButton>
            </Tooltip>
            <Tooltip title="Notifications">
              <IconButton sx={{ml: 1}}>
                <Badge badgeContent={4} color="primary" variant="dot">
                  <NotificationsIcon fontSize="small"/>
                </Badge>
              </IconButton>
            </Tooltip>
            <Box sx={{flexGrow: 0}}>
              <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg"/>
              </IconButton>
              <Menu
                  sx={{mt: '45px'}}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
              >
                <MenuItem>
                  <Typography textAlign="center"><b>name: </b>{user_name}</Typography>
                </MenuItem>
                <MenuItem>
                  <Typography textAlign="center"><b>role: </b>{role}</Typography>
                </MenuItem>
                <MenuItem onClick={handleLogout}>
                  <Typography textAlign="center">Logout</Typography>
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </DashboardNavbarRoot>
      </>
  );
};
