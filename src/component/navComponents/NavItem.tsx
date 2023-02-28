import {Box, Button, ListItem} from '@mui/material';
import {Link} from "react-router-dom";
import '../../styles/header.css'

export const NavItem = (props: { [x: string]: any; href: any; icon: any; title: any; }) => {
  const {href, icon, title, active, ...others} = props;

  return (
      <ListItem
          disableGutters
          sx={{
            display: 'flex',
            borderBottom: "1px solid #fff",
            backgroundColor: active ? 'primary.dark' : 'primary.main',
            '&:hover': {
              cursor: 'pointer',
              backgroundColor: 'primary.dark'
            }
          }}
          {...others}
      >
        <Link
            to={href}
            style={{
              textDecoration: 'none', width: '100%'
            }}
        >
          <Button
              startIcon={icon}
              disableRipple
              className='left-nav-link'
              sx={{
                borderRadius: 1,
                fontWeight: active ? 'fontWeightBold' : '400',
                justifyContent: 'flex-start',
                paddingRight: 3,
                textAlign: 'left',
                textTransform: 'none',
                width: '100%'
              }}
          >
            <Box sx={{flexGrow: 1, color: 'primary.contrastText', fontSize: '18px'}}>
              {title}
            </Box>
          </Button>
        </Link>
      </ListItem>
  );
};
