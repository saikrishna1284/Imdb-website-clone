import React from 'react';
import {useState} from 'react';
import { AppBar,Toolbar,styled,Box,Typography,InputBase} from '@mui/material';
import {Menu,BookmarkAdd, ExpandMore} from "@mui/icons-material";
import { logoURL } from '../consonats/consonats';
import HeaderMenu from './HeaderMenu';
import { useNavigate } from 'react-router-dom';
import { routhPath } from '../consonats/routh';
  
const StyledToolBar = styled(Toolbar)`
background:black;
min-height:56px !important;
padding:0 115px !important;
justify-content:space-between;
& > *{
  padding:16px;
}
& > div{
  display:flex;
  align-items:center;
  cursor:pointer;
  & > P {
    font-size:14px;
    font-weight:600;
  }
}
& > p {
  font-size:14px;
  font-weight:600;
}
`;
const InputSearchField = styled(InputBase)`
      background:#FFFFFF;
      height: 30px;
      width: 55%;
      Border-radius: 5px;
`
const Logo=styled('img')({
    width:64
})

const Header = () => {
   
   
    const [open, setOpen]= useState(null);

    const navigate = useNavigate();
       
     const handleClick = (e) =>{
       setOpen(e.currentTarget);
     }
     const handleClose = () =>{
      setOpen(null);
     }
  return (
    <div>
      <AppBar position='static'>
        <StyledToolBar>
         <Logo src={logoURL} alt="logo" onClick={() => navigate(routhPath.home)} />
         <Box onClick={handleClick}>
            <Menu/>
            <Typography>Menu</Typography>
         </Box>
         <HeaderMenu open={open} handleClose={handleClose}/>
         <InputSearchField/>
         <Typography>IMDB<Box component="span">Pro</Box></Typography>
         <Box>
           <BookmarkAdd/>
           <Typography>Watchlist</Typography>
         </Box>
         <Typography>Sign In</Typography>
         <Box>
           <Typography>EN</Typography>
           <ExpandMore/>
         </Box>
        </StyledToolBar>
      </AppBar>
    </div>
  )
}

export default Header
