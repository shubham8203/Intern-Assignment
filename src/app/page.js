'use client'

import {  Select, InputLabel,MenuItem,Box,FormControl,ThemeProvider,
  createTheme,
  CssBaseline,
  Switch,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
   } from "@mui/material";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import React, { useState } from "react";
import paid from '../Public/paid.png'
import sent from '../Public/sent.png'
import draft from '../Public/draft.png'
import reject from '../Public/reject.png'
import over from '../Public/over.png'
import Table1 from "./Table1";
import './global.css'
import App from "next/app";


export default function Home() {

  const [status,setStatus] = useState('');
  const [search,setSearch] = useState('')
  const [darkMode, setDarkMode] = useState(false);

  // Create theme based on the current mode (light/dark)
  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  // Toggle Dark Mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  const handleChange = (e) => {
    setStatus(e.target.value);
  };



  return (
    <ThemeProvider theme={theme}>
       <CssBaseline />
       <AppBar position="sticky"  >
        <Toolbar sx={{display:'flex',justifyContent:'flex-end'}}>
        <Typography variant="h6">Choose Theme</Typography>
       <IconButton sx={{ ml: 1 }} onClick={toggleDarkMode} color="inherit">
            {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
      

        </Toolbar>
        </AppBar>
          
          
        
     
    <div className="HomePage ">
      
     
      
         <div className="header ">
<div  className=" invoice ">
  Invoice Table
</div>
<div className=" search-filter   ">
<input type='text' className="input " value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Search Invoice"></input>
<div>
<Box className='status-input'>
      <FormControl fullWidth size="small" className=" flex flex-col " >
        <InputLabel id="demo-simple-select-label">Status</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={status}
          className="status-select"
          label="status"
          onChange={handleChange}
        >
          <MenuItem className=" item   " value="Paid"><img  src={paid.src} className="img"/>Paid</MenuItem>
          <MenuItem className=" item " value="Sent"><img  src={sent.src} className="img"/>Sent</MenuItem>
          <MenuItem value="Draft" className="item " ><img  src={draft.src} className="img"/>Draft</MenuItem>
          
          <MenuItem value="Cancelled"className="item " ><img  src={reject.src} className="img"/>Cancelled</MenuItem>
          <MenuItem value="Overdue"className="item " ><img  src={over.src} className="img"/>Overdue</MenuItem>
        </Select>
      </FormControl>
    </Box>
  
</div>
</div>
</div>
<div className="table">
<Table1 status={status} search={search}/>
</div>
</div>
    </ThemeProvider>
  );
}

