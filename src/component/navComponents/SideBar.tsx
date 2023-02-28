import {Box, Divider, Drawer, useMediaQuery} from '@mui/material';
import {NavItem} from './NavItem';
import {useLocation} from "react-router-dom";
import {ThemeType} from "../../theme";
import {topBarStyle} from "../../theme/customStyles/layoutStyles";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../services/store";

export const SideBar = (props: { open: any; onClose: any; }) => {
  const items = useSelector((state:RootState)=> state.userInfo.menu_json)
  const location = useLocation();
  const {open, onClose} = props;
  const [currentPath, setCurrentPath] = useState('');
  const lgUp = useMediaQuery((theme: ThemeType) => theme.breakpoints.up('lg'), {
    defaultMatches: true,
    noSsr: false
  });

  useEffect(() => {
    if (location)
      setCurrentPath(location.pathname)
  }, [location.pathname]);

  const content = (
      <>
        <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              backgroundColor: 'primary.main',
              mt: topBarStyle.height,
              transition: '1s'
            }}
        >
          <Divider
              sx={{
                borderColor: '#2D3748',
              }}
          />
          <Box sx={{flexGrow: 1}}>
            {items.map((item:any) => (
                <NavItem
                    key={item.title}
                    icon={item.icon}
                    href={item.href}
                    title={item.title}
                    active={item.href === currentPath}
                />
            ))}
          </Box>
          <Divider sx={{borderColor: 'primary.contrastText'}}/>
        </Box>
      </>
  );
  return (
      <Drawer
          anchor="left"
          onClose={onClose}
          open={open}
          PaperProps={{
            sx: {
              ml: (!open && lgUp) ? '-280px' : '',
              color: '#000',
              width: 280
            }
          }}
          variant={lgUp ? "permanent" : 'temporary'}
      >
        {content}
      </Drawer>
  );
};
