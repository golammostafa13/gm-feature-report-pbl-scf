import {ReactNode, useState} from 'react';
import {Box, useMediaQuery} from '@mui/material';
import {NavBar} from './navComponents/NavBar';
import {SideBar} from './navComponents/SideBar';
import {useSelector} from "react-redux";
import {topBarStyle} from "../theme/customStyles/layoutStyles";
import {ThemeType} from "../theme";

export const Layout = (props: { children: ReactNode }) => {
  const {children} = props;
  const {token} = useSelector((state: any) => state.userInfo)
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const lgUp = useMediaQuery((theme: ThemeType) => theme.breakpoints.up('lg'), {
    defaultMatches: true,
    noSsr: false
  });

  return (
      <>
        <Box className='main-content' sx={{
          display: 'flex',
          flex: '1 1 auto',
          maxWidth: '100%',
          paddingTop: '35px',
          ml: !!token && isSidebarOpen && lgUp ? '280px' : '0px',
        }}>
          <Box
              sx={!!token ? {
                width: '100%',
                background: '#fff',
                minHeight: '750px'
              } : {
                width: '100%',
              }}
          >
            {children}
          </Box>
        </Box>
        {!!token && <>
          <NavBar onSidebarOpen={() => setSidebarOpen(state => !state)}/>
          <SideBar
              onClose={() => setSidebarOpen(false)}
              open={isSidebarOpen}
          />
        </>}
      </>
  );
};
